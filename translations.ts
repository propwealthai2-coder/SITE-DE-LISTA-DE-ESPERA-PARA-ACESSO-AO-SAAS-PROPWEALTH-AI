
export interface TranslationKeys {
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  heroPlaceholder: string;
  heroWaitlist: string;
  heroPrivacyNote: string;
  heroSuccessTitle: string;
  heroSuccessText: string;
  // Features
  featureBadge: string;
  featureTitle: string;
  featureDesc: string;
  feat1Title: string;
  feat1Desc: string;
  feat2Title: string;
  feat2Desc: string;
  feat3Title: string;
  feat3Desc: string;
  // Testimonials
  testimonialsTitle: string;
  testimonialsDesc: string;
  t1Name: string; t1Role: string; t1Quote: string;
  t2Name: string; t2Role: string; t2Quote: string;
  t3Name: string; t3Role: string; t3Quote: string;
  // FAQ
  faqTitle: string;
  faqSubtitle: string;
  faq1Q: string; faq1A: string;
  faq2Q: string; faq2A: string;
  faq3Q: string; faq3A: string;
  faq4Q: string; faq4A: string;
  // Contact
  contactTitle: string;
  contactSubtitle: string;
  contactEmailLabel: string;
  contactPressLabel: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormSubject: string;
  contactFormMessage: string;
  contactFormSubmit: string;
  contactSuccessTitle: string;
  contactSuccessText: string;
  contactSupportTitle: string;
  contactSupportDesc: string;
  contactViewFaq: string;
  contactErrorRequired: string;
  contactErrorEmail: string;
  contactSendAnother: string;
  // Legal Common
  legalLastUpdate: string;
  legalResultsTitle: string;
  legalResultsText: string;
  legalSection1Heading: string; legalSection1Text: string;
  legalSection2Heading: string; legalSection2Text: string;
  legalSection3Heading: string; legalSection3Text: string;
  // Terms Content
  termsS1H: string; termsS1T: string;
  termsS2H: string; termsS2T: string;
  termsS3H: string; termsS3T: string;
  // Privacy Content
  privS1H: string; privS1T: string;
  privS2H: string; privS2T: string;
  privS3H: string; privS3T: string;
  // Cookies Content
  cookS1H: string; cookS1T: string;
  cookS2H: string; cookS2T: string;
  cookS3H: string; cookS3T: string;
  // Footer & Others
  spotsRemaining: string;
  vagas: string;
  footerDesc: string;
  navFeatures: string;
  navTestimonials: string;
  navFAQ: string;
  navContact: string;
  navLabel: string;
  legalLabel: string;
  legalTerms: string;
  legalPrivacy: string;
  legalCookies: string;
  cookieTitle: string;
  cookieDesc: string;
  cookieAccept: string;
  disclaimerTitle: string;
  disclaimerText: string;
  betaStatus: string;
  backBtn: string;
}

