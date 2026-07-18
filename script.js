const translations = {
  en: {
    navHome: "Home",
    navServices: "Services",
    navSolutions: "Solution examples",
    navWhy: "Why us",
    navProcess: "Process",
    navContact: "Contact",
    navAbout: "About",
    servicesMore: "Explore all services",
    navCta: "Start a project",
    heroEyebrow: "Your partner for growth & digital transformation",
    heroTitle1: "We build the",
    heroTitleAccent: "core of your digital business.",
    heroLead: "We turn complex challenges into intelligent, connected, and scalable solutions—from AI and software development to enterprise systems, cloud, and cybersecurity.",
    heroCtaPrimary: "Discuss your project",
    heroCtaSecondary: "Ask our AI assistant",
    trustServices: "service areas",
    trustB2b: "business solutions",
    trustCoverage: "end-to-end delivery",
    capabilityIntro: "Technology aligned with your business",
    servicesKicker: "Our capabilities",
    servicesTitle: "One ecosystem.<br />Everything your business needs.",
    servicesLead: "Specialist teams working as one to deliver a complete solution—without the vendor maze.",
    serviceAiTitle: "Artificial Intelligence & Data",
    serviceAiDesc: "Solutions that turn your data and operations into faster decisions and smarter experiences.",
    serviceSoftwareTitle: "Digital Products & Experiences",
    serviceSoftwareDesc: "We design and build fast, secure digital products engineered to scale with you.",
    serviceEnterpriseTitle: "Enterprise Systems & Integration",
    serviceEnterpriseDesc: "We connect operations and systems, removing manual work to improve efficiency and visibility.",
    serviceCloudTitle: "Cloud, Security & Managed Services",
    serviceCloudDesc: "Resilient, protected infrastructure with continuous monitoring and support.",
    serviceConnectedTitle: "Connected & Smart Systems",
    serviceConnectedDesc: "We connect devices, locations, communications, and payments in one ecosystem.",
    serviceGrowthTitle: "Growth, Quality & Enablement",
    serviceGrowthDesc: "We support your go-to-market, product quality, content, and technology adoption.",
    serviceAsk: "Ask about this service",
    solutionsKicker: "Solution examples",
    solutionsTitle: "How does a challenge<br />become a working solution?",
    solutionsLead: "Illustrative examples to help you picture what can be built and tailored to your business. The actual scope is defined after we understand your operations and goals.",
    solutionsNote: "Illustrative examples—not client case studies",
    challengeLabel: "Challenge",
    solutionLabel: "Solution",
    resultLabel: "Expected outcome",
    solution1Title: "Intelligent customer service assistant",
    solution1Summary: "A bilingual assistant that answers from company knowledge and connects with WhatsApp and CRM.",
    solution1Challenge: "Repeated questions, slow responses, and knowledge scattered across files and people.",
    solution1Solution: "RAG Chatbot + AI Agent + WhatsApp API + CRM Automation.",
    solution1Result: "Always-on service, consistent answers, and faster routing to the right team.",
    solution2Title: "Unified business operations",
    solution2Summary: "Connect sales, inventory, accounting, and approvals in one central system.",
    solution2Challenge: "Disconnected spreadsheets, duplicate entry, and no real-time operational view.",
    solution2Solution: "Odoo or custom ERP + n8n Workflows + management dashboard.",
    solution2Result: "Less manual work, consistent data, and faster decisions across departments.",
    solution3Title: "Multi-vendor commerce platform",
    solution3Summary: "A marketplace that manages vendors, orders, payments, and commissions in one place.",
    solution3Challenge: "Fragmented sales channels and difficult order tracking and vendor settlement.",
    solution3Solution: "Multi-Vendor Platform + Payments + Order Management + APIs.",
    solution3Result: "Centralized operations, smooth buying, and easier vendor and catalog growth.",
    solution4Title: "Connected factory & predictive maintenance",
    solution4Summary: "Real-time monitoring of machines, energy, and faults through sensors and control dashboards.",
    solution4Challenge: "Unexpected downtime, manual tracking, and unclear causes of production loss.",
    solution4Solution: "Sensors + Edge Computing + MES + Predictive Maintenance.",
    solution4Result: "Live visibility, earlier alerts, and better maintenance and production planning.",
    solution5Title: "Executive data command center",
    solution5Summary: "An executive view that combines KPIs from multiple systems with performance and forecasts.",
    solution5Challenge: "Late reports, conflicting numbers, and no single view of company performance.",
    solution5Solution: "Data Warehouse + ETL + BI Dashboards + Forecasting.",
    solution5Result: "Trusted KPIs, faster monitoring, and earlier detection of opportunities and risks.",
    solution6Title: "Secure, scalable cloud foundation",
    solution6Summary: "Move systems to a resilient environment with automated releases, monitoring, backup, and protection.",
    solution6Challenge: "Recurring outages, manual deployment, and costs or risks that are hard to control.",
    solution6Solution: "Cloud Migration + Docker + CI/CD + Monitoring + DR.",
    solution6Result: "Higher reliability, faster releases, and better control of security and resources.",
    customSolutionLabel: "Your solution may combine several capabilities",
    customSolutionTitle: "Tell us the challenge and we’ll suggest the right solution mix.",
    customSolutionCta: "Describe your need",
    whyKicker: "Why ALA Core?",
    whyTitle: "One partner who sees the whole picture.",
    whyLead: "We do not deliver technology in isolation. We start with your business goals, design the right solution, then build, operate, and improve it with you.",
    whatWeValueKicker: "What sets us apart",
    whatWeValueTitle: "Built around your goals, not our templates.",
    value1Title: "Solutions tailored to your business",
    value1Desc: "No rigid templates—every decision connects to a goal and a measurable outcome.",
    value2Title: "End-to-end delivery",
    value2Desc: "Strategy, design, development, integration, and operations under one ownership.",
    value3Title: "Secure and scalable by design",
    value3Desc: "Modern engineering that considers performance, protection, and growth from day one.",
    processKicker: "How we work",
    processTitle: "A clear path from challenge to impact.",
    processLead: "A flexible approach that reduces risk and keeps progress visible at every stage.",
    process1Title: "Discover",
    process1Desc: "We analyze goals, operations, and users to define the right priorities.",
    process2Title: "Design",
    process2Desc: "We shape the solution, experience, and architecture into an actionable plan.",
    process3Title: "Build",
    process3Desc: "We develop, test, and share progress through fast, transparent cycles.",
    process4Title: "Launch & evolve",
    process4Desc: "We launch, monitor performance, then continuously improve and scale.",
    faqKicker: "Before we begin",
    faqTitle: "Clear answers before you decide.",
    faqLead: "If your question is different, our assistant knows the details of our services—or you can speak directly with the team.",
    faqCta: "Ask another question",
    faq1Question: "How do we start a project with ALA Core?",
    faq1Answer: "We begin with a short conversation to understand the goal, challenge, and current systems. Then we define an initial scope, deliverables, phases, and suitable timeline before implementation begins.",
    faq2Question: "Should we use a custom system or a platform like Odoo?",
    faq2Answer: "It depends on your processes, budget, integrations, and growth plans. We assess both objectively: use an established platform when it fits, and build custom when your requirements create an advantage or are not covered well.",
    faq3Question: "Can we start small and expand later?",
    faq3Answer: "Yes. We often recommend an MVP or first phase focused on the highest value and lowest risk, then add capabilities and integrations based on usage and results.",
    faq4Question: "What happens after the system launches?",
    faq4Answer: "We can provide monitoring, support, maintenance, continuous improvement, and training. The support model and service level depend on system criticality, user count, and required coverage hours.",
    faq5Question: "How do you handle security and company data?",
    faq5Answer: "We apply security by design, defining access, encryption, backup, and monitoring around the solution. Regulatory requirements are reviewed for your country and industry before implementation.",
    contactKicker: "Let's begin",
    contactTitle: "What challenge do you want to solve next?",
    contactLead: "Tell us about your idea or challenge. We will help define the best starting point and next steps.",
    formName: "Name",
    formNamePlaceholder: "Your name",
    formCompany: "Company",
    formCompanyPlaceholder: "Company name",
    formInterest: "Which service are you interested in?",
    formSelect: "Select a service",
    formOptionAi: "Artificial Intelligence & Data",
    formOptionSoftware: "Software, Websites & E-commerce",
    formOptionEnterprise: "Enterprise Systems & Automation",
    formOptionCloud: "Cloud, Security & Managed Services",
    formOptionIot: "IoT, Communications & Payments",
    formOptionOther: "Another service",
    formMessage: "Tell us briefly what you need",
    formMessagePlaceholder: "Project goal, current challenge, and the outcome you expect...",
    formSubmit: "Send via WhatsApp",
    formNote: "WhatsApp will open with a pre-filled message using the details above.",
    footerTagline: "Technology closer to your business. Impact that goes further.",
    rights: "All rights reserved.",
    footerStatus: "Ready for your next project",
    chatLauncher: "Ask ALA",
    chatOnline: "Online now",
    chatPlaceholder: "Ask about any service..."
  },
  tr: {
    navHome: "Ana Sayfa",
    navServices: "Hizmetler",
    navSolutions: "Çözüm örnekleri",
    navWhy: "Neden biz",
    navProcess: "Süreç",
    navContact: "İletişim",
    navAbout: "Hakkımızda",
    servicesMore: "Tüm hizmetleri keşfedin",
    navCta: "Projeye başla",
    heroEyebrow: "Büyüme ve dijital dönüşüm ortağınız",
    heroTitle1: "Dijital işinizin",
    heroTitleAccent: "çekirdeğini inşa ediyoruz.",
    heroLead: "Karmaşık zorlukları; yapay zeka ve yazılım geliştirmeden kurumsal sistemlere, buluta ve siber güvenliğe kadar akıllı, bağlantılı ve ölçeklenebilir çözümlere dönüştürüyoruz.",
    heroCtaPrimary: "Projenizi konuşalım",
    heroCtaSecondary: "Yapay zeka asistanımıza sorun",
    trustServices: "hizmet alanı",
    trustB2b: "kurumsal çözüm",
    trustCoverage: "uçtan uca uygulama",
    capabilityIntro: "İşinizin ihtiyaçlarına göre teknoloji",
    servicesKicker: "Yetkinliklerimiz",
    servicesTitle: "Tek ekosistem.<br />İşletmenizin ihtiyaç duyduğu her şey.",
    servicesLead: "Uzman ekipler, birçok tedarikçiyle uğraşmak yerine tek ve eksiksiz bir çözüm sunmak için uyum içinde çalışır.",
    serviceAiTitle: "Yapay Zeka & Veri",
    serviceAiDesc: "Verinizi ve operasyonlarınızı daha hızlı kararlara ve daha akıllı müşteri deneyimlerine dönüştüren çözümler.",
    serviceSoftwareTitle: "Dijital Ürünler & Deneyimler",
    serviceSoftwareDesc: "Sizinle birlikte büyüyecek şekilde tasarlanmış hızlı ve güvenli dijital ürünler geliştiriyoruz.",
    serviceEnterpriseTitle: "Kurumsal Sistemler & Entegrasyon",
    serviceEnterpriseDesc: "Süreçleri ve sistemleri birbirine bağlayıp manuel işleri kaldırarak verimliliği ve şeffaflığı artırıyoruz.",
    serviceCloudTitle: "Bulut, Güvenlik & Yönetilen Hizmetler",
    serviceCloudDesc: "Sürekli izleme ve destekle çalışan dayanıklı, korunaklı altyapı.",
    serviceConnectedTitle: "Bağlantılı & Akıllı Sistemler",
    serviceConnectedDesc: "Cihazları, lokasyonları, iletişim kanallarını ve ödemeleri tek bir ekosistemde birleştiriyoruz.",
    serviceGrowthTitle: "Büyüme, Kalite & Yetkinlik Kazandırma",
    serviceGrowthDesc: "Pazara girişinizi, ürün kalitenizi, içeriğinizi ve ekibinizin teknolojiyi benimsemesini destekliyoruz.",
    serviceAsk: "Bu hizmet hakkında sor",
    solutionsKicker: "Çözüm örnekleri",
    solutionsTitle: "Bir sorun<br />nasıl çalışan bir çözüme dönüşür?",
    solutionsLead: "Neyin inşa edilip işletmenize göre uyarlanabileceğini hayal etmenize yardımcı olacak örnekler. Gerçek kapsam, operasyonlarınızı ve hedeflerinizi anladıktan sonra belirlenir.",
    solutionsNote: "Bunlar örnek senaryolardır, müşteri vaka çalışması değildir",
    challengeLabel: "Zorluk",
    solutionLabel: "Çözüm",
    resultLabel: "Beklenen sonuç",
    solution1Title: "Akıllı müşteri hizmetleri asistanı",
    solution1Summary: "Şirket bilgisinden yanıt veren ve WhatsApp ile CRM'e bağlanan çok dilli bir asistan.",
    solution1Challenge: "Tekrarlanan sorular, yavaş yanıtlar ve dosyalar ile çalışanlar arasında dağınık bilgi.",
    solution1Solution: "RAG Chatbot + Yapay Zeka Ajanı + WhatsApp API + CRM Otomasyonu.",
    solution1Result: "Kesintisiz hizmet, tutarlı yanıtlar ve doğru ekibe daha hızlı yönlendirme.",
    solution2Title: "Birleşik şirket operasyonu",
    solution2Summary: "Satış, stok, muhasebe ve onayları tek bir merkezi sistemde birleştirin.",
    solution2Challenge: "Dağınık Excel dosyaları, tekrarlanan veri girişi ve anlık durumu görememe.",
    solution2Solution: "Odoo veya özel ERP + n8n İş Akışları + yönetim panosu.",
    solution2Result: "Daha az manuel iş, tutarlı veri ve departmanlar arasında daha hızlı kararlar.",
    solution3Title: "Çoklu satıcılı ticaret platformu",
    solution3Summary: "Satıcıları, siparişleri, ödemeleri ve komisyonları tek bir yerden yöneten bir pazar yeri.",
    solution3Challenge: "Dağınık satış kanalları, zor sipariş takibi ve satıcı hesaplaşması.",
    solution3Solution: "Çoklu Satıcı Platformu + Ödemeler + Sipariş Yönetimi + API'ler.",
    solution3Result: "Merkezi operasyon, sorunsuz alışveriş ve satıcı/katalog büyümesinde kolaylık.",
    solution4Title: "Bağlantılı fabrika & kestirimci bakım",
    solution4Summary: "Sensörler ve kontrol panoları aracılığıyla makine, enerji ve arızaların gerçek zamanlı izlenmesi.",
    solution4Challenge: "Beklenmedik duruş süreleri, manuel takip ve üretim kaybının belirsiz nedenleri.",
    solution4Solution: "Sensörler + Uç Bilişim (Edge Computing) + MES + Kestirimci Bakım.",
    solution4Result: "Anlık görünürlük, erken uyarılar ve daha iyi bakım/üretim planlaması.",
    solution5Title: "Yönetici veri komuta merkezi",
    solution5Summary: "Birden fazla sistemden gelen KPI'ları performans ve tahminlerle birleştiren yönetici görünümü.",
    solution5Challenge: "Gecikmiş raporlar, çelişen rakamlar ve şirket performansına dair tek bir görünümün olmaması.",
    solution5Solution: "Veri Ambarı + ETL + BI Panoları + Tahminleme.",
    solution5Result: "Güvenilir KPI'lar, daha hızlı izleme ve fırsat/risklerin erken tespiti.",
    solution6Title: "Güvenli, ölçeklenebilir bulut altyapısı",
    solution6Summary: "Sistemleri; otomatik dağıtım, izleme, yedekleme ve korumayla dayanıklı bir ortama taşıyın.",
    solution6Challenge: "Tekrarlayan kesintiler, manuel dağıtım ve kontrolü zor maliyet veya riskler.",
    solution6Solution: "Bulut Göçü + Docker + CI/CD + İzleme + Felaket Kurtarma (DR).",
    solution6Result: "Daha yüksek güvenilirlik, daha hızlı sürümler ve güvenlik/kaynaklarda daha iyi kontrol.",
    customSolutionLabel: "Çözümünüz birden fazla alanı birleştirebilir",
    customSolutionTitle: "Zorluğunuzu anlatın, size doğru çözüm karışımını önerelim.",
    customSolutionCta: "İhtiyacınızı anlatın",
    whyKicker: "Neden ALA Core?",
    whyTitle: "Resmin tamamını gören tek bir ortak.",
    whyLead: "Teknolojiyi gerçeklikten kopuk sunmayız. İş hedeflerinizle başlar, doğru çözümü tasarlar, ardından sizinle birlikte inşa eder, işletir ve geliştiririz.",
    whatWeValueKicker: "Bizi farklı kılan",
    whatWeValueTitle: "Şablonlarımıza göre değil, hedeflerinize göre kurgulanır.",
    value1Title: "İşinize özel tasarlanmış çözümler",
    value1Desc: "Katı şablonlar yok; her karar bir hedefe ve ölçülebilir bir sonuca bağlıdır.",
    value2Title: "Uçtan uca uygulama",
    value2Desc: "Strateji, tasarım, geliştirme, entegrasyon ve işletme tek bir sorumluluk altında.",
    value3Title: "Baştan itibaren güvenli ve ölçeklenebilir",
    value3Desc: "İlk günden itibaren performansı, korumayı ve büyümeyi dikkate alan modern mühendislik.",
    processKicker: "Nasıl çalışıyoruz",
    processTitle: "Zorluktan etkiye giden net bir yol.",
    processLead: "Riski azaltan ve her aşamada ilerlemeyi görünür kılan esnek bir yaklaşım.",
    process1Title: "Anlıyoruz",
    process1Desc: "Doğru öncelikleri belirlemek için hedefleri, süreçleri ve kullanıcıları analiz ediyoruz.",
    process2Title: "Tasarlıyoruz",
    process2Desc: "Çözümü, deneyimi ve mimariyi uygulanabilir bir plana dönüştürüyoruz.",
    process3Title: "İnşa ediyoruz",
    process3Desc: "Hızlı ve şeffaf döngülerle geliştiriyor, test ediyor ve ilerlemeyi sizinle paylaşıyoruz.",
    process4Title: "Yayınlıyor ve geliştiriyoruz",
    process4Desc: "Çözümü yayınlıyor, performansı izliyor, ardından sürekli iyileştirip ölçekliyoruz.",
    faqKicker: "Başlamadan önce",
    faqTitle: "Karar vermeden önce net yanıtlar.",
    faqLead: "Sorunuz farklıysa, asistanımız hizmetlerimizin ayrıntılarını biliyor—ya da doğrudan ekiple konuşabilirsiniz.",
    faqCta: "Başka bir soru sor",
    faq1Question: "ALA Core ile bir projeye nasıl başlarız?",
    faq1Answer: "Hedefi, zorluğu ve mevcut sistemleri anlamak için kısa bir görüşmeyle başlıyoruz. Ardından uygulamaya geçmeden önce ilk kapsamı, teslimatları, aşamaları ve uygun zaman çizelgesini belirliyoruz.",
    faq2Question: "Özel bir sistem mi yoksa Odoo gibi hazır bir platform mu daha iyi?",
    faq2Answer: "Bu; süreçlerinize, bütçenize, entegrasyonlarınıza ve büyüme planlarınıza bağlıdır. Her ikisini de objektif olarak değerlendiriyoruz: uygun olduğunda yerleşik bir platform kullanıyoruz, gereksinimleriniz bir avantaj yaratıyorsa veya iyi karşılanmıyorsa özel geliştiriyoruz.",
    faq3Question: "Küçük başlayıp sonra genişleyebilir miyiz?",
    faq3Answer: "Evet. Genellikle en yüksek değere ve en düşük riske odaklanan bir MVP veya ilk aşama öneriyoruz, ardından kullanım ve sonuçlara göre yetenekler ve entegrasyonlar ekliyoruz.",
    faq4Question: "Sistem yayınlandıktan sonra ne olur?",
    faq4Answer: "İzleme, destek, bakım, sürekli iyileştirme ve eğitim sağlayabiliriz. Destek modeli ve hizmet seviyesi; sistemin kritikliğine, kullanıcı sayısına ve gereken kapsama saatlerine bağlıdır.",
    faq5Question: "Güvenliği ve şirket verilerini nasıl ele alıyorsunuz?",
    faq5Answer: "Tasarım aşamasından itibaren güvenliği uyguluyor; erişim, şifreleme, yedekleme ve izlemeyi çözümün doğasına göre belirliyoruz. Yasal gereklilikler, uygulamadan önce ülkenize ve sektörünüze göre gözden geçirilir.",
    contactKicker: "Başlayalım",
    contactTitle: "Sırada hangi zorluğu çözmek istiyorsunuz?",
    contactLead: "Fikrinizi veya zorluğunuzu bizimle paylaşın; en iyi başlangıç noktasını ve sonraki adımları belirlemenize yardımcı olalım.",
    formName: "Ad",
    formNamePlaceholder: "Adınızı yazın",
    formCompany: "Şirket",
    formCompanyPlaceholder: "Şirket adı",
    formInterest: "Hangi hizmetle ilgileniyorsunuz?",
    formSelect: "Hizmet seçin",
    formOptionAi: "Yapay Zeka & Veri",
    formOptionSoftware: "Yazılım, Web Siteleri & E-ticaret",
    formOptionEnterprise: "Kurumsal Sistemler & Otomasyon",
    formOptionCloud: "Bulut, Güvenlik & Yönetilen Hizmetler",
    formOptionIot: "IoT, İletişim & Ödemeler",
    formOptionOther: "Başka bir hizmet",
    formMessage: "İhtiyacınızı kısaca anlatın",
    formMessagePlaceholder: "Proje hedefi, mevcut zorluk ve beklediğiniz sonuç...",
    formSubmit: "WhatsApp ile gönder",
    formNote: "Girdiğiniz bilgilerle hazırlanmış bir mesajla WhatsApp açılacaktır.",
    footerTagline: "İşinize daha yakın teknoloji. Daha ileri giden etki.",
    rights: "Tüm hakları saklıdır.",
    footerStatus: "Bir sonraki projeniz için hazırız",
    chatLauncher: "ALA'ya sor",
    chatOnline: "Şu anda çevrimiçi",
    chatPlaceholder: "Herhangi bir hizmet hakkında sorun..."
  },
  de: {
    navHome: "Startseite",
    navServices: "Leistungen",
    navSolutions: "Lösungsbeispiele",
    navWhy: "Warum wir",
    navProcess: "Vorgehen",
    navContact: "Kontakt",
    navAbout: "Über uns",
    servicesMore: "Alle Leistungen entdecken",
    navCta: "Projekt starten",
    heroEyebrow: "Ihr Partner für Wachstum & digitale Transformation",
    heroTitle1: "Wir bauen den",
    heroTitleAccent: "Kern Ihres digitalen Geschäfts.",
    heroLead: "Wir verwandeln komplexe Herausforderungen in intelligente, vernetzte und skalierbare Lösungen – von KI und Softwareentwicklung bis zu Unternehmenssystemen, Cloud und Cybersicherheit.",
    heroCtaPrimary: "Projekt besprechen",
    heroCtaSecondary: "Unseren KI-Assistenten fragen",
    trustServices: "Leistungsbereiche",
    trustB2b: "Business-Lösungen",
    trustCoverage: "Umsetzung aus einer Hand",
    capabilityIntro: "Technologie, die zu Ihrem Geschäft passt",
    servicesKicker: "Unsere Kompetenzen",
    servicesTitle: "Ein Ökosystem.<br />Alles, was Ihr Unternehmen braucht.",
    servicesLead: "Spezialisierte Teams arbeiten wie eines zusammen und liefern eine Komplettlösung – ohne Anbieter-Wirrwarr.",
    serviceAiTitle: "Künstliche Intelligenz & Daten",
    serviceAiDesc: "Lösungen, die Ihre Daten und Prozesse in schnellere Entscheidungen und smartere Kundenerlebnisse verwandeln.",
    serviceSoftwareTitle: "Digitale Produkte & Erlebnisse",
    serviceSoftwareDesc: "Wir entwerfen und entwickeln schnelle, sichere digitale Produkte, die mit Ihnen mitwachsen.",
    serviceEnterpriseTitle: "Unternehmenssysteme & Integration",
    serviceEnterpriseDesc: "Wir verbinden Abläufe und Systeme und entfernen manuelle Arbeit für mehr Effizienz und Transparenz.",
    serviceCloudTitle: "Cloud, Sicherheit & Managed Services",
    serviceCloudDesc: "Robuste, geschützte Infrastruktur mit kontinuierlicher Überwachung und Support.",
    serviceConnectedTitle: "Vernetzte & intelligente Systeme",
    serviceConnectedDesc: "Wir verbinden Geräte, Standorte, Kommunikation und Zahlungen in einem Ökosystem.",
    serviceGrowthTitle: "Wachstum, Qualität & Befähigung",
    serviceGrowthDesc: "Wir unterstützen Markteinführung, Produktqualität, Content und die Einführung neuer Technologien in Ihrem Team.",
    serviceAsk: "Nach diesem Service fragen",
    solutionsKicker: "Lösungsbeispiele",
    solutionsTitle: "Wie wird aus einer Herausforderung<br />eine funktionierende Lösung?",
    solutionsLead: "Anschauliche Beispiele, damit Sie sich vorstellen können, was gebaut und auf Ihr Unternehmen zugeschnitten werden kann. Der tatsächliche Umfang wird festgelegt, sobald wir Ihre Abläufe und Ziele verstehen.",
    solutionsNote: "Illustrative Beispiele – keine Kundenfallstudien",
    challengeLabel: "Herausforderung",
    solutionLabel: "Lösung",
    resultLabel: "Erwartetes Ergebnis",
    solution1Title: "Intelligenter Kundenservice-Assistent",
    solution1Summary: "Ein mehrsprachiger Assistent, der aus dem Unternehmenswissen antwortet und mit WhatsApp und CRM verbunden ist.",
    solution1Challenge: "Wiederholte Fragen, langsame Antworten und Wissen, das über Dateien und Mitarbeiter verstreut ist.",
    solution1Solution: "RAG-Chatbot + KI-Agent + WhatsApp-API + CRM-Automatisierung.",
    solution1Result: "Durchgehender Service, einheitliche Antworten und schnellere Weiterleitung an das richtige Team.",
    solution2Title: "Einheitlicher Unternehmensbetrieb",
    solution2Summary: "Vertrieb, Lager, Buchhaltung und Freigaben in einem zentralen System verbinden.",
    solution2Challenge: "Getrennte Excel-Dateien, doppelte Eingaben und kein Echtzeit-Überblick über den Betrieb.",
    solution2Solution: "Odoo oder individuelles ERP + n8n-Workflows + Management-Dashboard.",
    solution2Result: "Weniger manuelle Arbeit, einheitliche Daten und schnellere Entscheidungen über alle Abteilungen hinweg.",
    solution3Title: "Multi-Vendor-Handelsplattform",
    solution3Summary: "Ein Marktplatz, der Anbieter, Bestellungen, Zahlungen und Provisionen an einem Ort verwaltet.",
    solution3Challenge: "Zersplitterte Verkaufskanäle, schwierige Bestellverfolgung und Anbieterabrechnung.",
    solution3Solution: "Multi-Vendor-Plattform + Zahlungen + Bestellverwaltung + APIs.",
    solution3Result: "Zentraler Betrieb, reibungsloser Einkauf und einfacheres Wachstum für Anbieter und Katalog.",
    solution4Title: "Vernetzte Fabrik & vorausschauende Wartung",
    solution4Summary: "Echtzeitüberwachung von Maschinen, Energie und Störungen über Sensoren und Kontroll-Dashboards.",
    solution4Challenge: "Unerwartete Ausfallzeiten, manuelle Nachverfolgung und unklare Ursachen für Produktionsverluste.",
    solution4Solution: "Sensoren + Edge Computing + MES + vorausschauende Wartung.",
    solution4Result: "Echtzeit-Transparenz, frühere Warnungen und bessere Wartungs- und Produktionsplanung.",
    solution5Title: "Zentrale für Unternehmensdaten",
    solution5Summary: "Eine Führungsansicht, die KPIs aus mehreren Systemen mit Leistung und Prognosen kombiniert.",
    solution5Challenge: "Verspätete Berichte, widersprüchliche Zahlen und keine einheitliche Sicht auf die Unternehmensleistung.",
    solution5Solution: "Data Warehouse + ETL + BI-Dashboards + Prognosen.",
    solution5Result: "Verlässliche KPIs, schnellere Überwachung und frühere Erkennung von Chancen und Risiken.",
    solution6Title: "Sichere, skalierbare Cloud-Basis",
    solution6Summary: "Systeme in eine robuste Umgebung mit automatisierten Releases, Überwachung, Backup und Schutz überführen.",
    solution6Challenge: "Wiederkehrende Ausfälle, manuelles Deployment sowie schwer kontrollierbare Kosten oder Risiken.",
    solution6Solution: "Cloud-Migration + Docker + CI/CD + Monitoring + Disaster Recovery.",
    solution6Result: "Höhere Zuverlässigkeit, schnellere Releases und bessere Kontrolle über Sicherheit und Ressourcen.",
    customSolutionLabel: "Ihre Lösung kombiniert vielleicht mehrere Bereiche",
    customSolutionTitle: "Schildern Sie uns die Herausforderung, wir schlagen die passende Lösungsmischung vor.",
    customSolutionCta: "Ihren Bedarf beschreiben",
    whyKicker: "Warum ALA Core?",
    whyTitle: "Ein Partner, der das Gesamtbild sieht.",
    whyLead: "Wir liefern Technologie nicht losgelöst von der Realität. Wir starten mit Ihren Geschäftszielen, entwerfen die passende Lösung und bauen, betreiben und verbessern sie gemeinsam mit Ihnen.",
    whatWeValueKicker: "Was uns auszeichnet",
    whatWeValueTitle: "Auf Ihre Ziele ausgerichtet, nicht auf unsere Vorlagen.",
    value1Title: "Auf Ihr Unternehmen zugeschnittene Lösungen",
    value1Desc: "Keine starren Vorlagen – jede Entscheidung ist mit einem Ziel und einem messbaren Ergebnis verknüpft.",
    value2Title: "Umsetzung aus einer Hand",
    value2Desc: "Strategie, Design, Entwicklung, Integration und Betrieb unter einer Verantwortung.",
    value3Title: "Von Anfang an sicher und skalierbar",
    value3Desc: "Moderne Technik, die Leistung, Schutz und Wachstum von Tag eins an berücksichtigt.",
    processKicker: "So arbeiten wir",
    processTitle: "Ein klarer Weg von der Herausforderung zur Wirkung.",
    processLead: "Ein flexibles Vorgehen, das Risiken reduziert und den Fortschritt in jeder Phase sichtbar hält.",
    process1Title: "Verstehen",
    process1Desc: "Wir analysieren Ziele, Abläufe und Nutzer, um die richtigen Prioritäten festzulegen.",
    process2Title: "Entwerfen",
    process2Desc: "Wir gestalten Lösung, Erlebnis und Architektur zu einem umsetzbaren Plan.",
    process3Title: "Bauen",
    process3Desc: "Wir entwickeln, testen und teilen Fortschritte in schnellen, transparenten Zyklen.",
    process4Title: "Starten & weiterentwickeln",
    process4Desc: "Wir starten, überwachen die Leistung und verbessern und skalieren kontinuierlich.",
    faqKicker: "Bevor wir beginnen",
    faqTitle: "Klare Antworten, bevor Sie entscheiden.",
    faqLead: "Wenn Ihre Frage anders ist, kennt unser Assistent die Details unserer Services – oder Sie sprechen direkt mit dem Team.",
    faqCta: "Eine weitere Frage stellen",
    faq1Question: "Wie starten wir ein Projekt mit ALA Core?",
    faq1Answer: "Wir beginnen mit einem kurzen Gespräch, um Ziel, Herausforderung und bestehende Systeme zu verstehen. Danach legen wir einen ersten Umfang, Ergebnisse, Phasen und einen passenden Zeitplan fest, bevor die Umsetzung beginnt.",
    faq2Question: "Ist ein individuelles System besser oder eine Plattform wie Odoo?",
    faq2Answer: "Das hängt von Ihren Prozessen, Ihrem Budget, Integrationen und Wachstumsplänen ab. Wir bewerten beides objektiv: eine etablierte Plattform, wenn sie passt, und eine individuelle Lösung, wenn Ihre Anforderungen einen Vorteil schaffen oder nicht gut abgedeckt sind.",
    faq3Question: "Können wir klein starten und später erweitern?",
    faq3Answer: "Ja. Wir empfehlen oft ein MVP oder eine erste Phase mit Fokus auf den höchsten Wert und das geringste Risiko, und fügen dann basierend auf Nutzung und Ergebnissen weitere Funktionen und Integrationen hinzu.",
    faq4Question: "Was passiert nach dem Start des Systems?",
    faq4Answer: "Wir bieten Überwachung, Support, Wartung, kontinuierliche Verbesserung und Schulungen an. Das Support-Modell und der Servicelevel richten sich nach der Kritikalität des Systems, der Nutzerzahl und den benötigten Abdeckungszeiten.",
    faq5Question: "Wie gehen Sie mit Sicherheit und Unternehmensdaten um?",
    faq5Answer: "Wir wenden Security by Design an und definieren Zugriffsrechte, Verschlüsselung, Backup und Überwachung passend zur Lösung. Regulatorische Anforderungen werden vor der Umsetzung für Ihr Land und Ihre Branche geprüft.",
    contactKicker: "Legen wir los",
    contactTitle: "Welche Herausforderung möchten Sie als Nächstes lösen?",
    contactLead: "Erzählen Sie uns von Ihrer Idee oder Herausforderung. Wir helfen Ihnen, den besten Startpunkt und die nächsten Schritte festzulegen.",
    formName: "Name",
    formNamePlaceholder: "Ihr Name",
    formCompany: "Unternehmen",
    formCompanyPlaceholder: "Firmenname",
    formInterest: "Für welchen Service interessieren Sie sich?",
    formSelect: "Service auswählen",
    formOptionAi: "Künstliche Intelligenz & Daten",
    formOptionSoftware: "Software, Websites & E-Commerce",
    formOptionEnterprise: "Unternehmenssysteme & Automatisierung",
    formOptionCloud: "Cloud, Sicherheit & Managed Services",
    formOptionIot: "IoT, Kommunikation & Zahlungen",
    formOptionOther: "Ein anderer Service",
    formMessage: "Erzählen Sie uns kurz, was Sie brauchen",
    formMessagePlaceholder: "Projektziel, aktuelle Herausforderung und das erwartete Ergebnis...",
    formSubmit: "Über WhatsApp senden",
    formNote: "WhatsApp öffnet sich mit einer vorausgefüllten Nachricht anhand Ihrer Angaben.",
    footerTagline: "Technologie näher an Ihrem Geschäft. Wirkung, die weiter reicht.",
    rights: "Alle Rechte vorbehalten.",
    footerStatus: "Bereit für Ihr nächstes Projekt",
    chatLauncher: "ALA fragen",
    chatOnline: "Jetzt online",
    chatPlaceholder: "Fragen Sie nach jedem Service..."
  },
};
const chatCopy = {
  en: {
    greeting: "Hey, it’s Louay 👋 How can I help you?",
    quickReplies: [
      "Solution examples",
      "AI services",
      "Build an app or website",
      "ERP & automation",
      "Pricing & getting started"
    ],
    contact: "We’d be happy to talk. Reach us on WhatsApp at +49 176 218 122 12 or email louaychalabi917@gmail.com. You can also use the contact form to prepare a detailed WhatsApp message.",
    pricing: "Pricing depends on the project scope, integrations, and timeline. Share a short description of what you need and we’ll help define the scope and provide a realistic estimate.",
    timeline: "Delivery time depends on the size of the solution. After a short discovery session, we define phases, deliverables, and timing clearly. We can often begin with an MVP and scale from there.",
    fallback: "I can help you choose the right service. Try: “I want to automate customer service,” “I need an online store,” “We need an ERP,” or “We need to secure our infrastructure.” You can also contact our team on WhatsApp for direct advice."
  },
  tr: {
    greeting: "Merhaba, ben Louay 👋 Sana nasıl yardımcı olabilirim?",
    quickReplies: [
      "Çözüm örnekleri",
      "Yapay zeka hizmetleri",
      "Uygulama veya web sitesi yaptır",
      "ERP & otomasyon",
      "Fiyatlandırma & başlangıç"
    ],
    contact: "Sizinle konuşmaktan memnuniyet duyarız. Bize WhatsApp'tan +49 176 218 122 12 numarasından ya da louaychalabi917@gmail.com adresinden ulaşabilirsiniz. Ayrıntılı bir WhatsApp mesajı hazırlamak için iletişim formunu da kullanabilirsiniz.",
    pricing: "Fiyat; proje kapsamına, entegrasyonlara ve zaman çizelgesine bağlıdır. İhtiyacınızın kısa bir açıklamasını paylaşın, kapsamı belirleyip gerçekçi bir tahmin sunalım.",
    timeline: "Teslim süresi çözümün büyüklüğüne bağlıdır. Kısa bir keşif görüşmesinin ardından aşamaları, teslimatları ve zamanlamayı net şekilde belirliyoruz. Çoğunlukla bir MVP ile başlayıp oradan ölçekleyebiliriz.",
    fallback: "Doğru hizmeti seçmenize yardımcı olabilirim. Örneğin şunu deneyin: \"Müşteri hizmetlerini otomatikleştirmek istiyorum\", \"Bir online mağazaya ihtiyacım var\", \"Bir ERP'ye ihtiyacımız var\" ya da \"Altyapımızı güvenli hale getirmemiz gerekiyor\". Ayrıca WhatsApp üzerinden doğrudan ekibimizle de iletişime geçebilirsiniz."
  },
  de: {
    greeting: "Hallo, hier ist Louay 👋 Wie kann ich dir helfen?",
    quickReplies: [
      "Lösungsbeispiele",
      "KI-Services",
      "App oder Website bauen",
      "ERP & Automatisierung",
      "Preise & Einstieg"
    ],
    contact: "Wir sprechen gerne mit Ihnen. Erreichen Sie uns per WhatsApp unter +49 176 218 122 12 oder per E-Mail an louaychalabi917@gmail.com. Sie können auch das Kontaktformular nutzen, um eine detaillierte WhatsApp-Nachricht vorzubereiten.",
    pricing: "Die Kosten hängen vom Projektumfang, den Integrationen und dem Zeitrahmen ab. Teilen Sie uns kurz mit, was Sie brauchen, und wir helfen, den Umfang und eine realistische Schätzung festzulegen.",
    timeline: "Die Umsetzungsdauer hängt von der Größe der Lösung ab. Nach einer kurzen Discovery-Sitzung legen wir Phasen, Ergebnisse und einen klaren Zeitplan fest. Oft starten wir mit einem MVP und skalieren von dort.",
    fallback: "Ich helfe Ihnen gerne, den passenden Service zu finden. Versuchen Sie es z. B. mit: „Ich möchte den Kundenservice automatisieren“, „Ich brauche einen Onlineshop“, „Wir brauchen ein ERP“ oder „Wir müssen unsere Infrastruktur absichern“. Sie können unser Team auch direkt per WhatsApp erreichen."
  },
};
const knowledgeBase = [
  {
    terms: [
      "use case",
      "solution example",
      "examples",
      "example"
    ],
    en: "Examples we can tailor include a RAG customer service assistant connected to WhatsApp and CRM, a unified ERP with n8n automation, a multi-vendor marketplace, a connected factory with predictive maintenance, an executive BI command center, or a secure cloud foundation with CI/CD and monitoring. See the Solution Examples section for details; the final scope is shaped around your operations.",
    tr: "Uyarlayabileceğimiz örnekler arasında WhatsApp ve CRM'e bağlı bir RAG müşteri hizmetleri asistanı, n8n otomasyonlu birleşik bir ERP, çoklu satıcılı bir pazar yeri, kestirimci bakımlı bağlantılı bir fabrika, yönetici için bir BI komuta merkezi veya CI/CD ve izlemeli güvenli bir bulut altyapısı bulunur. Ayrıntılar için Çözüm Örnekleri bölümüne bakın; nihai kapsam operasyonlarınıza göre şekillenir.",
    de: "Beispiele, die wir anpassen können: ein RAG-Kundenservice-Assistent, der mit WhatsApp und CRM verbunden ist, ein einheitliches ERP mit n8n-Automatisierung, ein Multi-Vendor-Marktplatz, eine vernetzte Fabrik mit vorausschauender Wartung, eine BI-Zentrale für Führungskräfte oder eine sichere Cloud-Basis mit CI/CD und Monitoring. Details finden Sie im Bereich Lösungsbeispiele; der endgültige Umfang richtet sich nach Ihren Abläufen."
  },
  {
    terms: [
      "ai",
      "agent",
      "chatbot",
      "rag",
      "generative",
      "voice",
      "computer vision",
      "ocr",
      "document"
    ],
    en: "We deliver AI Agents, task automation, Generative AI, RAG systems connected to company knowledge, chatbots, Voice AI, computer vision, OCR, and document intelligence. We begin with the use case and expected impact, then build and integrate the solution with your systems.",
    tr: "Yapay zeka ajanları, görev otomasyonu, üretken yapay zeka, şirket bilgisine bağlı RAG sistemleri, sohbet botları, sesli yapay zeka, bilgisayarlı görü, OCR ve doküman zekası sunuyoruz. Kullanım senaryosu ve beklenen etkiyle başlayıp çözümü sistemlerinizle entegre ediyoruz.",
    de: "Wir liefern KI-Agenten, Aufgabenautomatisierung, Generative KI, RAG-Systeme, die mit dem Unternehmenswissen verbunden sind, Chatbots, Voice AI, Computer Vision, OCR und Dokumentenintelligenz. Wir starten mit dem Anwendungsfall und dem erwarteten Nutzen und integrieren die Lösung dann in Ihre Systeme."
  },
  {
    terms: [
      "data",
      "dashboard",
      "analytics",
      "bi",
      "warehouse",
      "report",
      "forecast",
      "kpi"
    ],
    en: "Our data and analytics capabilities include data engineering, warehousing, BI dashboards, reporting, performance analysis, forecasting, and KPI monitoring—turning fragmented data into clear, actionable decisions.",
    tr: "Veri ve analitik yetkinliklerimiz; veri mühendisliği, veri ambarı, BI panoları, raporlama, performans analizi, tahminleme ve KPI izlemeyi kapsar—dağınık veriyi net ve uygulanabilir kararlara dönüştürürüz.",
    de: "Unsere Daten- und Analysekompetenzen umfassen Data Engineering, Data Warehousing, BI-Dashboards, Reporting, Leistungsanalyse, Prognosen und KPI-Monitoring – wir verwandeln verstreute Daten in klare, umsetzbare Entscheidungen."
  },
  {
    terms: [
      "software",
      "app",
      "mobile",
      "desktop",
      "saas",
      "platform",
      "custom"
    ],
    en: "We build custom software, web, mobile, and desktop applications, SaaS platforms, and enterprise applications—with UX, security, performance, integration, and scalability covered from planning to launch and support.",
    tr: "Özel yazılımlar, web, mobil ve masaüstü uygulamaları, SaaS platformları ve kurumsal uygulamalar geliştiriyoruz—planlamadan lansmana ve desteğe kadar UX, güvenlik, performans, entegrasyon ve ölçeklenebilirliği kapsayarak.",
    de: "Wir entwickeln individuelle Software, Web-, Mobile- und Desktop-Anwendungen, SaaS-Plattformen und Unternehmensanwendungen – mit UX, Sicherheit, Leistung, Integration und Skalierbarkeit von der Planung bis zu Launch und Support."
  },
  {
    terms: [
      "website",
      "landing",
      "portal",
      "cms",
      "wordpress",
      "maintenance"
    ],
    en: "We design and develop corporate websites, landing pages, portals, and CMS solutions, plus ongoing maintenance. We focus on premium design, speed, mobile experience, SEO, easy management, and conversion.",
    tr: "Kurumsal web siteleri, açılış sayfaları, portallar ve CMS çözümleri tasarlıyor ve geliştiriyoruz, ayrıca sürekli bakım sağlıyoruz. Kaliteli tasarıma, hıza, mobil deneyime, SEO'ya, kolay yönetime ve dönüşüme odaklanıyoruz.",
    de: "Wir gestalten und entwickeln Unternehmenswebsites, Landingpages, Portale und CMS-Lösungen sowie laufende Wartung. Wir legen Wert auf hochwertiges Design, Geschwindigkeit, mobile Nutzung, SEO, einfache Pflege und Conversion."
  },
  {
    terms: [
      "ecommerce",
      "e-commerce",
      "marketplace",
      "multi-vendor",
      "order"
    ],
    en: "We build online stores, marketplaces, multi-vendor platforms, order management, and marketplace, payment, and shipping integrations. The stack is selected around your catalog, business model, target markets, and growth plans.",
    tr: "Online mağazalar, pazar yerleri, çoklu satıcılı platformlar, sipariş yönetimi ile pazar yeri, ödeme ve kargo entegrasyonları kuruyoruz. Teknoloji yığını; kataloğunuza, iş modelinize, hedef pazarlarınıza ve büyüme planlarınıza göre seçilir.",
    de: "Wir bauen Online-Shops, Marktplätze, Multi-Vendor-Plattformen, Bestellverwaltung sowie Marktplatz-, Zahlungs- und Versandintegrationen. Der Technologie-Stack wird passend zu Katalog, Geschäftsmodell, Zielmärkten und Wachstumsplänen gewählt."
  },
  {
    terms: [
      "erp",
      "crm",
      "hrm",
      "pos",
      "inventory",
      "accounting",
      "hospital",
      "school",
      "manufacturing",
      "sap",
      "odoo",
      "dynamics",
      "oracle",
      "erpnext",
      "zoho"
    ],
    en: "We build custom ERP, CRM, HRM, POS, inventory, and accounting systems, including solutions for healthcare, education, and manufacturing. We also implement and customize SAP, Odoo, Microsoft Dynamics, Oracle ERP, ERPNext, and Zoho where appropriate.",
    tr: "Sağlık, eğitim ve üretim için çözümler dahil olmak üzere özel ERP, CRM, HRM, POS, stok ve muhasebe sistemleri geliştiriyoruz. Ayrıca uygun olduğunda SAP, Odoo, Microsoft Dynamics, Oracle ERP, ERPNext ve Zoho'yu kurup özelleştiriyoruz.",
    de: "Wir entwickeln individuelle ERP-, CRM-, HRM-, POS-, Lager- und Buchhaltungssysteme, einschließlich Lösungen für Gesundheitswesen, Bildung und Fertigung. Zudem implementieren und passen wir SAP, Odoo, Microsoft Dynamics, Oracle ERP, ERPNext und Zoho an, wo es sinnvoll ist."
  },
  {
    terms: [
      "automation",
      "workflow",
      "n8n",
      "make",
      "zapier",
      "api",
      "integration",
      "whatsapp",
      "email automation",
      "business process"
    ],
    en: "We automate workflows with n8n, Make, Zapier, or custom solutions, and build API, WhatsApp, email, and CRM integrations. We map the current process, identify bottlenecks, then deliver observable, scalable automation.",
    tr: "n8n, Make, Zapier veya özel çözümlerle iş akışlarını otomatikleştiriyor; API, WhatsApp, e-posta ve CRM entegrasyonları kuruyoruz. Mevcut süreci haritalandırıp darboğazları belirledikten sonra izlenebilir, ölçeklenebilir bir otomasyon sunuyoruz.",
    de: "Wir automatisieren Workflows mit n8n, Make, Zapier oder individuellen Lösungen und bauen API-, WhatsApp-, E-Mail- und CRM-Integrationen. Wir zeichnen den aktuellen Prozess auf, identifizieren Engpässe und liefern dann beobachtbare, skalierbare Automatisierung."
  },
  {
    terms: [
      "cloud",
      "aws",
      "azure",
      "google cloud",
      "docker",
      "kubernetes",
      "devops",
      "ci/cd",
      "server",
      "hosting",
      "migration"
    ],
    en: "We cover AWS, Azure, Google Cloud, Docker, Kubernetes, CI/CD, server management, hosting, and cloud migration. Architecture is designed around performance, cost, availability, and security, with proper documentation and monitoring.",
    tr: "AWS, Azure, Google Cloud, Docker, Kubernetes, CI/CD, sunucu yönetimi, hosting ve bulut göçünü kapsıyoruz. Mimari; performans, maliyet, erişilebilirlik ve güvenlik etrafında, uygun dokümantasyon ve izlemeyle tasarlanır.",
    de: "Wir decken AWS, Azure, Google Cloud, Docker, Kubernetes, CI/CD, Servermanagement, Hosting und Cloud-Migration ab. Die Architektur wird nach Leistung, Kosten, Verfügbarkeit und Sicherheit gestaltet, mit klarer Dokumentation und Monitoring."
  },
  {
    terms: [
      "security",
      "cyber",
      "penetration",
      "vulnerability",
      "soc",
      "network security",
      "endpoint",
      "compliance",
      "backup",
      "disaster"
    ],
    en: "Our cybersecurity services include penetration testing, vulnerability assessment, SOC, network and endpoint security, compliance, backup, and disaster recovery. We prioritize real risks and provide a clear remediation path.",
    tr: "Siber güvenlik hizmetlerimiz; sızma testleri, güvenlik açığı değerlendirmesi, SOC, ağ ve uç nokta güvenliği, uyumluluk, yedekleme ve felaket kurtarmayı kapsar. Gerçek riskleri önceliklendirir ve net bir çözüm yolu sunarız.",
    de: "Unsere Cybersicherheitsdienste umfassen Penetrationstests, Schwachstellenanalysen, SOC, Netzwerk- und Endpunktsicherheit, Compliance, Backup und Disaster Recovery. Wir priorisieren reale Risiken und bieten einen klaren Weg zur Behebung."
  },
  {
    terms: [
      "ui",
      "ux",
      "design",
      "branding",
      "graphic",
      "motion",
      "video editing",
      "presentation"
    ],
    en: "We provide UI design, UX research, branding, graphic design, motion, video editing, and presentation design—connecting creative work to brand goals and customer experience, not appearance alone.",
    tr: "UI tasarımı, UX araştırması, marka kimliği, grafik tasarım, motion tasarım, video kurgu ve sunum tasarımı sunuyoruz—yaratıcı çalışmayı yalnızca görünümle değil, marka hedefleri ve müşteri deneyimiyle ilişkilendiriyoruz.",
    de: "Wir bieten UI-Design, UX-Recherche, Branding, Grafikdesign, Motion, Videobearbeitung und Präsentationsdesign – wir verbinden kreative Arbeit mit Markenzielen und Kundenerlebnis, nicht nur mit dem Aussehen."
  },
  {
    terms: [
      "marketing",
      "seo",
      "sem",
      "social",
      "ads",
      "email marketing",
      "content"
    ],
    en: "We provide SEO, SEM, social media, paid ads, email, content, and marketing automation. Strategy is built around audience, conversion journeys, and clear KPIs, with CRM and data integration where needed.",
    tr: "SEO, SEM, sosyal medya, ücretli reklamlar, e-posta, içerik ve pazarlama otomasyonu sunuyoruz. Strateji; hedef kitle, dönüşüm yolculukları ve net KPI'lar etrafında, gerektiğinde CRM ve veri entegrasyonuyla kurulur.",
    de: "Wir bieten SEO, SEM, Social Media, bezahlte Anzeigen, E-Mail, Content und Marketing-Automatisierung. Die Strategie wird um Zielgruppe, Conversion-Journeys und klare KPIs herum aufgebaut, mit CRM- und Datenintegration bei Bedarf."
  },
  {
    terms: [
      "it support",
      "help desk",
      "managed it",
      "network",
      "system admin",
      "monitoring",
      "hardware"
    ],
    en: "Managed infrastructure services include IT support and help desk, network and system administration, remote monitoring, and hardware and software management. Support can be tailored to your users, locations, and required service level.",
    tr: "Yönetilen altyapı hizmetleri; BT desteği ve yardım masası, ağ ve sistem yönetimi, uzaktan izleme ile donanım ve yazılım yönetimini kapsar. Destek; kullanıcılarınıza, lokasyonlarınıza ve gereken hizmet seviyesine göre uyarlanabilir.",
    de: "Zu den Managed-Infrastructure-Diensten gehören IT-Support und Help Desk, Netzwerk- und Systemadministration, Fernüberwachung sowie Hardware- und Softwaremanagement. Der Support kann auf Ihre Nutzer, Standorte und den benötigten Servicelevel zugeschnitten werden."
  },
  {
    terms: [
      "payment",
      "gateway",
      "subscription",
      "wallet",
      "financial api",
      "fintech"
    ],
    en: "We integrate payment gateways and POS payments, subscription billing, digital wallets, payment automation, and financial APIs—with attention to checkout UX, settlement, security, and target-market compliance.",
    tr: "Ödeme ağ geçitleri ve POS ödemeleri, abonelik faturalandırması, dijital cüzdanlar, ödeme otomasyonu ve finansal API'ler entegre ediyoruz—ödeme deneyimine, hesaplaşmaya, güvenliğe ve hedef pazar uyumluluğuna dikkat ederek.",
    de: "Wir integrieren Zahlungs-Gateways und POS-Zahlungen, Abo-Abrechnung, digitale Wallets, Zahlungsautomatisierung und Financial APIs – mit Blick auf Checkout-UX, Abwicklung, Sicherheit und Compliance im Zielmarkt."
  },
  {
    terms: [
      "call center",
      "voip",
      "ivr",
      "phone system",
      "unified communications"
    ],
    en: "We deliver call center, VoIP, IVR, unified communications, and business phone systems, with CRM, Voice AI, and reporting integrations to improve response time and service quality.",
    tr: "Yanıt süresini ve hizmet kalitesini artırmak için CRM, sesli yapay zeka ve raporlama entegrasyonlarıyla çağrı merkezi, VoIP, IVR, birleşik iletişim ve işletme telefon sistemleri sunuyoruz.",
    de: "Wir liefern Call-Center-, VoIP-, IVR-, Unified-Communications- und Business-Telefonlösungen mit CRM-, Voice-AI- und Reporting-Integrationen, um Reaktionszeit und Servicequalität zu verbessern."
  },
  {
    terms: [
      "iot",
      "industrial",
      "mes",
      "predictive maintenance",
      "machine monitoring",
      "robot",
      "smart home",
      "building automation",
      "energy",
      "lighting",
      "access control",
      "parking",
      "sensor",
      "firmware",
      "embedded",
      "edge",
      "device"
    ],
    en: "Our IoT capabilities span industrial automation, MES, predictive maintenance, machine monitoring, robotics, smart buildings, energy, lighting, access, and parking—plus sensor integration, firmware, embedded software, edge computing, and device management.",
    tr: "IoT yetkinliklerimiz; endüstriyel otomasyon, MES, kestirimci bakım, makine izleme, robotik ile akıllı binalar, enerji, aydınlatma, erişim ve otoparkı kapsar—ayrıca sensör entegrasyonu, ürün yazılımı, gömülü yazılım, uç bilişim ve cihaz yönetimi sunarız.",
    de: "Unsere IoT-Kompetenzen reichen von industrieller Automatisierung, MES, vorausschauender Wartung, Maschinenüberwachung und Robotik bis zu intelligenten Gebäuden, Energie, Beleuchtung, Zutritt und Parken – plus Sensorintegration, Firmware, Embedded-Software, Edge Computing und Gerätemanagement."
  },
  {
    terms: [
      "photo",
      "video",
      "animation",
      "podcast",
      "stream",
      "media production"
    ],
    en: "We provide photography, videography, product shoots, corporate videos, animation, podcast production, and live streaming—planned around a clear marketing or corporate objective.",
    tr: "Fotoğrafçılık, video prodüksiyonu, ürün çekimleri, kurumsal videolar, animasyon, podcast prodüksiyonu ve canlı yayın sunuyoruz—net bir pazarlama veya kurumsal hedef etrafında planlanmış olarak.",
    de: "Wir bieten Fotografie, Videografie, Produktaufnahmen, Unternehmensvideos, Animation, Podcast-Produktion und Live-Streaming – geplant rund um ein klares Marketing- oder Unternehmensziel."
  },
  {
    terms: [
      "training",
      "workshop",
      "upskill",
      "leadership"
    ],
    en: "We design corporate training in AI, technical and digital skills, and leadership—from focused workshops to upskilling programs. Content is tailored to participant roles, skill levels, and internal use cases.",
    tr: "Yapay zeka, teknik ve dijital beceriler ile liderlik konularında kurumsal eğitimler tasarlıyoruz—odaklı atölyelerden yetkinlik geliştirme programlarına kadar. İçerik, katılımcıların rolüne, beceri düzeyine ve şirket içi kullanım senaryolarına göre uyarlanır.",
    de: "Wir konzipieren Unternehmensschulungen in KI, technischen und digitalen Kompetenzen sowie Führung – von gezielten Workshops bis zu Upskilling-Programmen. Inhalte werden auf Rollen, Kompetenzniveaus und interne Anwendungsfälle der Teilnehmer zugeschnitten."
  },
  {
    terms: [
      "qa",
      "testing",
      "manual testing",
      "automated testing",
      "performance",
      "load",
      "uat"
    ],
    en: "QA services include manual and automated testing, performance and load testing, security testing, and UAT management—with test plans aligned to risk and critical user journeys.",
    tr: "QA hizmetleri; manuel ve otomatik test, performans ve yük testi, güvenlik testi ile UAT yönetimini kapsar—risk ve kritik kullanıcı yolculuklarına uygun test planlarıyla.",
    de: "QA-Services umfassen manuelles und automatisiertes Testen, Performance- und Lasttests, Sicherheitstests und UAT-Management – mit Testplänen, die auf Risiko und kritische Nutzerpfade abgestimmt sind."
  },
  {
    terms: [
      "localization",
      "translation",
      "multilingual",
      "cultural"
    ],
    en: "We localize websites, apps, and multilingual content, including cultural adaptation and technical translation—with attention to context, UI behavior, text direction, and terminology.",
    tr: "Web sitelerini, uygulamaları ve çok dilli içerikleri; kültürel uyarlama ve teknik çeviri dahil olmak üzere yerelleştiriyoruz—bağlama, arayüz davranışına, metin yönüne ve terminolojiye dikkat ederek.",
    de: "Wir lokalisieren Websites, Apps und mehrsprachige Inhalte, einschließlich kultureller Anpassung und technischer Übersetzung – mit Blick auf Kontext, UI-Verhalten, Textrichtung und Terminologie."
  },
  {
    terms: [
      "loyalty",
      "rewards",
      "membership",
      "referral"
    ],
    en: "We build loyalty, rewards, membership, and referral platforms with admin dashboards and POS, CRM, and app integrations—starting with program mechanics that improve retention and repeat behavior.",
    tr: "Yönetim panelleri ile POS, CRM ve uygulama entegrasyonlarına sahip sadakat, ödül, üyelik ve tavsiye platformları kuruyoruz—sadakati ve tekrar eden davranışı artıran program mekanikleriyle başlayarak.",
    de: "Wir bauen Treue-, Prämien-, Mitgliedschafts- und Empfehlungsplattformen mit Admin-Dashboards sowie POS-, CRM- und App-Integrationen – beginnend mit Programmmechaniken, die Bindung und Wiederkauf verbessern."
  },
  {
    terms: [
      "privacy",
      "e-invoice",
      "contract",
      "audit trail",
      "legal tech",
      "wcag",
      "accessibility",
      "assistive"
    ],
    en: "We provide privacy and e-invoicing compliance solutions, contract management, audit trails, accessibility audits, WCAG compliance, and assistive technology integration—mapped carefully to your system and target market.",
    tr: "Gizlilik ve e-fatura uyumluluğu çözümleri, sözleşme yönetimi, denetim izleri, erişilebilirlik denetimleri, WCAG uyumluluğu ve destekleyici teknoloji entegrasyonu sunuyoruz—sisteminize ve hedef pazarınıza dikkatle uyarlanmış olarak.",
    de: "Wir bieten Lösungen für Datenschutz- und E-Invoicing-Compliance, Vertragsmanagement, Audit-Trails, Barrierefreiheits-Audits, WCAG-Konformität und die Integration assistiver Technologien – sorgfältig auf Ihr System und Ihren Zielmarkt abgestimmt."
  },
  {
    terms: [
      "no code",
      "nocode",
      "low code",
      "low-code",
      "internal tool",
      "prototype",
      "citizen developer"
    ],
    en: "We use no-code and low-code for internal tools, workflows, and rapid prototypes where appropriate—while checking security, integration, and maintainability, with a path to custom development as you scale.",
    tr: "Uygun olduğunda dahili araçlar, iş akışları ve hızlı prototipler için no-code ve low-code kullanıyoruz—güvenlik, entegrasyon ve sürdürülebilirliği kontrol ederek, büyüdükçe özel geliştirmeye geçiş yolu sunarak.",
    de: "Wir nutzen No-Code und Low-Code für interne Tools, Workflows und schnelle Prototypen, wo es angebracht ist – dabei prüfen wir Sicherheit, Integration und Wartbarkeit, mit einem Pfad zur individuellen Entwicklung bei Bedarf."
  }
];
const LANGUAGES = ["en", "tr", "de"];
const LANGUAGE_LABELS = { en: "EN", tr: "TR", de: "DE" };
const NEXT_LANGUAGE_LABEL = { en: "Türkçe", tr: "Deutsch", de: "English" };

