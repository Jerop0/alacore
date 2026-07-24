import type { Lang } from './types';


const task2En = {
  navA11y: {
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    primaryNavigation: 'Primary navigation',
    mobileNavigation: 'Mobile navigation',
    toggleTheme: 'Toggle theme',
  },
  footerPage: {
    solutionLinks: ['AI systems', 'Enterprise software', 'Business automation', 'System integration', 'Cloud infrastructure', 'Data & analytics'],
    departments: ['Artificial intelligence', 'Software', 'Web', 'Enterprise', 'Automation', 'Cloud', 'Security', 'Data', 'Design', 'Infrastructure', 'Payments', 'IoT', 'Careers'],
    newsletterStatus: 'Newsletter sign-ups are not available yet. For company updates, contact us directly.',
    legalUnavailable: 'Available on request',
  },
  solutionsPage: {
    label: 'Solutions', title: 'What we do', sub: 'We solve business problems using technology. We build complete end-to-end solutions tailored to your industry and scale.', capabilities: 'Capabilities', cta: 'Not sure which solution fits your challenge? Let us help you define it.',
    details: [
      { title: 'AI systems', desc: 'We design and deploy production-grade AI systems — from machine learning pipelines and language model integrations to computer vision and intelligent automation.', capabilities: ['Custom ML model development', 'LLM integration & fine-tuning', 'Predictive analytics pipelines', 'AI-powered document processing', 'Natural language interfaces', 'Recommendation systems'], industries: ['Retail', 'Logistics', 'Finance', 'Healthcare'] },
      { title: 'Enterprise software', desc: 'We design, build, and implement enterprise software systems — ERP, CRM, and custom platforms — engineered for complex organizations and mission-critical operations.', capabilities: ['ERP implementation & customization', 'CRM development', 'Custom enterprise platforms', 'Multi-entity & multi-currency support', 'Role-based access control', 'Audit logging & compliance'], industries: ['Manufacturing', 'Finance', 'Real estate', 'Healthcare'] },
      { title: 'Business automation', desc: 'We eliminate manual overhead through intelligent automation — workflow orchestration, document processing, approval routing, and business process management.', capabilities: ['Workflow automation design', 'Robotic process automation', 'Document extraction & classification', 'Approval & notification systems', 'Integration with existing tools', 'Monitoring & alerting'], industries: ['Logistics', 'Finance', 'HR', 'Operations'] },
      { title: 'System integration', desc: 'We connect disparate systems into coherent architectures — designing APIs, building data pipelines, and modernizing legacy integrations.', capabilities: ['REST & GraphQL API design', 'Legacy system modernization', 'ETL & data pipelines', 'Event-driven architectures', 'Third-party platform connectors', 'Real-time synchronization'], industries: ['Any sector with legacy systems'] },
      { title: 'Cloud infrastructure', desc: 'We architect, deploy, and manage cloud-native infrastructure — from Kubernetes clusters and CI/CD pipelines to multi-cloud strategies and infrastructure as code.', capabilities: ['Multi-cloud architecture (AWS, Azure, GCP)', 'Kubernetes & container orchestration', 'CI/CD pipeline design', 'Infrastructure as code (Terraform)', 'Cost optimization', 'Disaster recovery planning'], industries: ['Technology', 'Finance', 'Healthcare', 'SaaS'] },
      { title: 'Data & analytics', desc: 'We build the data infrastructure businesses need to make decisions — from warehousing and BI dashboards to real-time analytics and predictive reporting.', capabilities: ['Data warehouse design', 'BI dashboard development', 'Real-time analytics', 'Data governance frameworks', 'Self-service reporting tools', 'Predictive modeling'], industries: ['Retail', 'Finance', 'Manufacturing', 'Healthcare'] },
      { title: 'Cybersecurity', desc: 'We embed security into every layer of the stack — from architecture reviews and penetration testing to compliance frameworks and secure development practices.', capabilities: ['Security architecture review', 'Penetration testing', 'GDPR / ISO 27001 compliance', 'Vulnerability assessments', 'Secure SDLC implementation', 'Incident response planning'], industries: ['Finance', 'Healthcare', 'Government', 'Any regulated sector'] },
      { title: 'Digital transformation', desc: 'We lead end-to-end digital transformation programs — modernizing legacy operations, enabling new business models, and building the technology foundation for long-term growth.', capabilities: ['Transformation roadmap design', 'Legacy modernization', 'Change management support', 'Digital process redesign', 'Platform consolidation', 'Training & enablement'], industries: ['Manufacturing', 'Retail', 'Healthcare', 'Public sector'] },
    ],
  },
  productsPage: {
    label: 'Products', heroTitle: 'Our product suite.', heroSub: 'Alongside client work, we build our own software products. These are purpose-built tools for specific operational problems — designed for the same enterprises we serve.', developmentNotice: 'All products are currently in development. Register interest at', comingSoon: 'Coming soon', registerInterest: 'Register interest', coreFeatures: 'Core features', platformSuite: 'Platform suite — coming soon', moreFeatures: 'more', ctaTitle: 'Need a custom solution instead?', ctaSub: 'If none of our products fit exactly, we build custom software for enterprise clients.', cta: 'Explore custom solutions',
    items: [
      { tagline: 'Intelligent inventory management', desc: 'SmartStock AI is an AI-powered inventory intelligence platform for retail and logistics companies. It reduces stockouts, eliminates overstock, and optimizes reorder cycles through predictive demand modeling.', features: ['Demand forecasting', 'Automated reorder alerts', 'Multi-location support', 'POS & ERP integration', 'Real-time dashboard', 'Supplier API connectivity'] },
      { tagline: 'Enterprise resource planning', desc: 'A fully localized, multi-entity ERP platform designed for mid-market and enterprise companies operating across multiple countries and currencies.', features: ['Multi-entity & multi-currency', 'Finance & accounting', 'Procurement & inventory', 'Project management', 'Reporting & BI', 'Role-based access control'] },
      { tagline: 'Customer relationship management', desc: 'CRM engineered for complex, enterprise sales cycles. Pipeline management, relationship intelligence, and automation without bloat.', features: ['Pipeline management', 'Contact intelligence', 'Activity tracking', 'Email integration', 'Sales forecasting', 'Custom workflows'] },
      { tagline: 'Point of sale & retail', desc: 'A modern POS platform built for retail, hospitality, and F&B. Works offline, integrates with ERP, and supports complex pricing and loyalty programs.', features: ['Offline-first operation', 'Multi-terminal support', 'Loyalty & promotions', 'Kitchen display integration', 'ERP sync', 'Analytics dashboard'] },
      { tagline: 'Human resources & workforce', desc: 'HR and workforce management platform for companies managing complex, multi-location, multi-contract employee structures.', features: ['Employee records management', 'Leave & attendance', 'Payroll integration', 'Performance reviews', 'Onboarding workflows', 'Compliance tracking'] },
      { tagline: 'AI platform for enterprise', desc: 'An enterprise AI platform providing reusable AI building blocks — document processing, language interfaces, and automation primitives — that development teams can deploy across internal systems.', features: ['Document extraction API', 'LLM gateway & caching', 'Workflow automation engine', 'Vector search', 'Observability & logging', 'On-premise deployment option'] },
    ],
  },
  aboutPage: {
    hero: { label: 'About ALA CORE', title: 'We are an engineering company.', sub: 'Not an agency. Not a consultancy. An engineering company that builds complete technology systems for businesses that take technology seriously.' },
    principles: { title: 'Engineering principles', sub: 'These are not aspirational values — they are the actual technical constraints we impose on every project we touch.', items: [{ title: 'Documentation is not optional', desc: 'Every system we build is documented as part of the engineering work — architecture decisions, API contracts, and operational runbooks are deliverables, not afterthoughts.' }, { title: 'Test coverage is a minimum, not a stretch goal', desc: 'We define test coverage requirements before writing production code. Critical business logic has 100% coverage by requirement.' }, { title: 'Monitoring and observability from day one', desc: 'No system goes to production without structured logging, error tracking, performance monitoring, and alerting. We assume things will fail and plan accordingly.' }, { title: 'Simplicity over cleverness', desc: 'We resist complexity that does not serve the user. Clever engineering that is hard to maintain or understand is a liability, not an asset.' }] },
    process: { title: 'Our process', steps: [{ num: '01', title: 'Discovery & scoping', desc: 'We start by understanding your business deeply — operations, constraints, stakeholders, and goals — before defining technical scope.' }, { num: '02', title: 'Architecture & design', desc: 'Architectural blueprints, data models, integration maps, and UX wireframes are validated before any development begins.' }, { num: '03', title: 'Engineering & development', desc: 'Iterative development in tight sprints with continuous stakeholder visibility. No black boxes.' }, { num: '04', title: 'Testing & quality', desc: 'Automated testing, security audits, performance benchmarking, and structured UAT before any release.' }, { num: '05', title: 'Deployment & support', desc: 'Structured go-live with full monitoring, documentation handover, and ongoing support options.' }] },
    globalLabel: 'Global vision', getInTouch: 'Get in touch', stats: [{ label: 'Languages supported', value: '3' }, { label: 'Countries served', value: '12+' }, { label: 'Time zones covered', value: 'Global' }, { label: 'Deployment regions', value: '5+' }],
  },
  careersPage: { hero: { label: 'Careers', title: 'Work with exceptional engineers.', sub: "We're always looking for exceptional engineers, architects, and technologists who believe in building things properly." }, cta: 'Send your CV', openPositions: 'Open positions', noJobsSub: 'If you have a strong engineering background and believe in building technology the right way, we want to hear from you.' },
  contactPage: {
    hero: { label: 'Contact', title: 'Start a conversation.', sub: 'Tell us about your project or challenge. We will respond within one business day.' },
    form: { submit: 'Send message', selectPlaceholder: 'Select…', namePlaceholder: 'Jane Smith', companyPlaceholder: 'Acme GmbH', countryPlaceholder: 'Germany', descriptionPlaceholder: 'Describe your project, challenge, or question…', responseNote: 'We typically respond within one business day.', aiCta: 'Or describe your need to our AI →', industries: ['Technology', 'Retail', 'Manufacturing', 'Healthcare', 'Finance', 'Logistics', 'Hospitality', 'Education', 'Real estate', 'Other'], sizes: ['1–10', '11–50', '51–200', '201–1000', '1000+'], timelines: ['Less than 1 month', '1–3 months', '3–6 months', '6–12 months', '12+ months'], budgets: ['Under €20k', '€20k–€50k', '€50k–€150k', '€150k–€500k', '€500k+'], contactMethods: ['Email', 'Phone', 'Video call', 'WhatsApp'] },
    generalEnquiries: 'General enquiries', responseWithin: 'Response within 1 business day.', website: 'Website', departments: { sub: 'Contact a specific department directly.', items: ['Artificial intelligence', 'Software development', 'Web & digital', 'Enterprise systems', 'Automation', 'Cloud & infrastructure', 'Security', 'Data & analytics', 'Design', 'Marketing', 'Infrastructure', 'Payments', 'Communications', 'IoT', 'Media', 'Training', 'QA & testing', 'Localization', 'Loyalty', 'Legal tech', 'No-code', 'Accessibility'] },
  },
};

