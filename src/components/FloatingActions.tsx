import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Mail } from 'lucide-react';

interface Props { onAIClick: () => void; }

export default function FloatingActions({ onAIClick }: Props) {
  const reducedMotion = useReducedMotion();
  return <div className="fixed bottom-4 right-4 z-40 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6" style={{ pointerEvents: 'none', bottom: 'max(1rem, calc(env(safe-area-inset-bottom) + 1rem))', right: 'max(1rem, calc(env(safe-area-inset-right) + 1rem))' }}>
    <motion.button initial={reducedMotion ? false : { opacity: 0, scale: 0.8, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={reducedMotion ? { duration: 0 } : { delay: 0.8, type: 'spring', damping: 20 }} whileHover={reducedMotion ? undefined : { scale: 1.08 }} whileTap={reducedMotion ? undefined : { scale: 0.95 }} onClick={onAIClick} className="ui-focus-ring rounded-full flex items-center justify-center shadow-lg" style={{ width: 52, height: 52, background: '#1565F2', color: '#fff', pointerEvents: 'auto', boxShadow: '0 4px 20px rgba(21,101,242,0.4)', border: 'none', cursor: 'pointer' }} aria-label="Open AI Assistant" title="ALA AI Assistant"><Sparkles size={20} /></motion.button>
    <motion.a initial={reducedMotion ? false : { opacity: 0, scale: 0.8, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={reducedMotion ? { duration: 0 } : { delay: 1, type: 'spring', damping: 20 }} whileHover={reducedMotion ? undefined : { scale: 1.08 }} whileTap={reducedMotion ? undefined : { scale: 0.95 }} href="mailto:info@alacore.net" className="ui-focus-ring rounded-full flex items-center justify-center shadow-lg" style={{ width: 52, height: 52, background: '#334155', color: '#fff', pointerEvents: 'auto', boxShadow: '0 4px 20px rgba(51,65,85,0.35)' }} aria-label="Email ALA CORE" title="Email ALA CORE"><Mail size={20} /></motion.a>
  </div>;
}
