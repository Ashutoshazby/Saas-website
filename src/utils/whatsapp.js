export const WHATSAPP_NUMBER = '919235313682';
export const CALENDLY_URL = 'https://calendly.com/ashutoshtiwari-azby/30min';

export function buildWhatsAppUrl(message, phone = WHATSAPP_NUMBER) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(serviceName = 'Clan Reborn services', customMessage) {
  const message = customMessage || `Hi Clan Reborn, I'm interested in ${serviceName}`;
  const url = buildWhatsAppUrl(message);
  console.log('[analytics] whatsapp_click', { serviceName, message });
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function openCalendly(source = 'strategy_call') {
  console.log('[analytics] calendly_open', { source, url: CALENDLY_URL });
  window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
}
