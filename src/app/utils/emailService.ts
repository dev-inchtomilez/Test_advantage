/**
 * ============================================
 * EMAIL SERVICE UTILITY
 * ============================================
 * Centralized email handling for all forms
 * Sends form data to: inchtomilez@gmail.com
 * ============================================
 */

const RECIPIENT_EMAIL = 'inchtomilez@gmail.com';
const COMPANY_NAME = 'AdvantEdge';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject?: string;
  message: string;
}

interface NewsletterData {
  email: string;
}

interface ChatbotLeadData {
  name: string;
  email: string;
  purposeOfEnquiry: string;
  phone?: string;
  leadScore?: number;
}

interface ConfiguratorData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  selectedServices: string[];
  selectedAddons: string[];
  supportTier: string;
  totalInvestment: number;
}

/**
 * Formats contact form data into email body
 */
export function formatContactEmail(data: ContactFormData): string {
  const body = `
NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: ${data.name}
EMAIL: ${data.email}
${data.company ? `COMPANY: ${data.company}` : ''}
${data.phone ? `PHONE: ${data.phone}` : ''}
${data.subject ? `SUBJECT: ${data.subject}` : ''}

MESSAGE:
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted via AdvantEdge Contact Form
Time: ${new Date().toLocaleString()}
  `.trim();
  
  return body;
}

/**
 * Formats newsletter signup data
 */
export function formatNewsletterEmail(data: NewsletterData): string {
  const body = `
NEW NEWSLETTER SUBSCRIPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EMAIL: ${data.email}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted via AdvantEdge Newsletter Form
Time: ${new Date().toLocaleString()}
  `.trim();
  
  return body;
}

/**
 * Formats AI Chatbot lead data
 */
export function formatChatbotLeadEmail(data: ChatbotLeadData): string {
  const priority = (data.leadScore && data.leadScore >= 70) ? '🔥 HIGH PRIORITY' : '✅ STANDARD';
  
  const body = `
NEW AI CHATBOT LEAD - ${priority}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NAME: ${data.name}
EMAIL: ${data.email}
${data.phone ? `PHONE: ${data.phone}` : ''}
${data.leadScore ? `LEAD SCORE: ${data.leadScore}/100` : ''}

PURPOSE OF ENQUIRY:
${data.purposeOfEnquiry}

${data.leadScore && data.leadScore >= 70 ? '⚡ URGENT: This lead has high conversion potential!\n   Action Required: Contact within 4 hours' : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted via AdvantEdge AI Chatbot
Time: ${new Date().toLocaleString()}
  `.trim();
  
  return body;
}

/**
 * Formats package configurator data
 */
export function formatConfiguratorEmail(data: ConfiguratorData): string {
  const body = `
NEW PACKAGE CONFIGURATION REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CLIENT INFORMATION:
Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ''}
${data.phone ? `Phone: ${data.phone}` : ''}

SELECTED SERVICES:
${data.selectedServices.map(s => `• ${s}`).join('\n')}

SELECTED ADD-ONS:
${data.selectedAddons.length > 0 ? data.selectedAddons.map(a => `• ${a}`).join('\n') : '• None'}

SUPPORT TIER: ${data.supportTier}

TOTAL INVESTMENT: ₹${data.totalInvestment.toLocaleString('en-IN')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted via AdvantEdge Package Configurator
Time: ${new Date().toLocaleString()}
  `.trim();
  
  return body;
}

/**
 * Opens mailto link with formatted email
 */
export function sendEmail(subject: string, body: string): void {
  const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

/**
 * Submits contact form via mailto
 */
export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const subject = `${COMPANY_NAME} - Contact Form: ${data.subject || 'General Inquiry'}`;
    const body = formatContactEmail(data);
    
    // Open mailto link
    sendEmail(subject, body);
    
    return {
      success: true,
      message: 'Your message has been prepared. Please send the email from your default email client.'
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'There was an error preparing your message. Please email us directly at ' + RECIPIENT_EMAIL
    };
  }
}

/**
 * Submits newsletter signup via mailto
 */
export async function submitNewsletterSignup(data: NewsletterData): Promise<{ success: boolean; message: string }> {
  try {
    const subject = `${COMPANY_NAME} - Newsletter Subscription`;
    const body = formatNewsletterEmail(data);
    
    sendEmail(subject, body);
    
    return {
      success: true,
      message: 'Newsletter subscription prepared. Please send the email from your default email client.'
    };
  } catch (error) {
    console.error('Error submitting newsletter signup:', error);
    return {
      success: false,
      message: 'There was an error. Please email us directly at ' + RECIPIENT_EMAIL
    };
  }
}

/**
 * Submits AI Chatbot lead via mailto
 */
export async function submitChatbotLead(data: ChatbotLeadData): Promise<{ success: boolean; message: string }> {
  try {
    const priority = (data.leadScore && data.leadScore >= 70) ? 'HIGH PRIORITY' : 'New Lead';
    const subject = `${COMPANY_NAME} - ${priority}: ${data.name}`;
    const body = formatChatbotLeadEmail(data);
    
    sendEmail(subject, body);
    
    return {
      success: true,
      message: 'Lead information prepared and submitted.'
    };
  } catch (error) {
    console.error('Error submitting chatbot lead:', error);
    return {
      success: false,
      message: 'There was an error submitting the lead.'
    };
  }
}

/**
 * Submits package configurator data via mailto
 */
export async function submitConfiguratorForm(data: ConfiguratorData): Promise<{ success: boolean; message: string }> {
  try {
    const subject = `${COMPANY_NAME} - Package Configuration: ${data.name}`;
    const body = formatConfiguratorEmail(data);
    
    sendEmail(subject, body);
    
    return {
      success: true,
      message: 'Your package configuration has been prepared. Please send the email from your default email client.'
    };
  } catch (error) {
    console.error('Error submitting configurator form:', error);
    return {
      success: false,
      message: 'There was an error. Please email us directly at ' + RECIPIENT_EMAIL
    };
  }
}

/**
 * Copy email address to clipboard
 */
export async function copyEmailToClipboard(): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(RECIPIENT_EMAIL);
    return true;
  } catch (error) {
    console.error('Failed to copy email:', error);
    return false;
  }
}

export { RECIPIENT_EMAIL, COMPANY_NAME };