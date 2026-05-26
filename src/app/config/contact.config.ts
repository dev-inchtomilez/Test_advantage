/**
 * ============================================
 * CONTACT CONFIGURATION
 * ============================================
 * Centralized configuration for all contact
 * information across the website.
 * 
 * UPDATE THESE VALUES with your actual:
 * - WhatsApp number (with country code)
 * - Business email
 * - Phone numbers
 * - Social media links
 * ============================================
 */

export const contactConfig = {
  // ============================================
  // PRIMARY CONTACT
  // ============================================
  
  /**
   * WhatsApp Business Number
   * Format: Country code + number (no spaces, dashes, or + symbol)
   * Example: For +1 (234) 567-8900 → use "12345678900"
   * 
   * TODO: Replace with your actual WhatsApp number
   */
  whatsapp: {
    number: '1234567890', // ⚠️ UPDATE THIS
    displayNumber: '+1 (234) 567-8900', // For display purposes
    message: 'Hello, I would like to know more about AdvantEdge services.', // Default message
  },

  /**
   * Business Email
   * TODO: Replace with your actual business email
   */
  email: {
    primary: 'hello@onemen.in', // ⚠️ UPDATE IF NEEDED
    support: 'support@onemen.in',
    sales: 'sales@onemen.in',
  },

  /**
   * Phone Numbers
   * TODO: Replace with your actual phone numbers
   */
  phone: {
    main: '+1 (234) 567-8900', // ⚠️ UPDATE THIS
    toll_free: '1-800-ADVANTAGE',
    international: '+91 12345 67890',
  },

  // ============================================
  // BUSINESS ADDRESS
  // ============================================
  address: {
    street: '123 Business Avenue',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'United States',
    full: '123 Business Avenue, New York, NY 10001, United States',
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    linkedin: 'https://www.linkedin.com/company/advantedge',
    twitter: 'https://twitter.com/advantedge',
    facebook: 'https://www.facebook.com/advantedge',
    instagram: 'https://www.instagram.com/advantedge',
    youtube: 'https://www.youtube.com/c/advantedge',
  },

  // ============================================
  // BUSINESS HOURS
  // ============================================
  hours: {
    weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    weekend: 'Saturday - Sunday: Closed',
    timezone: 'EST (GMT-5)',
  },

  // ============================================
  // RESPONSE TIME
  // ============================================
  responseTime: {
    whatsapp: 'Usually within 30 minutes',
    email: 'Within 24 hours',
    phone: 'Immediate',
  },
} as const;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get WhatsApp URL for opening chat
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(customMessage || contactConfig.whatsapp.message);
  return `https://wa.me/${contactConfig.whatsapp.number}?text=${message}`;
}

/**
 * Get mailto link
 */
export function getMailtoUrl(
  email: keyof typeof contactConfig.email = 'primary',
  subject?: string,
  body?: string
): string {
  let url = `mailto:${contactConfig.email[email]}`;
  const params: string[] = [];
  
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  
  if (params.length > 0) {
    url += `?${params.join('&')}`;
  }
  
  return url;
}

/**
 * Get tel link
 */
export function getTelUrl(phoneType: keyof typeof contactConfig.phone = 'main'): string {
  const phone = contactConfig.phone[phoneType].replace(/[^0-9+]/g, '');
  return `tel:${phone}`;
}

/**
 * Get Google Maps URL
 */
export function getMapsUrl(): string {
  const address = encodeURIComponent(contactConfig.address.full);
  return `https://www.google.com/maps/search/?api=1&query=${address}`;
}