const PAGE_TITLES = {
  en: "ALA Core | Integrated Technology Solutions for Business",
  tr: "ALA Core | İşletmeler için Entegre Teknoloji Çözümleri",
  de: "ALA Core | Integrierte Technologielösungen für Unternehmen",
};

const LANGUAGE_CHANGE_TOAST = {
  en: "Language changed to English",
  tr: "Dil Türkçe olarak değiştirildi",
  de: "Sprache auf Deutsch geändert",
};

const OPEN_CHAT_SOLUTIONS_QUESTION = {
  en: "I need help choosing a solution for a business challenge",
  tr: "Bir iş sorunum için uygun çözümü seçmede yardıma ihtiyacım var",
  de: "Ich brauche Hilfe bei der Auswahl einer Lösung für eine geschäftliche Herausforderung",
};

const WHATSAPP_MESSAGE_TEMPLATES = {
  en: (data) =>
    `Hello ALA Core,\n\nName: ${data.get("name")}\nCompany: ${data.get("company") || "Not specified"}\nService: ${data.get("service")}\n\nProject details:\n${data.get("message")}`,
  tr: (data) =>
    `Merhaba ALA Core,\n\nAd: ${data.get("name")}\nŞirket: ${data.get("company") || "Belirtilmedi"}\nHizmet: ${data.get("service")}\n\nProje detayları:\n${data.get("message")}`,
  de: (data) =>
    `Hallo ALA Core,\n\nName: ${data.get("name")}\nUnternehmen: ${data.get("company") || "Nicht angegeben"}\nService: ${data.get("service")}\n\nProjektdetails:\n${data.get("message")}`,
};

