/**
 * ============================================
 * CONTACT CONFIGURATION
 * ============================================
 *
 * Centralized configuration for all confirmed
 * AdvantEdge contact information.
 *
 * IMPORTANT:
 * Only verified contact details are included here.
 * Do not add placeholder phone numbers, addresses,
 * WhatsApp numbers, or business hours.
 *
 * Confirmed email setup:
 *
 * Primary inbox:
 * contact@advantedge-partners.com
 *
 * Dwight Jordan alias:
 * djordan@advantedge-partners.com
 *
 * Both addresses may route to the same underlying
 * mailbox depending on the final email configuration.
 *
 * ============================================
 */

export const contactConfig = {
  // ============================================
  // EMAIL
  // ============================================

  email: {
    /**
     * Main public contact inbox
     */
    primary: 'contact@advantedge-partners.com',

    /**
     * Dwight Jordan email alias
     */
    dwight: 'djordan@advantedge-partners.com',
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  //
  // Replace these URLs once the confirmed
  // AdvantEdge social profiles are available.
  //
  // Keeping empty strings prevents the website
  // from linking visitors to incorrect profiles.
  // ============================================

  social: {
    linkedin: '',
    twitter: '',
    facebook: '',
    instagram: '',
    youtube: '',
  },
} as const;


// ============================================
// TYPES
// ============================================

export type ContactEmailType =
  keyof typeof contactConfig.email;


// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Generate a mailto URL.
 *
 * Examples:
 *
 * getMailtoUrl()
 * → contact@advantedge-partners.com
 *
 * getMailtoUrl('dwight')
 * → djordan@advantedge-partners.com
 *
 * getMailtoUrl(
 *   'primary',
 *   'Marketing Consultation',
 *   'Hello, I would like to discuss...'
 * )
 */
export function getMailtoUrl(
  email: ContactEmailType = 'primary',
  subject?: string,
  body?: string
): string {
  const emailAddress = contactConfig.email[email];

  const params = new URLSearchParams();

  if (subject) {
    params.set('subject', subject);
  }

  if (body) {
    params.set('body', body);
  }

  const query = params.toString();

  return query
    ? `mailto:${emailAddress}?${query}`
    : `mailto:${emailAddress}`;
}