const task2De: typeof task2En = {
  navA11y: { menuOpen: 'Menü öffnen', menuClose: 'Menü schließen', primaryNavigation: 'Hauptnavigation', mobileNavigation: 'Mobile Navigation', toggleTheme: 'Darstellung wechseln' },
  footerPage: { solutionLinks: ['KI-Systeme', 'Unternehmenssoftware', 'Geschäftsautomatisierung', 'Systemintegration', 'Cloud-Infrastruktur', 'Daten & Analytik'], departments: ['Künstliche Intelligenz', 'Software', 'Web', 'Unternehmen', 'Automatisierung', 'Cloud', 'Sicherheit', 'Daten', 'Design', 'Infrastruktur', 'Zahlungen', 'IoT', 'Karriere'], newsletterStatus: 'Newsletter-Anmeldungen sind noch nicht verfügbar. Kontaktieren Sie uns direkt für Unternehmensneuigkeiten.', legalUnavailable: 'Auf Anfrage verfügbar' },
  solutionsPage: {
    label: 'Lösungen', title: 'Was wir tun', sub: 'Wir lösen Geschäftsprobleme mit Technologie. Wir entwickeln vollständige End-to-End-Lösungen, die auf Ihre Branche und Größe zugeschnitten sind.', capabilities: 'Funktionen', cta: 'Sie sind nicht sicher, welche Lösung zu Ihrer Herausforderung passt? Wir helfen Ihnen, sie zu definieren.',
    details: [
      { title: 'KI-Systeme', desc: 'Wir konzipieren und implementieren produktionsreife KI-Systeme — von Machine-Learning-Pipelines und Sprachmodell-Integrationen bis zu Computer Vision und intelligenter Automatisierung.', capabilities: ['Entwicklung individueller ML-Modelle', 'LLM-Integration und Fine-Tuning', 'Pipelines für prädiktive Analysen', 'KI-gestützte Dokumentenverarbeitung', 'Schnittstellen in natürlicher Sprache', 'Empfehlungssysteme'], industries: ['Einzelhandel', 'Logistik', 'Finanzen', 'Gesundheitswesen'] },
      { title: 'Unternehmenssoftware', desc: 'Wir entwerfen, entwickeln und implementieren Unternehmenssoftware — ERP, CRM und individuelle Plattformen — für komplexe Organisationen und geschäftskritische Abläufe.', capabilities: ['ERP-Implementierung und -Anpassung', 'CRM-Entwicklung', 'Individuelle Unternehmensplattformen', 'Unterstützung mehrerer Gesellschaften und Währungen', 'Rollenbasierte Zugriffskontrolle', 'Audit-Protokollierung und Compliance'], industries: ['Fertigung', 'Finanzen', 'Immobilien', 'Gesundheitswesen'] },
      { title: 'Geschäftsautomatisierung', desc: 'Wir reduzieren manuellen Aufwand durch intelligente Automatisierung — Workflow-Orchestrierung, Dokumentenverarbeitung, Freigabeprozesse und Geschäftsprozessmanagement.', capabilities: ['Konzeption automatisierter Workflows', 'Robotergestützte Prozessautomatisierung', 'Dokumentenextraktion und -klassifizierung', 'Freigabe- und Benachrichtigungssysteme', 'Integration vorhandener Werkzeuge', 'Monitoring und Alarmierung'], industries: ['Logistik', 'Finanzen', 'Personalwesen', 'Betrieb'] },
      { title: 'Systemintegration', desc: 'Wir verbinden unterschiedliche Systeme zu stimmigen Architekturen — durch API-Design, Datenpipelines und die Modernisierung bestehender Integrationen.', capabilities: ['REST- und GraphQL-API-Design', 'Modernisierung von Altsystemen', 'ETL- und Datenpipelines', 'Ereignisgesteuerte Architekturen', 'Konnektoren für Drittplattformen', 'Echtzeitsynchronisierung'], industries: ['Jede Branche mit Altsystemen'] },
      { title: 'Cloud-Infrastruktur', desc: 'Wir konzipieren, implementieren und betreiben cloudnative Infrastruktur — von Kubernetes-Clustern und CI/CD-Pipelines bis zu Multi-Cloud-Strategien und Infrastructure as Code.', capabilities: ['Multi-Cloud-Architektur (AWS, Azure, GCP)', 'Kubernetes und Container-Orchestrierung', 'Konzeption von CI/CD-Pipelines', 'Infrastructure as Code (Terraform)', 'Kostenoptimierung', 'Notfallwiederherstellungsplanung'], industries: ['Technologie', 'Finanzen', 'Gesundheitswesen', 'SaaS'] },
      { title: 'Daten und Analytik', desc: 'Wir bauen die Dateninfrastruktur, die Unternehmen für fundierte Entscheidungen brauchen — von Data Warehouses und BI-Dashboards bis zu Echtzeitanalysen und Prognoseberichten.', capabilities: ['Konzeption von Data Warehouses', 'Entwicklung von BI-Dashboards', 'Echtzeitanalysen', 'Frameworks für Daten-Governance', 'Self-Service-Reporting-Tools', 'Prädiktive Modellierung'], industries: ['Einzelhandel', 'Finanzen', 'Fertigung', 'Gesundheitswesen'] },
      { title: 'Cybersicherheit', desc: 'Wir verankern Sicherheit auf jeder Ebene des Technologie-Stacks — von Architekturprüfungen und Penetrationstests bis zu Compliance-Frameworks und sicheren Entwicklungspraktiken.', capabilities: ['Prüfung der Sicherheitsarchitektur', 'Penetrationstests', 'DSGVO- und ISO-27001-Compliance', 'Schwachstellenbewertungen', 'Einführung eines sicheren SDLC', 'Planung der Incident Response'], industries: ['Finanzen', 'Gesundheitswesen', 'Öffentlicher Sektor', 'Jede regulierte Branche'] },
      { title: 'Digitale Transformation', desc: 'Wir führen End-to-End-Programme zur digitalen Transformation — modernisieren Altabläufe, ermöglichen neue Geschäftsmodelle und schaffen die technologische Grundlage für langfristiges Wachstum.', capabilities: ['Entwicklung von Transformations-Roadmaps', 'Modernisierung von Altsystemen', 'Unterstützung im Change Management', 'Neugestaltung digitaler Prozesse', 'Konsolidierung von Plattformen', 'Schulungen und Befähigung'], industries: ['Fertigung', 'Einzelhandel', 'Gesundheitswesen', 'Öffentlicher Sektor'] },
    ],
  },
  productsPage: {
    label: 'Produkte', heroTitle: 'Unsere Produktsuite.', heroSub: 'Neben der Arbeit für Kunden entwickeln wir eigene Softwareprodukte. Es sind zielgerichtete Werkzeuge für konkrete operative Herausforderungen — für dieselben Unternehmen, die wir betreuen.', developmentNotice: 'Alle Produkte befinden sich derzeit in Entwicklung. Interesse anmelden unter', comingSoon: 'Demnächst verfügbar', registerInterest: 'Interesse anmelden', coreFeatures: 'Kernfunktionen', platformSuite: 'Plattform-Suite — demnächst verfügbar', moreFeatures: 'mehr', ctaTitle: 'Benötigen Sie stattdessen eine individuelle Lösung?', ctaSub: 'Wenn keines unserer Produkte genau passt, entwickeln wir individuelle Software für Unternehmenskunden.', cta: 'Individuelle Lösungen entdecken',
    items: [
      { tagline: 'Intelligente Bestandsverwaltung', desc: 'SmartStock AI ist eine KI-gestützte Plattform für Bestandsintelligenz für Handels- und Logistikunternehmen. Sie reduziert Fehlbestände, verhindert Überbestände und optimiert Nachbestellzyklen durch prädiktive Bedarfsmodelle.', features: ['Bedarfsprognosen', 'Automatisierte Nachbestellwarnungen', 'Unterstützung mehrerer Standorte', 'POS- und ERP-Integration', 'Echtzeit-Dashboard', 'Anbindung an Lieferanten-APIs'] },
      { tagline: 'Unternehmensressourcenplanung', desc: 'Eine vollständig lokalisierte ERP-Plattform für mehrere Gesellschaften, entwickelt für mittelständische und große Unternehmen in mehreren Ländern und Währungen.', features: ['Mehrere Gesellschaften und Währungen', 'Finanzen und Buchhaltung', 'Beschaffung und Lagerbestand', 'Projektmanagement', 'Reporting und BI', 'Rollenbasierte Zugriffskontrolle'] },
      { tagline: 'Kundenbeziehungsmanagement', desc: 'CRM für komplexe Vertriebszyklen in Unternehmen. Pipeline-Management, Beziehungsintelligenz und Automatisierung ohne unnötigen Ballast.', features: ['Pipeline-Management', 'Kontaktintelligenz', 'Aktivitätsverfolgung', 'E-Mail-Integration', 'Vertriebsprognosen', 'Individuelle Workflows'] },
      { tagline: 'Kassensystem und Handel', desc: 'Eine moderne POS-Plattform für Handel, Gastronomie und Food & Beverage. Sie funktioniert offline, integriert sich in ERP-Systeme und unterstützt komplexe Preis- und Treueprogramme.', features: ['Offline-fähiger Betrieb', 'Unterstützung mehrerer Kassen', 'Treueprogramme und Aktionen', 'Integration von Küchendisplays', 'ERP-Synchronisierung', 'Analyse-Dashboard'] },
      { tagline: 'Personal und Belegschaft', desc: 'Eine Plattform für Personal- und Workforce-Management für Unternehmen mit komplexen Mitarbeiterstrukturen über mehrere Standorte und Verträge hinweg.', features: ['Verwaltung von Mitarbeiterdaten', 'Urlaub und Anwesenheit', 'Lohnabrechnungsintegration', 'Leistungsbeurteilungen', 'Onboarding-Workflows', 'Compliance-Tracking'] },
      { tagline: 'KI-Plattform für Unternehmen', desc: 'Eine Unternehmens-KI-Plattform mit wiederverwendbaren KI-Bausteinen — Dokumentenverarbeitung, Sprachschnittstellen und Automatisierungsgrundlagen — die Entwicklungsteams in internen Systemen einsetzen können.', features: ['API zur Dokumentenextraktion', 'LLM-Gateway und Caching', 'Workflow-Automatisierungs-Engine', 'Vektorsuche', 'Beobachtbarkeit und Protokollierung', 'Option für lokale Bereitstellung'] },
    ],
  },
  aboutPage: {
    hero: { label: 'Über ALA CORE', title: 'Wir sind ein Engineering-Unternehmen.', sub: 'Keine Agentur. Keine Beratung. Ein Engineering-Unternehmen, das vollständige Technologiesysteme für Unternehmen baut, die Technologie ernst nehmen.' },
    principles: { title: 'Engineering-Prinzipien', sub: 'Dies sind keine Wunschvorstellungen — es sind die technischen Vorgaben, die wir für jedes Projekt festlegen.', items: [{ title: 'Dokumentation ist nicht optional', desc: 'Jedes System wird als Teil der Engineering-Arbeit dokumentiert — Architekturentscheidungen, API-Verträge und Betriebsleitfäden sind Ergebnisse, keine Nachträge.' }, { title: 'Testabdeckung ist ein Mindeststandard', desc: 'Wir definieren Anforderungen an die Testabdeckung, bevor Produktionscode entsteht. Kritische Geschäftslogik benötigt verpflichtend 100 % Abdeckung.' }, { title: 'Monitoring und Beobachtbarkeit vom ersten Tag an', desc: 'Kein System geht ohne strukturierte Protokollierung, Fehlerverfolgung, Performance-Monitoring und Alarmierung in Produktion. Wir rechnen mit Fehlern und planen entsprechend.' }, { title: 'Einfachheit vor Cleverness', desc: 'Wir vermeiden Komplexität, die dem Nutzer nicht dient. Schwer wartbares oder verständliches Engineering ist ein Risiko, kein Vorteil.' }] },
    process: { title: 'Unser Prozess', steps: [{ num: '01', title: 'Analyse und Abgrenzung', desc: 'Wir beginnen mit einem tiefen Verständnis Ihres Unternehmens — Abläufe, Einschränkungen, Stakeholder und Ziele — bevor wir den technischen Umfang festlegen.' }, { num: '02', title: 'Architektur und Design', desc: 'Architekturpläne, Datenmodelle, Integrationskarten und UX-Wireframes werden validiert, bevor die Entwicklung beginnt.' }, { num: '03', title: 'Engineering und Entwicklung', desc: 'Iterative Entwicklung in kurzen Sprints mit kontinuierlicher Transparenz für Stakeholder. Keine Black Boxes.' }, { num: '04', title: 'Tests und Qualität', desc: 'Automatisierte Tests, Sicherheitsaudits, Performance-Benchmarks und strukturierte UAT vor jeder Veröffentlichung.' }, { num: '05', title: 'Bereitstellung und Support', desc: 'Strukturierter Go-live mit vollständigem Monitoring, Dokumentationsübergabe und fortlaufenden Support-Optionen.' }] },
    globalLabel: 'Globale Vision', getInTouch: 'Kontakt aufnehmen', stats: [{ label: 'Unterstützte Sprachen', value: '3' }, { label: 'Betreute Länder', value: '12+' }, { label: 'Abgedeckte Zeitzonen', value: 'Global' }, { label: 'Bereitstellungsregionen', value: '5+' }]},
  careersPage: { hero: { label: 'Karriere', title: 'Arbeiten Sie mit außergewöhnlichen Engineers.', sub: 'Wir suchen immer nach außergewöhnlichen Engineers, Architekten und Technologinnen und Technologen, die Dinge richtig bauen wollen.' }, cta: 'Senden Sie Ihren Lebenslauf', openPositions: 'Offene Stellen', noJobsSub: 'Wenn Sie einen starken Engineering-Hintergrund haben und Technologie richtig bauen wollen, möchten wir von Ihnen hören.' },
  contactPage: { hero: { label: 'Kontakt', title: 'Starten wir ein Gespräch.', sub: 'Erzählen Sie uns von Ihrem Projekt oder Ihrer Herausforderung. Wir antworten innerhalb eines Werktags.' }, form: { submit: 'Nachricht senden', selectPlaceholder: 'Auswählen…', namePlaceholder: 'Jane Smith', companyPlaceholder: 'Acme GmbH', countryPlaceholder: 'Deutschland', descriptionPlaceholder: 'Beschreiben Sie Ihr Projekt, Ihre Herausforderung oder Ihre Frage…', responseNote: 'Wir antworten in der Regel innerhalb eines Werktags.', aiCta: 'Oder beschreiben Sie Ihren Bedarf unserer KI →', industries: ['Technologie', 'Einzelhandel', 'Fertigung', 'Gesundheitswesen', 'Finanzen', 'Logistik', 'Gastgewerbe', 'Bildung', 'Immobilien', 'Andere'], sizes: ['1–10', '11–50', '51–200', '201–1000', '1000+'], timelines: ['Weniger als 1 Monat', '1–3 Monate', '3–6 Monate', '6–12 Monate', '12+ Monate'], budgets: ['Unter 20.000 €', '20.000 €–50.000 €', '50.000 €–150.000 €', '150.000 €–500.000 €', 'Über 500.000 €'], contactMethods: ['E-Mail', 'Telefon', 'Videoanruf', 'WhatsApp'] }, generalEnquiries: 'Allgemeine Anfragen', responseWithin: 'Antwort innerhalb eines Werktags.', website: 'Website', departments: { sub: 'Kontaktieren Sie eine Abteilung direkt.', items: ['Künstliche Intelligenz', 'Softwareentwicklung', 'Web & Digital', 'Unternehmenssysteme', 'Automatisierung', 'Cloud & Infrastruktur', 'Sicherheit', 'Daten & Analytik', 'Design', 'Marketing', 'Infrastruktur', 'Zahlungen', 'Kommunikation', 'IoT', 'Medien', 'Schulung', 'QS & Tests', 'Lokalisierung', 'Loyalität', 'Legal Tech', 'No-Code', 'Barrierefreiheit'] } },
};