export const translations: Record<string, TranslationKeys> = {
  en: {
    heroTitle: "The elite invests with AI. While they turn $30k into $1M, will you remain a slave to spreadsheets?",
    heroSubtitle: "Access the math that the human eye cannot see. Discover invisible opportunities and transform your wealth with real intelligence.",
    heroCTA: "Guarantee Early Access",
    heroPlaceholder: "your@email.com",
    heroWaitlist: "More than 1,240 investors are waiting",
    heroPrivacyNote: "By signing up, you agree to our Privacy Policy. We promise not to spam.",
    heroSuccessTitle: "You're on the list!",
    heroSuccessText: "Check your inbox in a few moments.",
    featureBadge: "Next Generation",
    featureTitle: "Why PropWealth?",
    featureDesc: "We combine advanced language models with real-time real estate data to give you the competitive edge of large funds.",
    feat1Title: "Link Analysis Summary",
    feat1Desc: "Paste the link of any property and instantly receive a full viability and projected profitability report.",
    feat2Title: "Multimodal AI Vision",
    feat2Desc: "Our AI analyzes photos, blueprints, and market data to identify hidden defects and appreciation potential.",
    feat3Title: "Global Tax Optimization",
    feat3Desc: "Calculate international fees and taxes in seconds. Structure your wealth with maximum automated tax efficiency.",
    testimonialsTitle: "What pioneers say",
    testimonialsDesc: "Join the elite of investors who are already using AI to maximize their wealth.",
    t1Name: "Richard S.", t1Role: "Real Estate Investor", t1Quote: "PropWealth changed my perception of risk. The link analysis is surreal and saves me hours of complex spreadsheets.",
    t2Name: "Carla M.", t2Role: "Fund Manager", t2Quote: "Finally a tool that understands global tax complexity. Essential for those investing abroad.",
    t3Name: "Mark V.", t3Role: "Angel Investor", t3Quote: "The interface is clean and the AI insights are surgical. Helped me identify appreciation no one else saw.",
    faqTitle: "FAQ",
    faqSubtitle: "Everything you need to know.",
    faq1Q: "What exactly is PropWealth.ai?", faq1A: "It is an AI platform for real estate investors. We automate viability analysis and ROI projection.",
    faq2Q: "How does link analysis work?", faq2A: "We extract data from real estate portals via AI to generate appreciation summaries and hidden risks.",
    faq3Q: "Is the platform free during Beta?", faq3A: "Yes, selected users will have full free access during the testing period.",
    faq4Q: "Is my investment data secure?", faq4A: "We use bank-level encryption and strict compliance with GDPR.",
    contactTitle: "Get in Touch",
    contactSubtitle: "Our team is ready to help you transform your portfolio.",
    contactEmailLabel: "Direct Email",
    contactPressLabel: "Advisory",
    contactFormName: "Full Name",
    contactFormEmail: "Email Address",
    contactFormSubject: "Subject",
    contactFormMessage: "Your Message",
    contactFormSubmit: "Send Message",
    contactSuccessTitle: "Message Sent!",
    contactSuccessText: "We will respond within 24 hours.",
    contactSupportTitle: "Priority Support",
    contactSupportDesc: "Private Beta members receive exclusive service.",
    contactViewFaq: "View Common FAQ",
    contactErrorRequired: "This field is required",
    contactErrorEmail: "Please enter a valid email",
    contactSendAnother: "Send another message",
    legalLastUpdate: "Last update",
    legalResultsTitle: "Earnings and Results Disclaimer",
    legalResultsText: "We do not guarantee profits or loss prevention. Real estate markets are volatile. Testimonials are individual experiences.",
    legalSection1Heading: "1. Data Collection & Acceptance", legalSection1Text: "By accessing PropWealth.ai, you agree to these terms. We use tools like Meta Pixel to optimize advertising anonymously.",
    legalSection2Heading: "2. Marketing & License", legalSection2Text: "Your email may be used for marketing with consent. Materials are for personal, non-commercial use only.",
    legalSection3Heading: "3. Financial Security", legalSection3Text: "We provide data-driven analysis tools, not regulated financial advice. We maintain data secure using SSL encryption.",
    termsS1H: "1. Acceptance of Terms", termsS1T: "By accessing PropWealth.ai, you agree to be bound by these Terms of Service and all applicable laws.",
    termsS2H: "2. Use License", termsS2T: "Permission is granted to temporarily use our tools for personal, non-commercial real estate analysis.",
    termsS3H: "3. Service Limitations", termsS3T: "We provide AI insights based on public data. We are not a regulated financial institution or brokerage.",
    privS1H: "1. Data Collection", privS1T: "We collect anonymous usage data via Meta Pixel and Google Analytics to optimize our services.",
    privS2H: "2. Marketing Use", privS2T: "With your consent, we use your email for waitlist updates and occasional marketing newsletters.",
    privS3H: "3. Security", privS3T: "Your data is encrypted using SSL/TLS 1.3. We never sell your personal information to third parties.",
    cookS1H: "1. What are cookies?", cookS1T: "Small text files used to remember your preferences and improve site performance.",
    cookS2H: "2. Essential Cookies", cookS2T: "Necessary for core site functionality like security and authentication.",
    cookS3H: "3. Analytical Cookies", cookS3T: "Help us understand how users interact with the platform to improve the experience.",
    spotsRemaining: "spots remaining",
    vagas: "spots",
    footerDesc: "PropWealth.ai uses advanced AI to democratize access to high-level real estate insights.",
    navFeatures: "Features",
    navTestimonials: "Testimonials",
    navFAQ: "FAQ",
    navContact: "Contact",
    navLabel: "Navigation",
    legalLabel: "Legal",
    legalTerms: "Terms of Use",
    legalPrivacy: "Privacy",
    legalCookies: "Cookies",
    cookieTitle: "Your privacy is our priority",
    cookieDesc: "We use cookies to improve your experience. By continuing, you agree to our data collection.",
    cookieAccept: "Accept and Continue",
    disclaimerTitle: "Important Notice",
    disclaimerText: "This site is not part of Facebook or Meta Platforms, Inc. PropWealth.ai is a decision-making tool, not regulated financial advice.",
    betaStatus: "Private Beta",
    backBtn: "Back"
  },
  pt: {
    heroTitle: "A elite investe com IA. Enquanto eles transformam $30k em $1M, você continuará escravo das planilhas?",
    heroSubtitle: "Acesse a matemática que o olho humano não consegue ver. Descubra oportunidades invisíveis e transforme seu patrimônio com inteligência real.",
    heroCTA: "Garantir Acesso Antecipado",
    heroPlaceholder: "seu@email.com",
    heroWaitlist: "Mais de 1.240 investidores aguardam",
    heroPrivacyNote: "Ao se inscrever, você concorda com nossa Política de Privacidade. Prometemos não enviar spam.",
    heroSuccessTitle: "Você está na lista!",
    heroSuccessText: "Verifique sua caixa de entrada em instantes.",
    featureBadge: "A Próxima Geração",
    featureTitle: "Por que PropWealth?",
    featureDesc: "Combinamos modelos de linguagem avançados com dados imobiliários de tempo real para dar a você a vantagem competitiva dos grandes fundos.",
    feat1Title: "Resumo de Análise de Link",
    feat1Desc: "Cole o link de qualquer imóvel e receba instantaneamente um relatório completo de viabilidade e rentabilidade projetada.",
    feat2Title: "Visão de IA Multimodal",
    feat2Desc: "Nossa inteligência artificial analisa fotos, plantas e dados de mercado para identificar defeitos ocultos e potencial de valorização.",
    feat3Title: "Otimização Fiscal Global",
    feat3Desc: "Calcule taxas e impostos internacionais em segundos. Estruture seu patrimônio com máxima eficiência tributária automatizada.",
    testimonialsTitle: "O que dizem os pioneiros",
    testimonialsDesc: "Junte-se à elite dos investidores que já estão utilizando inteligência artificial para maximizar seu patrimônio.",
    t1Name: "Ricardo S.", t1Role: "Investidor Imobiliário", t1Quote: "O PropWealth mudou minha percepção de risco. A análise de link é surreal e me poupa horas de planilhas complexas.",
    t2Name: "Carla M.", t2Role: "Gestora de Fundos", t2Quote: "Finalmente uma ferramenta que entende a complexidade fiscal global. Essencial para quem investe fora do país.",
    t3Name: "Marcos V.", t3Role: "Anjo Investidor", t3Quote: "A interface é limpa e os insights de IA são cirúrgicos. Me ajudou a identificar uma valorização que ninguém viu.",
    faqTitle: "FAQ",
    faqSubtitle: "Tudo o que você precisa saber.",
    faq1Q: "O que é exatamente o PropWealth.ai?", faq1A: "É uma plataforma de inteligência artificial voltada para investidores imobiliários. Automatizamos a análise de viabilidade e projeção de ROI.",
    faq2Q: "Como funciona a análise de link?", faq2A: "Extraímos dados de portais imobiliários via IA para gerar resumos de valorização e riscos ocultos.",
    faq3Q: "A plataforma é gratuita durante o Beta?", faq3A: "Sim, os usuários selecionados terão acesso total gratuito durante o período de testes.",
    faq4Q: "Meus dados de investimento estão seguros?", faq4A: "Utilizamos criptografia de nível bancário e conformidade estrita com a LGPD/GDPR.",
    contactTitle: "Entre em Contato",
    contactSubtitle: "Nossa equipe está pronta para ajudar você a transformar seu portfólio.",
    contactEmailLabel: "E-mail Direto",
    contactPressLabel: "Assessoria",
    contactFormName: "Nome Completo",
    contactFormEmail: "Endereço de E-mail",
    contactFormSubject: "Assunto",
    contactFormMessage: "Sua Mensagem",
    contactFormSubmit: "Enviar Mensagem",
    contactSuccessTitle: "Mensagem Enviada!",
    contactSuccessText: "Responderemos em até 24 horas.",
    contactSupportTitle: "Suporte Prioritário",
    contactSupportDesc: "Membros do Beta Privado recebem atendimento exclusivo.",
    contactViewFaq: "Ver FAQ Comum",
    contactErrorRequired: "Este campo é obrigatório",
    contactErrorEmail: "Por favor, insira um e-mail válido",
    contactSendAnother: "Enviar outra mensagem",
    legalLastUpdate: "Última atualização",
    legalResultsTitle: "Aviso de Resultados e Ganhos",
    legalResultsText: "Não garantimos que você obterá lucros ou evitará perdas utilizando nossas ferramentas. O mercado imobiliário é volátil.",
    legalSection1Heading: "1. Coleta e Aceitação", legalSection1Text: "Ao acessar o PropWealth.ai, você aceita estes termos. Utilizamos Meta Pixel para otimizar campanhas anonimamente.",
    legalSection2Heading: "2. Marketing e Licença", legalSection2Text: "Seu e-mail pode ser usado para marketing com consentimento. Conteúdo apenas para uso pessoal.",
    legalSection3Heading: "3. Segurança Financeira", legalSection3Text: "Fornecemos ferramentas de análise, não consultoria regulamentada. Dados seguros com criptografia SSL.",
    termsS1H: "1. Aceitação dos Termos", termsS1T: "Ao acessar o PropWealth.ai, você concorda com estes Termos de Serviço e todas as leis aplicáveis.",
    termsS2H: "2. Licença de Uso", termsS2T: "Permissão concedida para uso temporário de nossas ferramentas para análise imobiliária pessoal.",
    termsS3H: "3. Limitações do Serviço", termsS3T: "Fornecemos insights via IA baseados em dados públicos. Não somos consultoria financeira regulamentada.",
    privS1H: "1. Coleta de Dados", privS1T: "Coletamos dados anônimos via Meta Pixel e Google Analytics para otimizar nossas campanhas.",
    privS2H: "2. Uso para Marketing", privS2T: "Com seu consentimento, usamos seu e-mail para atualizações da lista de espera e newsletters ocasionais.",
    privS3H: "3. Segurança", privS3T: "Seus dados são protegidos por criptografia SSL/TLS. Nunca vendemos informações para terceiros.",
    cookS1H: "1. O que são cookies?", cookS1T: "Pequenos arquivos de texto para lembrar suas preferências e melhorar o desempenho do site.",
    cookS2H: "2. Cookies Essenciais", cookS2T: "Necessários para funcionalidades básicas como segurança e autenticação.",
    cookS3H: "3. Cookies Analíticos", cookS3T: "Nos ajudam a entender como os usuários interagem para melhorar a experiência.",
    spotsRemaining: "vagas restantes",
    vagas: "vagas",
    footerDesc: "A PropWealth.ai utiliza inteligência artificial avançada para democratizar o acesso a insights imobiliários de alto nível.",
    navFeatures: "Funcionalidades",
    navTestimonials: "Depoimentos",
    navFAQ: "FAQ",
    navContact: "Contato",
    navLabel: "Navigation",
    legalLabel: "Legal",
    legalTerms: "Termos de Uso",
    legalPrivacy: "Privacidade",
    legalCookies: "Cookies",
    cookieTitle: "Sua privacidade é nossa prioridade",
    cookieDesc: "Utilizamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa coleta de dados.",
    cookieAccept: "Aceitar e Continuar",
    disclaimerTitle: "Aviso Importante",
    disclaimerText: "Este site não faz parte do Facebook ou Meta Platforms, Inc. PropWealth.ai é ferramenta de auxílio, não consultoria financeira.",
    betaStatus: "Beta Privado",
    backBtn: "Voltar"
  }
};
