import {
  BarChart3,
  Blocks,
  Bot,
  CheckCircle2,
  Code2,
  Compass,
  Globe2,
  Megaphone,
  MessageCircle,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react';

export const services = [
  {
    id: 'web-development-hosting',
    title: 'Web Development + Hosting',
    short: 'Conversion-focused websites with managed hosting, analytics, and launch support.',
    description:
      'We build fast, responsive websites for businesses that need a premium online presence without technical stress. Hosting, domain setup, SEO basics, and launch support are handled end to end.',
    price: 'Starts from ₹7,999',
    badge: '99.9% uptime',
    icon: Code2,
    accent: 'cyan',
    features: ['Premium landing page or website', 'Managed hosting setup', 'Responsive UI', 'Basic SEO pass', 'Performance report'],
    whatsappText: "Hi Clan Reborn, I'm interested in Web Development + Hosting",
  },
  {
    id: 'android-app-development',
    title: 'Android App Development',
    short: 'Native-ready Android apps built for bookings, leads, dashboards, and operations.',
    description:
      'From MVP planning to Android app delivery, we create clean mobile experiences for businesses that need booking, lead capture, catalog, or internal workflow apps.',
    price: 'Starts from ₹14,999',
    badge: 'Native-ready',
    icon: Bot,
    accent: 'green',
    features: ['Android app UI and flow', 'Firebase-ready structure', 'API integration planning', 'Admin workflow support', 'Play Store guidance'],
    whatsappText: 'Hi Clan Reborn, I want details about Android App Development',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    short: 'Search, paid campaigns, funnels, and analytics that turn attention into leads.',
    description:
      'We plan and execute lean marketing systems around your offer: landing pages, campaigns, tracking, and content angles that help your business get measurable inquiries.',
    price: 'Starts from ₹9,999',
    badge: '3.4x ROAS avg',
    icon: Megaphone,
    accent: 'purple',
    features: ['Campaign planning', 'Landing page funnel', 'Keyword and audience research', 'Tracking setup', 'Weekly improvement actions'],
    whatsappText: 'Hi Clan Reborn, I need Digital Marketing services',
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    short: 'Content systems, post design, and monthly execution for a sharper brand presence.',
    description:
      'We create a clear social media rhythm for your brand with content calendars, creative direction, post design, and reporting focused on trust and lead generation.',
    price: 'Starts from ₹6,999',
    badge: '30-day sprints',
    icon: Users,
    accent: 'rose',
    features: ['Monthly content calendar', 'Post and reel concepts', 'Creative design direction', 'Caption writing', 'Growth report'],
    whatsappText: "Hi Clan Reborn, I'm interested in Social Media Management",
  },
];

export const features = [
  { title: 'Lightning Fast Deployment', text: 'Launch-ready builds with clean hosting, SSL, and performance checks.', icon: Rocket },
  { title: 'SEO Optimized', text: 'Structured pages, metadata, and content foundations that help discovery.', icon: Search },
  { title: 'Scalable Infrastructure', text: 'A setup that can grow from a landing page to a full business platform.', icon: Server },
  { title: 'Advanced Analytics', text: 'Lead tracking and reporting so every campaign has a feedback loop.', icon: BarChart3 },
];

export const processSteps = [
  { title: 'Requirement Discussion', text: 'We map your offer, audience, goals, and launch constraints.', icon: MessageCircle },
  { title: 'Planning & Strategy', text: 'You get a lean scope, timeline, page flow, and conversion plan.', icon: Compass },
  { title: 'Development', text: 'We build the site, app, funnel, or campaign with progress checkpoints.', icon: Blocks },
  { title: 'Launch & Support', text: 'We ship, test, connect analytics, and support improvements after launch.', icon: ShieldCheck },
];

export const trustMetrics = [
  { label: 'Trusted Clients', value: 25, suffix: '+' },
  { label: 'Projects Delivered', value: 40, suffix: '+' },
  { label: 'Success Rate', value: 98, suffix: '%' },
];

export const pricingPlans = [
  {
    name: 'Starter',
    price: '₹7,999',
    note: 'Best for new brands launching cleanly.',
    features: ['1 premium landing page', 'Managed hosting setup', 'Basic SEO pass', 'Mobile responsive', 'WhatsApp lead button'],
  },
  {
    name: 'Pro',
    price: '₹19,999',
    note: 'Best for growing teams that need a full digital engine.',
    popular: true,
    features: ['Multi-page website', 'Conversion optimization', 'Marketing campaign setup', 'Social calendar support', 'Analytics dashboard'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    note: 'For scale-ups needing strategy, systems, and execution.',
    features: ['Custom SaaS or web app', 'Advanced analytics stack', 'Dedicated growth roadmap', 'Priority support', 'Automation planning'],
  },
];

export const workScopes = [
  {
    title: 'Website Launch Scope',
    timeline: '5-10 days',
    budget: 'Starts from ₹7,999',
    deliverables: ['Landing page or multi-page website', 'Hosting and SSL setup', 'Contact and WhatsApp lead flow', 'Basic SEO and speed pass'],
  },
  {
    title: 'Android App Scope',
    timeline: '2-4 weeks',
    budget: 'Starts from ₹14,999',
    deliverables: ['App screens and user flow', 'Login or lead capture setup', 'Firebase/API-ready structure', 'Testing and release guidance'],
  },
  {
    title: 'Marketing Scope',
    timeline: '7-14 days',
    budget: 'Starts from ₹9,999',
    deliverables: ['Campaign plan', 'Landing page recommendations', 'Ad/content angles', 'Tracking and improvement report'],
  },
];

export const sampleBuilds = [
  {
    title: 'Restaurant Website',
    category: 'Local Business',
    timeline: '7 days',
    budget: '₹7,999-₹14,999',
    description: 'Menu-first website with WhatsApp orders, maps, gallery, and launch-ready hosting.',
  },
  {
    title: 'Coaching Landing Page',
    category: 'Lead Generation',
    timeline: '5 days',
    budget: '₹7,999-₹12,999',
    description: 'Offer-focused landing page with inquiry form, proof blocks, FAQ, and call booking CTA.',
  },
  {
    title: 'Android Booking App',
    category: 'Mobile MVP',
    timeline: '3 weeks',
    budget: '₹24,999+',
    description: 'Simple booking flow with customer details, service selection, and admin-ready structure.',
  },
];

export const faqs = [
  {
    question: 'How long does development take?',
    answer: 'A focused landing page usually takes 5-10 days. Multi-page websites and Android apps depend on scope, but we define a clear timeline before work starts.',
  },
  {
    question: 'Do you provide hosting?',
    answer: 'Yes. We can set up hosting, SSL, deployment, domain connection, and basic maintenance so your website is launch-ready.',
  },
  {
    question: 'Do you offer support after launch?',
    answer: 'Yes. Every launch includes support for fixes and handover. Ongoing support can be added for updates, campaigns, and performance improvements.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern React-based frontends, reliable hosting platforms, analytics tools, and Android/Firebase-ready stacks depending on the project.',
  },
  {
    question: 'Can I request custom features?',
    answer: 'Yes. Booking flows, dashboards, payment links, WhatsApp automations, admin panels, and custom integrations can be scoped after the strategy call.',
  },
  {
    question: 'Can you work with businesses outside India?',
    answer: 'Yes. Clan Reborn is based in India and serves businesses worldwide through online strategy, delivery, and support workflows.',
  },
];

export const contactOptions = [
  { label: 'WhatsApp Us', value: '+91 92353 13682', href: null, icon: MessageCircle },
  { label: 'Email Us', value: 'ashutoshtiwari.azby@gmail.com', href: 'mailto:ashutoshtiwari.azby@gmail.com', icon: Globe2 },
  { label: 'Instagram', value: '@clanreborn', href: 'https://instagram.com/', icon: Sparkles },
];

export const audience = [
  'Local businesses that need more direct inquiries',
  'Coaches, creators, and consultants launching an offer',
  'Startups validating a SaaS, app, or service idea',
  'Service providers who want a sharper premium presence',
];

export const checklistIcon = CheckCircle2;