const task2Tr: typeof task2En = {
  navA11y: { menuOpen: 'Menüyü aç', menuClose: 'Menüyü kapat', primaryNavigation: 'Ana gezinme', mobileNavigation: 'Mobil gezinme', toggleTheme: 'Temayı değiştir' },
  footerPage: { solutionLinks: ['Yapay zeka sistemleri', 'Kurumsal yazılım', 'İş otomasyonu', 'Sistem entegrasyonu', 'Bulut altyapısı', 'Veri ve analitik'], departments: ['Yapay zeka', 'Yazılım', 'Web', 'Kurumsal', 'Otomasyon', 'Bulut', 'Güvenlik', 'Veri', 'Tasarım', 'Altyapı', 'Ödemeler', 'IoT', 'Kariyer'], newsletterStatus: 'Bülten kayıtları henüz açık değil. Şirket güncellemeleri için bizimle doğrudan iletişime geçin.', legalUnavailable: 'Talep üzerine sunulur' },
  solutionsPage: {
    label: 'Çözümler', title: 'Ne yapıyoruz', sub: 'İş sorunlarını teknolojiyle çözüyoruz. Sektörünüze ve ölçeğinize göre uçtan uca çözümler geliştiriyoruz.', capabilities: 'Yetenekler', cta: 'Hangi çözümün ihtiyacınıza uygun olduğundan emin değil misiniz? Birlikte tanımlayalım.',
    details: [
      { title: 'Yapay zeka sistemleri', desc: 'Üretime hazır yapay zeka sistemleri tasarlıyor ve devreye alıyoruz — makine öğrenimi işlem hatları ve dil modeli entegrasyonlarından bilgisayarlı görü ve akıllı otomasyona kadar.', capabilities: ['Özel ML modeli geliştirme', 'LLM entegrasyonu ve ince ayar', 'Tahmine dayalı analiz işlem hatları', 'Yapay zeka destekli belge işleme', 'Doğal dil arayüzleri', 'Öneri sistemleri'], industries: ['Perakende', 'Lojistik', 'Finans', 'Sağlık'] },
      { title: 'Kurumsal yazılım', desc: 'Karmaşık kuruluşlar ve kritik operasyonlar için ERP, CRM ve özel platformlar dahil kurumsal yazılım sistemleri tasarlıyor, geliştiriyor ve uyguluyoruz.', capabilities: ['ERP uygulama ve özelleştirme', 'CRM geliştirme', 'Özel kurumsal platformlar', 'Çoklu kuruluş ve para birimi desteği', 'Rol tabanlı erişim denetimi', 'Denetim kayıtları ve uyumluluk'], industries: ['Üretim', 'Finans', 'Gayrimenkul', 'Sağlık'] },
      { title: 'İş otomasyonu', desc: 'İş akışı orkestrasyonu, belge işleme, onay yönlendirmesi ve süreç yönetimiyle akıllı otomasyon aracılığıyla manuel yükü ortadan kaldırıyoruz.', capabilities: ['İş akışı otomasyonu tasarımı', 'Robotik süreç otomasyonu', 'Belge çıkarma ve sınıflandırma', 'Onay ve bildirim sistemleri', 'Mevcut araçlarla entegrasyon', 'İzleme ve uyarı'] , industries: ['Lojistik', 'Finans', 'İnsan kaynakları', 'Operasyonlar'] },
      { title: 'Sistem entegrasyonu', desc: 'Farklı sistemleri tutarlı mimarilerde birleştiriyoruz — API’ler tasarlıyor, veri işlem hatları kuruyor ve eski entegrasyonları modernleştiriyoruz.', capabilities: ['REST ve GraphQL API tasarımı', 'Eski sistemlerin modernizasyonu', 'ETL ve veri işlem hatları', 'Olay odaklı mimariler', 'Üçüncü taraf platform bağlayıcıları', 'Gerçek zamanlı eşitleme'], industries: ['Eski sistemleri olan tüm sektörler'] },
      { title: 'Bulut altyapısı', desc: 'Kubernetes kümeleri ve CI/CD işlem hatlarından çoklu bulut stratejileri ile altyapının kod olarak yönetimine kadar buluta özgü altyapıyı tasarlıyor, devreye alıyor ve yönetiyoruz.', capabilities: ['Çoklu bulut mimarisi (AWS, Azure, GCP)', 'Kubernetes ve konteyner orkestrasyonu', 'CI/CD işlem hattı tasarımı', 'Kod olarak altyapı (Terraform)', 'Maliyet optimizasyonu', 'Felaket kurtarma planlaması'], industries: ['Teknoloji', 'Finans', 'Sağlık', 'SaaS'] },
      { title: 'Veri ve analitik', desc: 'İşletmelerin karar vermek için ihtiyaç duyduğu veri altyapısını kuruyoruz — veri ambarları ve BI panolarından gerçek zamanlı analitik ve öngörülü raporlamaya kadar.', capabilities: ['Veri ambarı tasarımı', 'BI panosu geliştirme', 'Gerçek zamanlı analitik', 'Veri yönetişimi çerçeveleri', 'Self servis raporlama araçları', 'Tahmine dayalı modelleme'], industries: ['Perakende', 'Finans', 'Üretim', 'Sağlık'] },
      { title: 'Siber güvenlik', desc: 'Mimari incelemeleri ve sızma testlerinden uyumluluk çerçeveleri ve güvenli geliştirme uygulamalarına kadar güvenliği teknoloji yığınının her katmanına yerleştiriyoruz.', capabilities: ['Güvenlik mimarisi incelemesi', 'Sızma testi', 'KVKK / ISO 27001 uyumluluğu', 'Zafiyet değerlendirmeleri', 'Güvenli SDLC uygulaması', 'Olay müdahalesi planlaması'], industries: ['Finans', 'Sağlık', 'Kamu', 'Düzenlemeye tabi tüm sektörler'] },
      { title: 'Dijital dönüşüm', desc: 'Uçtan uca dijital dönüşüm programlarına liderlik ediyoruz — eski operasyonları modernleştiriyor, yeni iş modellerini mümkün kılıyor ve uzun vadeli büyüme için teknoloji temelini kuruyoruz.', capabilities: ['Dönüşüm yol haritası tasarımı', 'Eski sistem modernizasyonu', 'Değişim yönetimi desteği', 'Dijital süreç yeniden tasarımı', 'Platform birleştirme', 'Eğitim ve yetkinleştirme'], industries: ['Üretim', 'Perakende', 'Sağlık', 'Kamu'] },
    ],
  },
  productsPage: {
    label: 'Ürünler', heroTitle: 'Ürün paketimiz.', heroSub: 'Müşteri çalışmalarımızın yanında kendi yazılım ürünlerimizi de geliştiriyoruz. Bunlar, hizmet verdiğimiz kurumların belirli operasyonel sorunları için tasarlanmış araçlardır.', developmentNotice: 'Tüm ürünler şu anda geliştirme aşamasındadır. İlginizi şu adresten bildirin:', comingSoon: 'Yakında', registerInterest: 'İlgi bildir', coreFeatures: 'Temel özellikler', platformSuite: 'Platform paketi — yakında', moreFeatures: 'daha', ctaTitle: 'Bunun yerine özel bir çözüme mi ihtiyacınız var?', ctaSub: 'Ürünlerimizden hiçbiri tam olarak uygun değilse kurumsal müşteriler için özel yazılım geliştiriyoruz.', cta: 'Özel çözümleri keşfedin',
    items: [
      { tagline: 'Akıllı envanter yönetimi', desc: 'SmartStock AI, perakende ve lojistik şirketleri için yapay zeka destekli bir envanter zekâsı platformudur. Stok tükenmelerini azaltır, fazla stoku önler ve tahmine dayalı talep modellemesiyle yeniden sipariş döngülerini optimize eder.', features: ['Talep tahmini', 'Otomatik yeniden sipariş uyarıları', 'Çoklu lokasyon desteği', 'POS ve ERP entegrasyonu', 'Gerçek zamanlı pano', 'Tedarikçi API bağlantısı'] },
      { tagline: 'Kurumsal kaynak planlama', desc: 'Birden çok ülke ve para biriminde faaliyet gösteren orta ölçekli ve büyük şirketler için tasarlanmış, tamamen yerelleştirilmiş ve çok kuruluşlu ERP platformu.', features: ['Çoklu kuruluş ve para birimi', 'Finans ve muhasebe', 'Tedarik ve envanter', 'Proje yönetimi', 'Raporlama ve BI', 'Rol tabanlı erişim denetimi'] },
      { tagline: 'Müşteri ilişkileri yönetimi', desc: 'Karmaşık kurumsal satış döngüleri için geliştirilmiş CRM. Gereksiz yük olmadan fırsat yönetimi, ilişki zekâsı ve otomasyon sunar.', features: ['Fırsat yönetimi', 'Kişi zekâsı', 'Etkinlik takibi', 'E-posta entegrasyonu', 'Satış tahmini', 'Özel iş akışları'] },
      { tagline: 'Satış noktası ve perakende', desc: 'Perakende, konaklama ve yiyecek-içecek için geliştirilmiş modern bir POS platformu. Çevrimdışı çalışır, ERP ile entegre olur ve karmaşık fiyatlandırma ile sadakat programlarını destekler.', features: ['Önce çevrimdışı çalışma', 'Çoklu terminal desteği', 'Sadakat ve promosyonlar', 'Mutfak ekranı entegrasyonu', 'ERP eşitleme', 'Analitik panosu'] },
      { tagline: 'İnsan kaynakları ve iş gücü', desc: 'Karmaşık, çok lokasyonlu ve çok sözleşmeli çalışan yapılarını yöneten şirketler için insan kaynakları ve iş gücü yönetimi platformu.', features: ['Çalışan kayıt yönetimi', 'İzin ve devam takibi', 'Bordro entegrasyonu', 'Performans değerlendirmeleri', 'İşe alıştırma iş akışları', 'Uyumluluk takibi'] },
      { tagline: 'Kurumsal yapay zeka platformu', desc: 'Geliştirme ekiplerinin iç sistemlerde kullanabileceği belge işleme, dil arayüzleri ve otomasyon temel bileşenleri gibi yeniden kullanılabilir yapı taşları sunan kurumsal yapay zeka platformu.', features: ['Belge çıkarma API’si', 'LLM ağ geçidi ve önbellekleme', 'İş akışı otomasyon motoru', 'Vektör arama', 'Gözlemlenebilirlik ve günlükleme', 'Şirket içi kurulum seçeneği'] },
    ],
  },
  aboutPage: {
    hero: { label: 'ALA CORE hakkında', title: 'Biz bir mühendislik şirketiyiz.', sub: 'Ajans değiliz. Danışmanlık firması değiliz. Teknolojiyi ciddiye alan işletmeler için eksiksiz teknoloji sistemleri geliştiren bir mühendislik şirketiyiz.' },
    principles: { title: 'Mühendislik ilkeleri', sub: 'Bunlar ulaşmak istediğimiz değerler değil; üzerinde çalıştığımız her projeye uyguladığımız gerçek teknik kısıtlamalardır.', items: [{ title: 'Dokümantasyon isteğe bağlı değildir', desc: 'Geliştirdiğimiz her sistem, mühendislik çalışmasının bir parçası olarak dokümante edilir — mimari kararlar, API sözleşmeleri ve operasyon kılavuzları sonradan düşünülenler değil, teslim edilecek çıktılardır.' }, { title: 'Test kapsamı hedef değil, asgari gerekliliktir', desc: 'Üretim kodunu yazmadan önce test kapsamı gereksinimlerini tanımlarız. Kritik iş mantığı gereği yüzde 100 kapsama sahiptir.' }, { title: 'İlk günden izleme ve gözlemlenebilirlik', desc: 'Yapılandırılmış günlükleme, hata takibi, performans izleme ve uyarı olmadan hiçbir sistem üretime çıkmaz. Hataların olacağını kabul eder ve buna göre planlarız.' }, { title: 'Kurnazlıktan önce sadelik', desc: 'Kullanıcıya hizmet etmeyen karmaşıklığa direniyoruz. Bakımı veya anlaşılması zor olan akıllı mühendislik bir değer değil, yükümlülüktür.' }] },
    process: { title: 'Sürecimiz', steps: [{ num: '01', title: 'Keşif ve kapsam belirleme', desc: 'Teknik kapsamı tanımlamadan önce işletmenizi — operasyonları, kısıtları, paydaşları ve hedefleri — derinlemesine anlamakla başlarız.' }, { num: '02', title: 'Mimari ve tasarım', desc: 'Herhangi bir geliştirme başlamadan önce mimari taslaklar, veri modelleri, entegrasyon haritaları ve UX tel kafesleri doğrulanır.' }, { num: '03', title: 'Mühendislik ve geliştirme', desc: 'Paydaşların sürekli görünürlüğüyle kısa sprintlerde yinelemeli geliştirme. Kara kutu yok.' }, { num: '04', title: 'Test ve kalite', desc: 'Her sürümden önce otomatik testler, güvenlik denetimleri, performans kıyaslaması ve yapılandırılmış kullanıcı kabul testleri.' }, { num: '05', title: 'Yayına alma ve destek', desc: 'Tam izleme, dokümantasyon teslimi ve sürekli destek seçenekleriyle yapılandırılmış canlıya geçiş.' }] },
    globalLabel: 'Küresel vizyon', getInTouch: 'İletişime geçin', stats: [{ label: 'Desteklenen diller', value: '3' }, { label: 'Hizmet verilen ülkeler', value: '12+' }, { label: 'Kapsanan saat dilimleri', value: 'Küresel' }, { label: 'Dağıtım bölgeleri', value: '5+' }]},
  careersPage: { hero: { label: 'Kariyer', title: 'Olağanüstü mühendislerle çalışın.', sub: 'İşleri doğru biçimde geliştirmeye inanan olağanüstü mühendisler, mimarlar ve teknoloji uzmanları arıyoruz.' }, cta: 'Özgeçmişinizi gönderin', openPositions: 'Açık pozisyonlar', noJobsSub: 'Güçlü bir mühendislik geçmişiniz varsa ve teknolojiyi doğru şekilde geliştirmeye inanıyorsanız sizden haber almak isteriz.' },
  contactPage: { hero: { label: 'İletişim', title: 'Bir konuşma başlatın.', sub: 'Projenizden veya ihtiyacınızdan bahsedin. Bir iş günü içinde yanıt vereceğiz.' }, form: { submit: 'Mesaj gönder', selectPlaceholder: 'Seçin…', namePlaceholder: 'Jane Smith', companyPlaceholder: 'Acme GmbH', countryPlaceholder: 'Türkiye', descriptionPlaceholder: 'Projenizi, ihtiyacınızı veya sorunuzu anlatın…', responseNote: 'Genellikle bir iş günü içinde yanıt veririz.', aiCta: 'Ya da ihtiyacınızı yapay zekamıza anlatın →', industries: ['Teknoloji', 'Perakende', 'Üretim', 'Sağlık', 'Finans', 'Lojistik', 'Konaklama', 'Eğitim', 'Gayrimenkul', 'Diğer'], sizes: ['1–10', '11–50', '51–200', '201–1000', '1000+'], timelines: ['1 aydan az', '1–3 ay', '3–6 ay', '6–12 ay', '12+ ay'], budgets: ['20 bin € altı', '20 bin €–50 bin €', '50 bin €–150 bin €', '150 bin €–500 bin €', '500 bin € üzeri'], contactMethods: ['E-posta', 'Telefon', 'Görüntülü görüşme', 'WhatsApp'] }, generalEnquiries: 'Genel sorular', responseWithin: '1 iş günü içinde yanıt.', website: 'Web sitesi', departments: { sub: 'Belirli bir departmanla doğrudan iletişime geçin.', items: ['Yapay zeka', 'Yazılım geliştirme', 'Web ve dijital', 'Kurumsal sistemler', 'Otomasyon', 'Bulut ve altyapı', 'Güvenlik', 'Veri ve analitik', 'Tasarım', 'Pazarlama', 'Altyapı', 'Ödemeler', 'İletişim', 'IoT', 'Medya', 'Eğitim', 'Kalite güvence ve test', 'Yerelleştirme', 'Sadakat', 'Hukuk teknolojileri', 'Kodsuz', 'Erişilebilirlik'] } },
};

