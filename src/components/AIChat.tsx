import { useEffect, useRef, useState } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useApp } from '../App';

interface Message { role: 'assistant' | 'user'; text: string; }

const MOCK_RESPONSES: Record<string, string> = {
  default: "Thank you for your message. I'm here to help you explore ALA CORE's solutions and guide you to the right technology partner. Could you tell me more about your business challenge or what you're looking to achieve?",
  solutions: 'ALA CORE offers a full spectrum of technology solutions including AI systems, enterprise software, business automation, cloud infrastructure, system integration, and data analytics. Which area is most relevant to your current needs?',
  project: "Starting a project with ALA CORE begins with a discovery conversation. We'll understand your business, constraints, and goals before recommending an approach. Would you like to connect with our team? You can reach us at info@alacore.net or use the contact form.",
  contact: 'You can reach ALA CORE at info@alacore.net or through our contact page. For department-specific inquiries, we have dedicated email addresses for AI, software, cloud, security, and more. Would you like me to direct you?',
  meeting: "To book a meeting with our team, please use our contact form and select 'Meeting' as your preferred contact method. We'll schedule a call within one business day. Would you like me to take you to the contact page?",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes('solution') || lower.includes('service')) return MOCK_RESPONSES.solutions;
  if (lower.includes('project') || lower.includes('start') || lower.includes('build')) return MOCK_RESPONSES.project;
  if (lower.includes('contact') || lower.includes('email') || lower.includes('reach')) return MOCK_RESPONSES.contact;
  if (lower.includes('meeting') || lower.includes('call') || lower.includes('book')) return MOCK_RESPONSES.meeting;
  return MOCK_RESPONSES.default;
}

function focusableElements(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(element => !element.hasAttribute('hidden'));
}

interface Props { open: boolean; onClose: () => void; }

export default function AIChat({ open, onClose }: Props) {
  const { t, setPage } = useApp();
  const reducedMotion = useReducedMotion();
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', text: t.ai.greeting }]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const wasOpen = useRef(false);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  useEffect(() => {
    if (open) {
      openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      requestAnimationFrame(() => closeRef.current?.focus());
    } else if (wasOpen.current) {
      requestAnimationFrame(() => openerRef.current?.focus());
    }
    wasOpen.current = open;
  }, [open]);

  const send = async (text: string) => {
    if (!text.trim() || thinking) return;
    setMessages(current => [...current, { role: 'user', text }]);
    setInput('');
    setThinking(true);
    await new Promise(resolve => setTimeout(resolve, 900 + Math.random() * 600));
    setThinking(false);
    setMessages(current => [...current, { role: 'assistant', text: getResponse(text) }]);
  };

  const handleQuickAction = (action: string) => {
    if (action === 'Explore solutions') { onClose(); setPage('solutions'); return; }
    if (action === 'Start a project' || action === 'Contact team') { onClose(); setPage('contact'); return; }
    send(action);
  };

  const handleDialogKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') { event.preventDefault(); onClose(); return; }
    if (event.key !== 'Tab' || !dialogRef.current) return;
    const items = focusableElements(dialogRef.current);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  return <AnimatePresence>{open && <>
    <motion.div initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }} transition={reducedMotion ? { duration: 0 } : undefined} className="fixed inset-0 z-50" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(2px)' }} onClick={onClose} />
    <motion.div
      ref={dialogRef} initial={reducedMotion ? false : { opacity: 0, x: 40, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 40, scale: 0.97 }} transition={reducedMotion ? { duration: 0 } : { type: 'spring', damping: 28, stiffness: 300 }}
      role="dialog" aria-modal="true" aria-labelledby="ai-chat-title" tabIndex={-1} onKeyDown={handleDialogKeyDown}
      className="fixed bottom-4 right-4 z-50 flex flex-col rounded-2xl shadow-2xl overflow-hidden sm:bottom-6 sm:right-6"
      style={{ width: 'min(420px, calc(100vw - 24px))', height: 'min(600px, calc(100vh - 48px))', background: 'var(--surface)', border: '1px solid var(--border)' }} onClick={event => event.stopPropagation()}
    >
      <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--blue)' }}><Sparkles size={14} color="#fff" /></div><div><p id="ai-chat-title" className="text-[14px] font-700" style={{ fontWeight: 700, color: 'var(--text)' }}>{t.ai.title}</p><p className="mt-0.5 text-[11px]" style={{ color: 'var(--text-3)' }}>Demo assistant</p></div></div>
        <button ref={closeRef} onClick={onClose} aria-label="Close AI assistant" className="ui-focus-ring p-1.5 rounded-lg transition-colors" style={{ color: 'var(--text-3)' }}><X size={16} /></button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" aria-live="polite">
        {messages.map((message, index) => <div key={index} className={'flex ' + (message.role === 'user' ? 'justify-end' : 'justify-start')}><div className="max-w-[85%] px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed" style={message.role === 'user' ? { background: 'var(--blue)', color: '#fff', borderBottomRightRadius: 4 } : { background: 'var(--surface-2)', color: 'var(--text)', borderBottomLeftRadius: 4 }}>{message.text}</div></div>)}
        {thinking && <div className="flex justify-start"><div className="px-4 py-3 rounded-2xl" style={{ background: 'var(--surface-2)', borderBottomLeftRadius: 4 }}><div className="flex gap-1">{[0, 1, 2].map(index => <span key={index} className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--text-4)', animation: 'pulse 1.4s ' + (index * 0.2) + 's infinite' }} />)}</div></div></div>}
        {messages.length <= 1 && <div className="flex flex-col gap-2 mt-2">{t.ai.actions.map(action => <button key={action} onClick={() => handleQuickAction(action)} className="ui-focus-ring text-left px-3 py-2.5 rounded-xl text-[13px] font-600 transition-colors border" style={{ fontWeight: 600, color: 'var(--text-2)', background: 'var(--surface-2)', borderColor: 'var(--border)' }}>{action} →</button>)}</div>}
        <div ref={bottomRef} />
      </div>
      <div className="px-4 py-4" style={{ borderTop: '1px solid var(--border)' }}><form onSubmit={event => { event.preventDefault(); send(input); }} className="ai-chat-input flex items-center gap-2 px-4 py-2.5 rounded-xl" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}><input value={input} onChange={event => setInput(event.target.value)} placeholder={t.ai.placeholder} aria-label={t.ai.placeholder} className="ui-focus-ring flex-1 bg-transparent text-[14px] outline-none" style={{ color: 'var(--text)', fontFamily: "'Manrope', sans-serif" }} /><button type="submit" disabled={!input.trim() || thinking} className="ui-focus-ring p-1.5 rounded-lg transition-all" style={{ background: input.trim() ? 'var(--blue)' : 'var(--border)', color: '#fff', cursor: input.trim() ? 'pointer' : 'default' }}><Send size={13} /></button></form><p className="text-[11px] text-center mt-2" style={{ color: 'var(--text-4)' }}>Demo responses, not live AI advice.</p></div>
    </motion.div>
  </>}</AnimatePresence>;
}