const WHATSAPP_SENT_TOAST = {
  en: "Your message is ready in WhatsApp",
  tr: "Mesajınız WhatsApp'ta hazır",
  de: "Ihre Nachricht ist in WhatsApp bereit",
};

const TIME_LOCALES = { en: "en-US", tr: "tr-TR", de: "de-DE" };

let currentLanguage = localStorage.getItem("ala-language") || "en";
if (!LANGUAGES.includes(currentLanguage)) currentLanguage = "en";
let hasGreeted = false;
let isTyping = false;

const html = document.documentElement;
const siteHeader = document.getElementById("siteHeader");
const langToggle = document.getElementById("langToggle");
const langLabel = document.getElementById("langLabel");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const chatLauncher = document.getElementById("chatLauncher");
const chatWidget = document.getElementById("chatWidget");
const chatClose = document.getElementById("chatClose");
const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const quickReplies = document.getElementById("quickReplies");
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");

function nextLanguage(language) {
  const index = LANGUAGES.indexOf(language);
  return LANGUAGES[(index + 1) % LANGUAGES.length];
}

function applyLanguage(language) {
  currentLanguage = language;
  html.lang = language;
  html.dir = "ltr";
  document.title = (window.ALA_PAGE_TITLES && window.ALA_PAGE_TITLES[language]) || PAGE_TITLES[language];
  langLabel.textContent = LANGUAGE_LABELS[language];
  langToggle.setAttribute("aria-label", `Switch to ${NEXT_LANGUAGE_LABEL[language]}`);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) {
      element.innerHTML = translations[language][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[language][key]) {
      element.placeholder = translations[language][key];
    }
  });

  renderQuickReplies();
  localStorage.setItem("ala-language", language);
}