const en = {
  ...task2En,
  nav: {
    home: 'Home',
    solutions: 'Solutions',
    products: 'Products',
    about: 'About',
    careers: 'Careers',
    contact: 'Contact',
    cta: 'Start a project',
  },
  hero: {
    label: 'Technology Partner',
    headline1: 'We build technology that',
    headline2: 'grows your business.',
    sub: 'From smart AI and automated workflows to custom business software — we engineer reliable tech solutions that save time, cut costs, and scale your operations.',
    cta1: 'Start a project',
    cta2: 'Explore solutions',
  },
  ecosystem: {
    title: 'Technology ecosystem',
    sub: 'Built using trusted technologies from industry leaders.',
  },
  home: {
    stats: [
      { value: 50, suffix: '+', label: 'Systems delivered' },
      { value: 12, suffix: '', label: 'Countries served' },
      { value: 99, suffix: '.8%', label: 'On-time delivery' },
    ],
    outcomesTitle: 'Reliable technology built for non-technical leaders.',
    capabilitiesCta: 'Explore all our capabilities',
    industriesIntro: 'We pair reliable engineering with an understanding of the operating context your team works in every day.',
    partnershipTitle: 'Built for the whole system',
    partnershipItems: ['End-to-end ownership', 'Engineering-first approach'],
    finalAiCta: 'Describe your need',
    products: [
      { name: 'SmartStock AI', desc: 'AI-powered inventory intelligence for retail and logistics.', status: 'Coming soon' },
      { name: 'ALA ERP', desc: 'Enterprise resource planning built for multi-entity operations.', status: 'Coming soon' },
      { name: 'ALA CRM', desc: 'Customer relationship management for complex sales cycles.', status: 'Coming soon' },
      { name: 'ALA POS', desc: 'Point of sale and retail management platform.', status: 'Coming soon' },
      { name: 'ALA HR', desc: 'Human resources and workforce management.', status: 'Coming soon' },
      { name: 'ALA AI', desc: 'AI platform and tooling for enterprise deployments.', status: 'Coming soon' },
    ],
  },
  solutions: {
    title: 'What we do',
    sub: 'We solve business problems using technology. We build complete end-to-end solutions tailored to your industry and scale.',
    items: [
      { title: 'AI Systems', desc: 'Custom AI solutions, machine learning pipelines, intelligent automation, and natural language interfaces built for production environments.' },
      { title: 'Enterprise software', desc: 'ERP, CRM, and custom enterprise platforms engineered for complex organizations, high data volumes, and mission-critical reliability.' },
      { title: 'Business automation', desc: 'End-to-end workflow automation, process digitization, and intelligent document handling that eliminates manual overhead.' },
      { title: 'System integration', desc: 'API design, legacy system modernization, and data pipeline orchestration across complex multi-vendor environments.' },
      { title: 'Cloud infrastructure', desc: 'Multi-cloud architecture, containerization, Kubernetes orchestration, CI/CD pipelines, and infrastructure as code.' },
      { title: 'Data & analytics', desc: 'Business intelligence platforms, data warehousing, real-time dashboards, and predictive analytics at enterprise scale.' },
      { title: 'Cybersecurity', desc: 'Security architecture reviews, penetration testing, compliance frameworks, and secure development practices across your technology stack.' },
      { title: 'Digital transformation', desc: 'Strategic technology transformation programs that modernize legacy operations and enable new digital business models.' },
    ],
  },
  homeSolutions: {
    title: 'How we help you succeed',
    sub: 'We replace manual work, disconnected spreadsheets, and slow routines with smart, reliable technology.',
    items: [
      { title: 'Automate Daily Operations', desc: 'Eliminate manual data entry, paper invoices, and slow routines so your team can focus on what matters.' },
      { title: 'Custom AI Assistants', desc: 'Deploy smart tools that analyze data, draft replies, and help your employees work 10x faster.' },
      { title: 'Unified Business Systems', desc: 'Replace scattered spreadsheets and legacy apps with a single, secure, and easy-to-use platform.' },
      { title: 'Secure Cloud & Infrastructure', desc: 'Protect your valuable company data and ensure your systems remain fast and online 24/7.' }
    ]
  },
  exampleSolutions: {
    title: 'Example solutions',
    sub: 'Representative engagements across industries.',
    items: [
      {
        label: 'AI Systems',
        title: 'Intelligent inventory management',
        desc: 'A mid-market retailer needed to reduce overstock and stockouts across 200+ locations. We designed a predictive AI pipeline integrating POS data, supplier APIs, and demand signals.',
        result: '31% reduction in carrying costs',
        tech: ['Python', 'OpenAI', 'AWS', 'PostgreSQL'],
      },
      {
        label: 'Enterprise software',
        title: 'Multi-entity ERP implementation',
        desc: 'A regional manufacturing group operating across four countries required a unified ERP replacing five siloed legacy systems. We delivered a fully localized, multi-currency deployment.',
        result: '4-country rollout in 7 months',
        tech: ['Odoo', 'Python', 'PostgreSQL', 'Docker'],
      },
      {
        label: 'Automation',
        title: 'Document processing automation',
        desc: 'A logistics company processing 12,000 customs documents monthly reduced manual handling by implementing our AI-assisted document extraction and routing pipeline.',
        result: '89% reduction in manual processing',
        tech: ['Azure AI', 'Python', 'Supabase', 'React'],
      },
    ],
  },
  products: {
    title: 'Our products',
    sub: 'We build our own software products alongside client work.',
    viewAll: 'View all products',
  },
  industries: {
    title: 'Industries we serve',
    sub: 'Deep expertise across sectors.',
    items: ['Retail & e-commerce', 'Manufacturing', 'Healthcare', 'Finance & banking', 'Logistics & supply chain', 'Hospitality & F&B', 'Education & training', 'Real estate & property'],
  },
  why: {
    title: 'Why ALA CORE',
    sub: 'We are not a software house. We are a technology partner.',
    items: [
      { num: '01', title: 'End-to-end ownership', desc: 'We take full responsibility for the outcome — from discovery through architecture, engineering, testing, and post-launch support.' },
      { num: '02', title: 'Engineering-first approach', desc: 'Every engagement starts with architecture and systems thinking. We design for scale, reliability, and long-term maintainability before writing a single line of code.' },
      { num: '03', title: 'International delivery', desc: 'Headquartered internationally, with delivery capability across Europe, the Middle East, and beyond. We speak your language — literally and technically.' },
      { num: '04', title: 'Long-term partnership', desc: 'We structure engagements for the long term. Our clients typically work with us for years, not months, because we become embedded in their technology strategy.' },
    ],
  },
  philosophy: {
    title: 'Engineering philosophy',
    items: [
      { title: 'Systems thinking', desc: 'Every component is designed within the context of the whole system. We reason about interactions, failure modes, and scale before implementation.' },
      { title: 'Scalable architecture', desc: 'We engineer for growth. Architectures that handle 100 users must be ready to handle 100,000 without fundamental redesign.' },
      { title: 'Security by design', desc: 'Security is not a phase — it is a continuous practice embedded at every layer of the stack, from database schema to API contracts.' },
      { title: 'Performance by default', desc: 'Speed is a feature. We benchmark continuously and make performance optimization a first-class engineering concern.' },
    ],
  },
  process: {
    title: 'Our process',
    sub: 'A structured, transparent engagement from day one.',
    steps: [
      { num: '01', title: 'Discovery & scoping', desc: 'We start by understanding your business deeply — operations, constraints, stakeholders, and goals — before defining technical scope.' },
      { num: '02', title: 'Architecture & design', desc: 'Architectural blueprints, data models, integration maps, and UX wireframes are validated before any development begins.' },
      { num: '03', title: 'Engineering & development', desc: 'Iterative development in tight sprints with continuous stakeholder visibility. No black boxes.' },
      { num: '04', title: 'Testing & quality', desc: 'Automated testing, security audits, performance benchmarking, and structured UAT before any release.' },
      { num: '05', title: 'Deployment & support', desc: 'Structured go-live with full monitoring, documentation handover, and ongoing support options.' },
    ],
  },
  homeProcess: {
    title: 'Our simple process',
    sub: 'A transparent, jargon-free partnership from start to finish.',
    steps: [
      { num: '01', title: 'Discover & Plan', desc: 'We listen to your business goals and outline a clear, simple roadmap with fixed pricing.' },
      { num: '02', title: 'Build with Transparency', desc: 'You see real, working progress every week with clear, jargon-free updates.' },
      { num: '03', title: 'Launch & Support', desc: 'We handle deployment, train your team, and provide ongoing support as you scale.' }
    ]
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      { q: 'How does ALA CORE differ from other software agencies?', a: 'Traditional agencies just execute checklists. We are a business technology partner. We understand your operations, advise on the best path, and co-own the outcome to guarantee real business results.' },
      { q: 'We are not tech-savvy. How do you handle communication?', a: 'We speak plain English. You will get zero technical jargon—only clear weekly progress, simple demos, and direct, honest business advice.' },
      { q: 'Do you offer ongoing support after launching?', a: 'Yes. We offer continuous monitoring, updates, and maintenance packages so you never have to worry about your systems going down or becoming outdated.' },
      { q: 'Can you integrate with our existing spreadsheets and systems?', a: 'Absolutely. We specialize in connecting old legacy databases, scattered Excel sheets, and third-party tools into one unified dashboard.' }
    ],
  },
  cta: {
    title: 'Ready to build something serious?',
    sub: "Tell us about your challenge. We'll respond within one business day.",
    btn: 'Start a project',
    btn2: 'Explore solutions',
  },
  footer: {
    tagline: 'Technology partner for ambitious companies.',
    solutions: 'Solutions',
    products: 'Products',
    company: 'Company',
    legal: 'Legal',
    newsletter: 'Newsletter',
    newsletterSub: 'Occasional updates on technology and engineering.',
    emailPlaceholder: 'Your email address',
    subscribe: 'Subscribe',
    copyright: '© 2025 ALA CORE. All rights reserved.',
    privacyPolicy: 'Privacy policy',
    terms: 'Terms of service',
    imprint: 'Imprint',
    departments: 'Departments',
    withLove: 'Made with ❤️ by ALA CORE'
  },
  ai: {
    title: 'ALA AI Assistant',
    greeting: "Hello! I'm the ALA CORE AI Assistant. How can I help you today?",
    placeholder: 'Ask me anything...',
    actions: ['Explore solutions', 'Recommend a solution', 'Start a project', 'Contact team', 'Book a meeting'],
    thinking: 'Thinking...',
  },
  about: {
    hero: { label: 'About ALA CORE', title: 'We are an engineering company.', sub: 'Not an agency. Not a consultancy. An engineering company that builds complete technology systems for businesses that take technology seriously.' },
    mission: { title: 'Mission', desc: 'To deliver complete technology ecosystems that create lasting business value — engineered with precision, built to scale, and supported over the long term.' },
    vision: { title: 'Vision', desc: 'To be the most trusted technology partner for international companies navigating digital transformation — known for engineering excellence, transparency, and outcomes.' },
    values: {
      title: 'Values',
      items: [
        { title: 'Engineering integrity', desc: 'We build things the right way. Shortcuts have long-term costs that our clients — and we — will pay.' },
        { title: 'Radical transparency', desc: 'We communicate risks, timelines, and constraints honestly, even when it is uncomfortable.' },
        { title: 'Long-term thinking', desc: 'We design for the five-year horizon, not the sprint demo.' },
        { title: 'Client success', desc: 'Our success is measured by the business outcomes our clients achieve, not the code we ship.' },
      ],
    },
    global: { title: 'Global vision', desc: 'ALA CORE operates internationally with delivery capability across Europe, the Middle East, and beyond. We build technology without borders — serving clients in multiple languages, currencies, and regulatory environments.' },
  },
  careers: {
    hero: { label: 'Careers', title: 'Work with exceptional engineers.', sub: "We're always looking for exceptional engineers, architects, and technologists who believe in building things properly." },
    culture: {
      title: 'Engineering culture',
      items: [
        { title: 'Quality over velocity', desc: 'We never ship code we are not proud of. Speed is a result of good architecture, not cutting corners.' },
        { title: 'Ownership mindset', desc: 'Engineers at ALA CORE own their work end-to-end — from design decisions to production monitoring.' },
        { title: 'Continuous learning', desc: 'Technology evolves rapidly. We invest heavily in our team\'s growth through learning time, conferences, and knowledge sharing.' },
        { title: 'Asynchronous by default', desc: 'Deep work requires focus. We default to async communication and protect engineering time.' },
      ],
    },
    benefits: {
      title: 'Benefits',
      items: ['Competitive compensation', 'Flexible remote work', 'Learning & conference budget', 'Top-of-line equipment', 'International exposure', 'Meaningful problems to solve'],
    },
    process: {
      title: 'Hiring process',
      steps: ['Initial conversation — 30 min', 'Technical assessment — take-home', 'Technical interview — 60 min', 'Culture & values conversation', 'Offer'],
    },
    noJobs: "We're always looking for exceptional engineers.",
    cta: 'Send your CV',
    ctaEmail: 'careers@alacore.net',
  },
  contact: {
    hero: { label: 'Contact', title: 'Start a conversation.', sub: 'Tell us about your project or challenge. We will respond within one business day.' },
    form: {
      name: 'Full name', company: 'Company', industry: 'Industry', country: 'Country',
      size: 'Company size', timeline: 'Project timeline', budget: 'Estimated budget',
      preferred: 'Preferred contact method', description: 'Project description',
      submit: 'Send message', success: 'Message sent. We will be in touch shortly.',
    },
    departments: { title: 'Contact by department' },
  },
};

