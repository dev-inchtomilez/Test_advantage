import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Minimize2, Download, Sparkles } from 'lucide-react';
import { colors, gradients, glass } from '../../styles/design-tokens';
import { submitChatbotLead } from '../utils/emailService';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  intent?: string;
  options?: string[];
}

interface Lead {
  name: string;
  email: string;
  purposeOfEnquiry: string;
  phone?: string;
  conversation: Message[];
  timestamp: Date;
  leadScore: number;
}

type ChatStep = 'greeting' | 'name' | 'email' | 'purpose' | 'phone' | 'complete';

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState<ChatStep>('greeting');
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [leadData, setLeadData] = useState({ 
    name: '', 
    email: '',
    purposeOfEnquiry: '',
    phone: ''
  });
  const [leadScore, setLeadScore] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const purposeOfEnquiries = [
    '🎯 Explore Services',
    '💼 Request a Quote',
    '📅 Schedule a Consultation',
    '🤝 Partnership Inquiry',
    '❓ General Question',
    '📝 Other'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "Hi there! 👋 Welcome to AdvantEdge. I'm your marketing strategy assistant. I'll help you find the perfect solution for your business.\n\nTo get started, what's your name?",
          'greeting'
        );
        setCurrentStep('name');
      }, 500);
    }
  }, [isOpen]);

  // Auto-open chatbot after 15 seconds
  useEffect(() => {
    if (!hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasAutoOpened(true);
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [hasAutoOpened]);

  const addBotMessage = (text: string, intent?: string, options?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: 'bot',
        timestamp: new Date(),
        intent,
        options
      };
      setMessages((prev) => [...prev, newMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    processResponse(inputValue);
    setInputValue('');
  };

  const handleOptionClick = (option: string) => {
    addUserMessage(option);
    processResponse(option);
  };

  const processResponse = (response: string) => {
    if (currentStep === 'name') {
      setLeadData((prev) => ({ ...prev, name: response }));
      setTimeout(() => {
        addBotMessage(
          `Great to meet you, ${response}! 📧\n\nTo keep you updated with our services and proposals, please share your email address.`,
          'email'
        );
      }, 1500);
      setCurrentStep('email');
      
    } else if (currentStep === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(response)) {
        setTimeout(() => {
          addBotMessage(
            `That doesn't look like a valid email address. 😊 Could you please provide a valid email? (e.g., name@company.com)`,
            'email'
          );
        }, 1000);
        return;
      }
      
      setLeadData((prev) => ({ ...prev, email: response }));
      setTimeout(() => {
        addBotMessage(
          `Perfect! Thank you, ${leadData.name}. 🎯\n\nNow, what brings you to AdvantEdge today? What's the purpose of your enquiry?`,
          'purpose',
          purposeOfEnquiries
        );
      }, 1500);
      setCurrentStep('purpose');
      
    } else if (currentStep === 'purpose') {
      setLeadData((prev) => ({ ...prev, purposeOfEnquiry: response }));
      
      setTimeout(() => {
        let responseMessage = `Excellent! I understand you're here to "${response.replace(/^[🎯💼📅🤝❓📝]\s*/, '')}". 📞\n\n`;
        responseMessage += `To ensure our team can provide you with the most personalized assistance, could you share your phone number? (This is optional, but it helps us serve you better!)`;
        
        addBotMessage(responseMessage, 'phone');
      }, 1500);
      setCurrentStep('phone');
      
    } else if (currentStep === 'phone') {
      const updatedLeadData = { ...leadData, phone: response };
      setLeadData(updatedLeadData);
      
      let score = 50;
      if (leadData.purposeOfEnquiry.includes('Quote') || leadData.purposeOfEnquiry.includes('Consultation')) {
        score += 30;
      }
      if (response && response.length >= 10) {
        score += 20;
      }
      setLeadScore(score);
      
      let finalMessage = `🎉 Perfect! Thank you so much, ${leadData.name}!\n\n`;
      
      if (score >= 70) {
        finalMessage += `I've flagged your inquiry as HIGH PRIORITY based on your needs. Our senior strategist will contact you within the next 4 hours.\n\n`;
        finalMessage += `📧 Check ${leadData.email} for:\n✅ Personalized Service Overview\n✅ Case Studies Relevant to Your Industry\n✅ Free Strategy Consultation Booking Link\n\nWe're excited to help you achieve your goals!`;
      } else {
        finalMessage += `Our team will review your inquiry and reach out to you at ${leadData.email}${response ? ` and ${response}` : ''} within 24 hours.\n\n`;
        finalMessage += `In the meantime, feel free to explore our website or ask me any questions about our services!`;
      }
      
      setTimeout(() => {
        addBotMessage(finalMessage, 'complete');
        saveLead(updatedLeadData, score);
      }, 1500);
      setCurrentStep('complete');
      
    } else {
      setTimeout(() => {
        const lowerResponse = response.toLowerCase();
        
        if (lowerResponse.includes('price') || lowerResponse.includes('cost') || lowerResponse.includes('budget')) {
          addBotMessage(
            "Our pricing is customized based on your specific needs and goals. The investment typically ranges from $5k to $100k+ depending on scope. Would you like to schedule a call to discuss your specific requirements?"
          );
        } else if (lowerResponse.includes('timeline') || lowerResponse.includes('how long')) {
          addBotMessage(
            "Most projects launch within 4-12 weeks, depending on complexity. Strategy projects can start within 1 week. Want to discuss your specific timeline?"
          );
        } else if (lowerResponse.includes('case') || lowerResponse.includes('example') || lowerResponse.includes('portfolio')) {
          addBotMessage(
            "We've helped 350+ companies grow their revenue by an average of 340%! Check out our Case Studies page to see detailed results, or I can email you industry-specific examples. Which would you prefer?"
          );
        } else if (lowerResponse.includes('team') || lowerResponse.includes('who')) {
          addBotMessage(
            "Our team includes 15+ specialists: strategists, designers, developers, SEO experts, and content creators. Each project gets a dedicated team lead. Want to meet the team?"
          );
        } else {
          addBotMessage(
            "Great question! Our team will provide detailed answers during your consultation call. Is there anything specific about our services you'd like to know right now?"
          );
        }
      }, 1500);
    }
  };

  const saveLead = (data: typeof leadData, score: number) => {
    const lead: Lead = {
      ...data,
      conversation: messages,
      timestamp: new Date(),
      leadScore: score
    };

    const existingLeads = JSON.parse(localStorage.getItem('chatbot_leads') || '[]');
    existingLeads.push(lead);
    localStorage.setItem('chatbot_leads', JSON.stringify(existingLeads));
    
    if (score >= 70) {
      const priorityLeads = JSON.parse(localStorage.getItem('priority_leads') || '[]');
      priorityLeads.push(lead);
      localStorage.setItem('priority_leads', JSON.stringify(priorityLeads));
    }

    // Track lead capture (remove console.log for production)
    // console.log('Lead Captured:', lead);
    submitChatbotLead(lead);
  };

  const downloadConversation = () => {
    const transcript = messages.map(m => 
      `[${m.timestamp.toLocaleTimeString()}] ${m.sender === 'bot' ? 'Assistant' : leadData.name || 'You'}: ${m.text}`
    ).join('\n\n');
    
    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `advantedge-chat-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="chatbot-fixed-button"
          aria-label="Open chat"
        >
          <Sparkles className="w-7 h-7" />
          <span className="chatbot-indicator" />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className={`chatbot-window ${isOpen ? 'chatbot-window-open' : ''}`}>
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-gradient" />
            
            <div className="chatbot-header-content">
              <div className="chatbot-logo">
                <Sparkles className="w-5 h-5" style={{ color: colors.brand.secondary }} />
              </div>
              <div>
                <h3 className="font-bold text-white">AdvantEdge AI</h3>
                <div className="flex items-center gap-2">
                  <span className="chatbot-status-dot" />
                  <p className="text-xs text-white/90">Strategy Assistant</p>
                </div>
              </div>
            </div>
            <div className="chatbot-header-actions">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="chatbot-icon-button"
                aria-label="Minimize chat"
              >
                <Minimize2 className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="chatbot-icon-button"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="chatbot-messages">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`chatbot-message ${message.sender === 'user' ? 'chatbot-message-user' : 'chatbot-message-bot'}`}
                  >
                    <div
                      className={`chatbot-bubble ${message.sender === 'user' ? 'chatbot-bubble-user' : 'chatbot-bubble-bot'}`}
                      style={message.sender === 'user' ? { 
                        background: gradients.primary,
                        borderColor: colors.brand.secondary 
                      } : { 
                        borderColor: colors.brand.secondary + '40' 
                      }}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="chatbot-message chatbot-message-bot">
                    <div className="chatbot-bubble chatbot-bubble-bot" style={{ borderColor: colors.brand.secondary + '40' }}>
                      <div className="flex gap-1">
                        <div className="chatbot-typing-dot" style={{ backgroundColor: colors.brand.secondary, animationDelay: '0ms' }} />
                        <div className="chatbot-typing-dot" style={{ backgroundColor: colors.brand.accent, animationDelay: '150ms' }} />
                        <div className="chatbot-typing-dot" style={{ backgroundColor: colors.brand.secondary, animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Purpose Options */}
                {currentStep === 'purpose' && messages.length > 0 && !isTyping && (
                  <div className="chatbot-options">
                    {purposeOfEnquiries.map((purpose) => (
                      <button
                        key={purpose}
                        onClick={() => handleOptionClick(purpose)}
                        className="chatbot-option-button"
                      >
                        {purpose}
                      </button>
                    ))}
                  </div>
                )}

                {/* Download Button */}
                {currentStep === 'complete' && messages.length > 0 && !isTyping && (
                  <div className="chatbot-actions">
                    <button
                      onClick={downloadConversation}
                      className="chatbot-download-button"
                    >
                      <Download className="w-4 h-4" />
                      Download Conversation
                    </button>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="chatbot-input-container">
                <div className="chatbot-input-wrapper">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    className="chatbot-input"
                    style={{ 
                      borderColor: colors.brand.primary + '20',
                      color: colors.brand.primary
                    }}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="chatbot-send-button"
                    style={{ background: gradients.primary }}
                    aria-label="Send message"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="chatbot-footer">
                  <Sparkles className="w-3 h-3 inline mr-1" />
                  Powered by AdvantEdge AI • Data stored locally
                </p>
              </div>
            </>
          )}
        </div>
      )}

      <style>{`
        /* Fixed Button */
        .chatbot-fixed-button {
          position: fixed !important;
          bottom: 24px;
          right: 24px;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          box-shadow: 0 10px 40px rgba(0, 0, 170, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          z-index: 999997;
          background: ${gradients.primary};
          border: 2px solid ${colors.brand.secondary};
          transition: box-shadow 0.3s ease;
          /* NO transform here - breaks position:fixed in some browsers */
          will-change: auto;
        }
        
        .chatbot-fixed-button:hover {
          box-shadow: 0 15px 50px rgba(0, 0, 170, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2);
        }
        
        .chatbot-indicator {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 12px;
          height: 12px;
          background: ${colors.brand.accent};
          border-radius: 50%;
          border: 2px solid white;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        /* Chatbot Window */
        .chatbot-window {
          position: fixed !important;
          bottom: 24px;
          right: 24px;
          width: 384px;
          max-width: calc(100vw - 48px);
          height: 600px;
          max-height: calc(100vh - 48px);
          border-radius: 16px;
          box-shadow: 0 25px 80px rgba(0, 0, 170, 0.25), 0 0 0 1px rgba(0, 0, 170, 0.1);
          border: 2px solid ${colors.brand.secondary};
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 999997;
          background: ${glass.base.background};
          backdrop-filter: ${glass.base.backdropFilter};
          /* NO transform here - breaks position:fixed */
          will-change: auto;
          animation: slideIn 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .chatbot-header {
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          border-bottom: 2px solid ${colors.brand.secondary};
        }
        
        .chatbot-header-gradient {
          position: absolute;
          inset: 0;
          opacity: 0.9;
          background: ${gradients.primary};
        }
        
        .chatbot-header-content {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 10;
        }
        
        .chatbot-logo {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 2px solid ${colors.brand.accent};
        }
        
        .chatbot-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${colors.brand.accent};
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .chatbot-header-actions {
          display: flex;
          gap: 8px;
          position: relative;
          z-index: 10;
        }
        
        .chatbot-icon-button {
          padding: 8px;
          border-radius: 8px;
          transition: background 0.2s ease;
          cursor: pointer;
          border: none;
          background: transparent;
        }
        
        .chatbot-icon-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .chatbot-messages {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: #f9fafb;
        }
        
        .chatbot-message {
          display: flex;
          width: 100%;
          max-width: 100%;
        }
        
        .chatbot-message-user {
          justify-content: flex-end;
        }
        
        .chatbot-message-bot {
          justify-content: flex-start;
        }
        
        .chatbot-bubble {
          max-width: 75%;
          min-width: 0;
          padding: 12px 16px;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          border: 2px solid;
          overflow: hidden;
          word-wrap: break-word;
          overflow-wrap: break-word;
          word-break: break-word;
          hyphens: auto;
          display: inline-block;
        }
        
        .chatbot-bubble p {
          margin: 0;
          word-wrap: break-word;
          overflow-wrap: break-word;
          max-width: 100%;
        }
        
        .chatbot-bubble-user {
          color: white;
          border-bottom-right-radius: 4px;
        }
        
        .chatbot-bubble-bot {
          color: #1f2937;
          background: white;
          border-bottom-left-radius: 4px;
        }
        
        .chatbot-typing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }
        
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        
        .chatbot-options {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .chatbot-option-button {
          padding: 8px 16px;
          background: white;
          border: 1px solid #d1d5db;
          color: #1f2937;
          font-size: 14px;
          border-radius: 9999px;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }
        
        .chatbot-option-button:hover {
          background: #1a1a1a;
          color: white;
          border-color: #1a1a1a;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }
        
        .chatbot-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 16px;
        }
        
        .chatbot-download-button {
          padding: 12px 16px;
          background: white;
          border: 1px solid #d1d5db;
          color: #1f2937;
          border-radius: 12px;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .chatbot-download-button:hover {
          background: #1a1a1a;
          color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }
        
        .chatbot-input-container {
          padding: 16px;
          border-top: 2px solid ${colors.brand.secondary}40;
          background: white;
        }
        
        .chatbot-input-wrapper {
          display: flex;
          gap: 8px;
        }
        
        .chatbot-input {
          flex: 1;
          background: #f9fafb;
          padding: 12px 16px;
          border-radius: 12px;
          border: 2px solid;
          outline: none;
          transition: all 0.2s ease;
        }
        
        .chatbot-input:focus {
          ring: 2px;
          border-color: ${colors.brand.secondary};
        }
        
        .chatbot-send-button {
          padding: 12px 16px;
          color: white;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .chatbot-send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .chatbot-send-button:not(:disabled):hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transform: scale(1.05);
        }
        
        .chatbot-send-button:not(:disabled):active {
          transform: scale(0.95);
        }
        
        .chatbot-footer {
          font-size: 12px;
          margin-top: 12px;
          text-align: center;
          color: ${colors.brand.primary}80;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
}