function toggleMenu(forceClose = false) {
  const shouldOpen = forceClose ? false : !mobileMenu.classList.contains("open");
  mobileMenu.classList.toggle("open", shouldOpen);
  menuToggle.setAttribute("aria-expanded", String(shouldOpen));
  document.body.classList.toggle("menu-open", shouldOpen);
}

function openChat(prefilledQuestion = "") {
  chatWidget.classList.add("open");
  chatWidget.setAttribute("aria-hidden", "false");
  chatLauncher.classList.add("active");
  chatLauncher.setAttribute("aria-expanded", "true");
  document.body.classList.add("chat-open");

  if (!hasGreeted) {
    addMessage(chatCopy[currentLanguage].greeting, "bot");
    renderQuickReplies();
    hasGreeted = true;
  }

  if (prefilledQuestion) {
    window.setTimeout(() => handleUserMessage(prefilledQuestion), 250);
  } else {
    window.setTimeout(() => chatInput.focus(), 300);
  }
}

function closeChat() {
  chatWidget.classList.remove("open");
  chatWidget.setAttribute("aria-hidden", "true");
  chatLauncher.classList.remove("active");
  chatLauncher.setAttribute("aria-expanded", "false");
  document.body.classList.remove("chat-open");
}

function toggleChat() {
  if (chatWidget.classList.contains("open")) {
    closeChat();
  } else {
    openChat();
  }
}