type Translations = typeof en;

const de: Translations = {
  ...en,
  ...task2De,
  nav: { ...en.nav, cta: 'Projekt starten' },
  hero: {
    ...en.hero,
    label: 'Technologie-Partner',
    headline1: 'Wir bauen Technologie,',
    headline2: 'die Ihr Geschäft voranbringt.',
    sub: 'Von intelligenter KI und automatisierten Arbeitsabläufen bis hin zu maßgeschneiderter Software — wir entwickeln zuverlässige Technologielösungen, die Zeit sparen, Kosten senken und Ihre Abläufe skalieren.',
    cta1: 'Projekt starten',
    cta2: 'Lösungen erkunden'
  },
  homeSolutions: {
    title: 'Wie wir Ihnen zum Erfolg verhelfen',
    sub: 'Wir ersetzen manuelle Arbeit, unübersichtliche Tabellen und langsame Routinen durch intelligente, zuverlässige Technologie.',
    items: [
      { title: 'Tägliche Abläufe automatisieren', desc: 'Verabschieden Sie sich von manueller Dateneingabe, Papierbelegen und langsamen Routinen, damit Ihr Team sich auf das Wesentliche konzentrieren kann.' },
      { title: 'Individuelle KI-Assistenten', desc: 'Nutzen Sie intelligente Tools, die Daten analysieren, Antworten entwerfen und Ihren Mitarbeitern helfen, 10-mal schneller zu arbeiten.' },
      { title: 'Einheitliche Business-Systeme', desc: 'Ersetzen Sie verstreute Tabellen und veraltete Apps durch eine einzige, sichere und benutzerfreundliche Plattform.' },
      { title: 'Sichere Cloud & Infrastruktur', desc: 'Schützen Sie Ihre wertvollen Unternehmensdaten und stellen Sie sicher, dass Ihre Systeme rund um die Uhr schnell und online bleiben.' }
    ]
  },
  home: {
    stats: [
      { value: 50, suffix: '+', label: 'Ausgelieferte Systeme' },
      { value: 12, suffix: '', label: 'Bediente Länder' },
      { value: 99, suffix: '.8%', label: 'Pünktliche Lieferung' },
    ],
    outcomesTitle: 'Zuverlässige Technologie für Führungskräfte ohne IT-Hintergrund.',
    capabilitiesCta: 'Alle Kompetenzen entdecken',
    industriesIntro: 'Wir verbinden zuverlässige Engineering-Arbeit mit einem Verständnis für den operativen Kontext, in dem Ihr Team täglich arbeitet.',
    partnershipTitle: 'Für das ganze System gebaut',
    partnershipItems: ['Verantwortung von Anfang bis Ende', 'Engineering zuerst'],
    finalAiCta: 'Bedarf beschreiben',
    products: [
      { name: 'SmartStock AI', desc: 'KI-gestützte Bestandsintelligenz für Handel und Logistik.', status: 'Demnächst verfügbar' },
      { name: 'ALA ERP', desc: 'Enterprise-Resource-Planning für komplexe Unternehmensstrukturen.', status: 'Demnächst verfügbar' },
      { name: 'ALA CRM', desc: 'Kundenbeziehungsmanagement für komplexe Vertriebszyklen.', status: 'Demnächst verfügbar' },
      { name: 'ALA POS', desc: 'Kassen- und Handelsplattform für den Einzelhandel.', status: 'Demnächst verfügbar' },
      { name: 'ALA HR', desc: 'Personal- und Workforce-Management für Unternehmen.', status: 'Demnächst verfügbar' },
      { name: 'ALA AI', desc: 'KI-Plattform und Tools für Enterprise-Deployments.', status: 'Demnächst verfügbar' },
    ],
  },
  homeProcess: {
    title: 'Unser einfacher Ablauf',
    sub: 'Eine transparente, jargonfreie Partnerschaft von Anfang bis Ende.',
    steps: [
      { num: '01', title: 'Entdecken & Planen', desc: 'Wir hören uns Ihre Geschäftsziele an und erstellen einen klaren, einfachen Fahrplan mit festen Preisen.' },
      { num: '02', title: 'Transparente Entwicklung', desc: 'Sie sehen jede Woche echte Fortschritte mit klaren Updates — ganz ohne Fachchinesisch.' },
      { num: '03', title: 'Start & Support', desc: 'Wir kümmern uns um die Bereitstellung, schulen Ihr Team und bieten kontinuierlichen Support bei Ihrer Skalierung.' }
    ]
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    items: [
      { q: 'Wie unterscheidet sich ALA CORE von anderen Software-Agenturen?', a: 'Herkömmliche Agenturen arbeiten oft nur Checklisten ab. Wir sind ein Technologiepartner für Ihr Unternehmen. Wir verstehen Ihre operativen Abläufe, beraten Sie bezüglich des besten Pfads und tragen die Mitverantwortung für das Ergebnis, um messbare geschäftliche Erfolge zu garantieren.' },
      { q: 'Wir sind technisch nicht versiert. Wie läuft die Kommunikation ab?', a: 'Wir sprechen verständliches Deutsch. Sie erhalten keinerlei unverständlichen Fachjargon von uns — sondern wöchentliche Fortschrittsberichte, einfache Präsentationen und direkte, ehrliche geschäftliche Beratung.' },
      { q: 'Bieten Sie nach dem Go-Live fortlaufenden Support an?', a: 'Ja. Wir bieten kontinuierliche Überwachung, Updates und Wartungspakete an, sodass Sie sich nie Sorgen über Systemausfälle oder veraltete Software machen müssen.' },
      { q: 'Können Sie unsere bestehenden Tabellen und Systeme integrieren?', a: 'Absolut. Wir sind darauf spezialisiert, alte Altsysteme, verstreute Excel-Dateien und Drittanbieter-Tools in einem einzigen, übersichtlichen Dashboard zusammenzuführen.' }
    ]
  },
  ai: { ...en.ai, greeting: 'Hallo! Ich bin der ALA CORE KI-Assistent. Wie kann ich Ihnen helfen?' },
};

const tr: Translations = {
  ...en,
  ...task2Tr,
  nav: { ...en.nav, cta: 'Proje Başlat' },
  hero: {
    ...en.hero,
    label: 'Teknoloji Ortağı',
    headline1: 'İşinizi büyüten',
    headline2: 'teknolojiler inşa ediyoruz.',
    sub: 'Akıllı yapay zekadan otomatik iş akışlarına ve özel iş yazılımlarına kadar — zamandan tasarruf sağlayan, maliyetleri düşüren ve operasyonlarınızı ölçeklendiren güvenilir çözümler üretiyoruz.',
    cta1: 'Proje Başlat',
    cta2: 'Çözümleri Keşfet'
  },
  homeSolutions: {
    title: 'Başarınıza Nasıl Katkı Sağlıyoruz?',
    sub: 'Manuel işleri, dağınık tabloları ve yavaş rutinleri akıllı, güvenilir teknolojilerle değiştiriyoruz.',
    items: [
      { title: 'Günlük Operasyonları Otomatikleştirin', desc: 'Manuel veri girişini, kağıt faturaları ve yavaş süreçleri ortadan kaldırın; ekibiniz gerçekten önemli işlere odaklansın.' },
      { title: 'Özel Yapay Zeka Asistanları', desc: 'Verileri analiz eden, yanıt taslakları hazırlayan ve ekibinizin 10 kat daha hızlı çalışmasını sağlayan akıllı araçları devreye alın.' },
      { title: 'Birleşik İş Sistemleri', desc: 'Dağınık tabloları ve eski uygulamaları tek bir güvenli, kararlı ve kullanımı kolay platformla değiştirin.' },
      { title: 'Güvenli Bulut ve Altyapı', desc: 'Değerli şirket verilerinizi koruyun ve sistemlerinizin 7/24 hızlı ve kesintisiz çalışmasını sağlayın.' }
    ]
  },
  home: {
    stats: [
      { value: 50, suffix: '+', label: 'Teslim edilen sistemler' },
      { value: 12, suffix: '', label: 'Hizmet verilen ülkeler' },
      { value: 99, suffix: '.8%', label: 'Zamanında teslimat' },
    ],
    outcomesTitle: 'Teknik altyapısı olmayan yöneticiler için güvenilir teknoloji.',
    capabilitiesCta: 'Tüm yetkinliklerimizi keşfedin',
    industriesIntro: 'Güvenilir mühendisliği, ekibinizin her gün çalıştığı operasyonel bağlama dair anlayışla birleştiriyoruz.',
    partnershipTitle: 'Tüm sistem için tasarlandı',
    partnershipItems: ['Uçtan uca sahiplik', 'Önce mühendislik yaklaşımı'],
    finalAiCta: 'İhtiyacınızı anlatın',
    products: [
      { name: 'SmartStock AI', desc: 'Perakende ve lojistik için yapay zeka destekli stok zekası.', status: 'Yakında' },
      { name: 'ALA ERP', desc: 'Çoklu kurum operasyonları için kurumsal kaynak planlama.', status: 'Yakında' },
      { name: 'ALA CRM', desc: 'Karmaşık satış döngüleri için müşteri ilişkileri yönetimi.', status: 'Yakında' },
      { name: 'ALA POS', desc: 'Perakende için satış noktası ve mağaza yönetim platformu.', status: 'Yakında' },
      { name: 'ALA HR', desc: 'Şirketler için insan kaynakları ve iş gücü yönetimi.', status: 'Yakında' },
      { name: 'ALA AI', desc: 'Kurumsal uygulamalar için yapay zeka platformu ve araçları.', status: 'Yakında' },
    ],
  },
  homeProcess: {
    title: 'Kolay İş Birliği Sürecimiz',
    sub: 'Baştan sona şeffaf ve teknik terimlerden uzak bir ortaklık.',
    steps: [
      { num: '01', title: 'Keşif ve Planlama', desc: 'İş hedeflerinizi dinliyor, net ve basit bir yol haritasını sabit fiyatlandırma ile sunuyoruz.' },
      { num: '02', title: 'Şeffaf Geliştirme', desc: 'Teknik terimlerden uzak, anlaşılır güncellemelerle her hafta çalışan gerçek ilerlemeyi görürsünüz.' },
      { num: '03', title: 'Yayın ve Destek', desc: 'Sistemlerinizi canlıya alıyor, ekibinizi eğitiyor ve işinizi büyütürken sürekli destek sağlıyoruz.' }
    ]
  },
  faq: {
    title: 'Sıkça Sorulan Sorular',
    items: [
      { q: 'ALA CORE\'un diğer yazılım ajanslarından farkı nedir?', a: 'Geleneksel ajanslar sadece bir kontrol listesini uygular. Biz ise bir iş teknolojisi ortağıyız. Operasyonlarınızı anlar, en iyi yolu önerir ve gerçek iş sonuçlarını garanti etmek için sonuca ortak oluruz.' },
      { q: 'Teknik bilgiye sahip değiliz. İletişimi nasıl yürütüyorsunuz?', a: 'Sizin dilinizden konuşuyoruz. Teknik terimler yerine her hafta anlaşılır ilerleme raporları, basit demolardan oluşan sunumlar ve doğrudan iş geliştirme önerileri alırsınız.' },
      { q: 'Yayın sonrasında sürekli destek sunuyor musunuz?', a: 'Evet. Sistemlerinizin asla kesintiye uğramaması veya güncelliğini yitirmemesi için sürekli izleme, güncellemeler ve bakım paketleri sunuyoruz.' },
      { q: 'Mevcut tablolarımızı ve sistemlerimizi entegre edebilir misiniz?', a: 'Kesinlikle. Eski veritabanlarını, dağınık Excel sayfalarını ve üçüncü taraf araçları tek bir birleşik gösterge panelinde birleştirme konusunda uzmanız.' }
    ]
  },
  ai: { ...en.ai, greeting: 'Merhaba! Ben ALA CORE Yapay Zeka Asistanıyım. Bugün size nasıl yardımcı olabilirim?' },
};

const translations: Record<Lang, Translations> = { en, de, tr };

export function useTranslations(lang: Lang) {
  return translations[lang];
}