function getTime() {
  return new Intl.DateTimeFormat(TIME_LOCALES[currentLanguage] || "en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

function addMessage(text, sender) {
  const wrapper = document.createElement("div");
  wrapper.className = `chat-message ${sender}`;

  const bubble = document.createElement("div");
  bubble.className = "message-bubble";
  bubble.textContent = text;

  const time = document.createElement("span");
  time.className = "message-time";
  time.textContent = getTime();

  wrapper.append(bubble, time);
  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTypingIndicator() {
  const wrapper = document.createElement("div");
  wrapper.className = "chat-message bot typing-indicator";
  wrapper.innerHTML = '<div class="message-bubble typing-dots"><span></span><span></span><span></span></div>';
  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return wrapper;
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s+/#&.-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const LANGUAGE_CHAR_PATTERNS = {
  tr: /[çğışİÇĞİÖŞÜ]/,
  de: /[äöüßÄÖÜ]/,
};

const LANGUAGE_WORD_PATTERNS = {
  en: ["hello", "hi", "hey", "price", "pricing", "cost", "quote", "budget", "timeline", "how long", "contact", "email", "phone", "call", "help", "thanks", "thank you", "please", "project", "service", "services", "need", "want"],
  tr: ["merhaba", "selam", "fiyat", "ücret", "bütçe", "teklif", "süre", "zaman", "ne kadar", "ne zaman", "iletişim", "e-posta", "telefon", "ara", "yardım", "teşekkür", "lütfen", "proje", "hizmet", "istiyorum", "nasıl"],
  de: ["hallo", "guten tag", "preis", "kosten", "budget", "angebot", "dauer", "zeit", "wie lange", "kontakt", "email", "telefon", "anrufen", "hilfe", "danke", "bitte", "projekt", "service", "dienstleistung", "möchte", "brauche"],
};

function detectMessageLanguage(message) {
  const rawLower = message.toLowerCase();
  const normalized = normalizeText(message);
  const scores = { en: 0, tr: 0, de: 0 };

  LANGUAGES.forEach((lang) => {
    const charPattern = LANGUAGE_CHAR_PATTERNS[lang];
    if (charPattern && charPattern.test(rawLower)) {
      scores[lang] += 3;
    }
    (LANGUAGE_WORD_PATTERNS[lang] || []).forEach((word) => {
      if (normalized.includes(normalizeText(word))) {
        scores[lang] += 1;
      }
    });
  });

  let bestLang = null;
  let bestScore = 0;
  LANGUAGES.forEach((lang) => {
    if (scores[lang] > bestScore) {
      bestLang = lang;
      bestScore = scores[lang];
    }
  });

  return bestLang;
}

const GREETING_TERMS = ["hello", "hi", "hey", "merhaba", "selam", "hallo", "guten tag"];
const PRICING_TERMS = ["price", "pricing", "cost", "quote", "budget", "fiyat", "ücret", "bütçe", "teklif", "preis", "kosten", "budget", "angebot"];
const TIMELINE_TERMS = ["time", "timeline", "duration", "how long", "süre", "zaman", "ne zaman", "zeit", "dauer", "wie lange"];
const CONTACT_TERMS = ["contact", "whatsapp", "email", "phone", "call", "iletişim", "e-posta", "telefon", "ara", "kontakt", "email", "telefon", "anrufen"];

function detectResponse(message) {
  const normalized = normalizeText(message);
  const responseLanguage = currentLanguage;

  if (GREETING_TERMS.some((term) => normalized.startsWith(normalizeText(term)))) {
    return chatCopy[responseLanguage].greeting;
  }

  if (PRICING_TERMS.some((term) => normalized.includes(normalizeText(term)))) {
    return chatCopy[responseLanguage].pricing;
  }

  if (TIMELINE_TERMS.some((term) => normalized.includes(normalizeText(term)))) {
    return chatCopy[responseLanguage].timeline;
  }

  if (CONTACT_TERMS.some((term) => normalized.includes(normalizeText(term)))) {
    return chatCopy[responseLanguage].contact;
  }

  let bestMatch = null;
  let bestScore = 0;

  knowledgeBase.forEach((entry) => {
    const score = entry.terms.reduce((total, term) => {
      const normalizedTerm = normalizeText(term);
      return total + (normalized.includes(normalizedTerm) ? Math.max(1, normalizedTerm.split(" ").length) : 0);
    }, 0);

    if (score > bestScore) {
      bestMatch = entry;
      bestScore = score;
    }
  });

  return bestMatch ? bestMatch[responseLanguage] : chatCopy[responseLanguage].fallback;
}

function handleUserMessage(message) {
  const trimmed = message.trim();
  if (!trimmed || isTyping) return;

  const detectedLanguage = detectMessageLanguage(trimmed);
  if (detectedLanguage && detectedLanguage !== currentLanguage) {
    applyLanguage(detectedLanguage);
    showToast(LANGUAGE_CHANGE_TOAST[detectedLanguage]);
  }

  addMessage(trimmed, "user");
  chatInput.value = "";
  quickReplies.innerHTML = "";
  isTyping = true;

  const typing = addTypingIndicator();
  const delay = Math.min(950, 420 + trimmed.length * 8);

  window.setTimeout(() => {
    typing.remove();
    addMessage(detectResponse(trimmed), "bot");
    renderQuickReplies();
    isTyping = false;
    chatInput.focus();
  }, delay);
}

function renderQuickReplies() {
  if (!quickReplies) return;
  quickReplies.innerHTML = "";
  chatCopy[currentLanguage].quickReplies.forEach((reply) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quick-reply";
    button.textContent = reply;
    button.addEventListener("click", () => handleUserMessage(reply));
    quickReplies.appendChild(button);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

langToggle.addEventListener("click", () => {
  const next = nextLanguage(currentLanguage);
  applyLanguage(next);
  showToast(LANGUAGE_CHANGE_TOAST[next]);
});

menuToggle.addEventListener("click", () => toggleMenu());
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => toggleMenu(true)));

chatLauncher.addEventListener("click", toggleChat);
chatClose.addEventListener("click", closeChat);

const openChatHero = document.getElementById("openChatHero");
if (openChatHero) openChatHero.addEventListener("click", () => openChat());

const openChatSolutions = document.getElementById("openChatSolutions");
if (openChatSolutions) {
  openChatSolutions.addEventListener("click", () => {
    openChat(OPEN_CHAT_SOLUTIONS_QUESTION[currentLanguage]);
  });
}

const openChatFaq = document.getElementById("openChatFaq");
if (openChatFaq) openChatFaq.addEventListener("click", () => openChat());

document.querySelectorAll("[data-chat-question]").forEach((button) => {
  button.addEventListener("click", () => {
    const question =
      button.dataset[`chatQuestion${currentLanguage.charAt(0).toUpperCase()}${currentLanguage.slice(1)}`] ||
      button.dataset.chatQuestion;
    openChat(question);
  });
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  handleUserMessage(chatInput.value);
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const template = WHATSAPP_MESSAGE_TEMPLATES[currentLanguage] || WHATSAPP_MESSAGE_TEMPLATES.en;
    const message = template(data);

    const url = `https://wa.me/4917621812212?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    showToast(WHATSAPP_SENT_TOAST[currentLanguage] || WHATSAPP_SENT_TOAST.en);
  });
}

window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 30);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (chatWidget.classList.contains("open")) closeChat();
    if (mobileMenu.classList.contains("open")) toggleMenu(true);
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".desktop-nav a").forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: "-35% 0px -58%", threshold: 0 },
);

document.querySelectorAll("main section[id]").forEach((section) => navObserver.observe(section));

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
applyLanguage(currentLanguage);
