import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  X,
  Send,
  Minimize2,
  Maximize2,
  Download,
  Sparkles,
  Check,
} from 'lucide-react';

import {
  colors,
  gradients,
} from '../../styles/design-tokens';

import { submitChatbotLead } from '../utils/emailService';

/* ============================================
   TYPES
   ============================================ */

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

type ChatStep =
  | 'greeting'
  | 'name'
  | 'email'
  | 'purpose'
  | 'phone'
  | 'complete';

/* ============================================
   HELPERS
   ============================================ */

const createId = () => {
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.randomUUID === 'function'
  ) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
};

const safeParseArray = <T,>(
  value: string | null,
): T[] => {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

/* ============================================
   COMPONENT
   ============================================ */

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [isMinimized, setIsMinimized] =
    useState(false);

  const [messages, setMessages] = useState<
    Message[]
  >([]);

  const [inputValue, setInputValue] =
    useState('');

  const [isTyping, setIsTyping] =
    useState(false);

  const [currentStep, setCurrentStep] =
    useState<ChatStep>('greeting');

  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    purposeOfEnquiry: '',
    phone: '',
  });

  const [leadScore, setLeadScore] =
    useState(0);

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  const purposeOfEnquiries = [
    '🎯 Explore Services',
    '💼 Request a Quote',
    '📅 Schedule a Consultation',
    '🤝 Partnership Inquiry',
    '❓ General Question',
    '📝 Other',
  ];

  /* ============================================
     SCROLL
     ============================================ */

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [
    messages,
    isTyping,
    isOpen,
    isMinimized,
  ]);

  /* ============================================
     INITIAL GREETING

     IMPORTANT:
     No auto-popup timer.
     Chat opens ONLY when visitor clicks button.
     ============================================ */

  useEffect(() => {
    if (
      !isOpen ||
      messages.length > 0
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      const greeting: Message = {
        id: createId(),
        text:
          "Hi there! 👋 Welcome to AdvantEdge. I'm your marketing strategy assistant.\n\nI'll help you find the right solution for your business.\n\nTo get started, what's your name?",
        sender: 'bot',
        timestamp: new Date(),
        intent: 'greeting',
      };

      setMessages([greeting]);
      setCurrentStep('name');
    }, 350);

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    isOpen,
    messages.length,
  ]);

  /* ============================================
     BOT MESSAGE
     ============================================ */

  const addBotMessage = (
    text: string,
    intent?: string,
    options?: string[],
    delay = 700,
  ) => {
    setIsTyping(true);

    window.setTimeout(() => {
      const newMessage: Message = {
        id: createId(),
        text,
        sender: 'bot',
        timestamp: new Date(),
        intent,
        options,
      };

      setMessages((prev) => [
        ...prev,
        newMessage,
      ]);

      setIsTyping(false);
    }, delay);
  };

  /* ============================================
     USER MESSAGE
     ============================================ */

  const addUserMessage = (
    text: string,
  ) => {
    const newMessage: Message = {
      id: createId(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [
      ...prev,
      newMessage,
    ]);
  };

  /* ============================================
     LEAD SAVE
     ============================================ */

  const saveLead = (
    data: typeof leadData,
    score: number,
    conversation: Message[],
  ) => {
    const lead: Lead = {
      ...data,
      conversation,
      timestamp: new Date(),
      leadScore: score,
    };

    try {
      const existingLeads =
        safeParseArray<Lead>(
          localStorage.getItem(
            'chatbot_leads',
          ),
        );

      existingLeads.push(lead);

      localStorage.setItem(
        'chatbot_leads',
        JSON.stringify(existingLeads),
      );

      if (score >= 70) {
        const priorityLeads =
          safeParseArray<Lead>(
            localStorage.getItem(
              'priority_leads',
            ),
          );

        priorityLeads.push(lead);

        localStorage.setItem(
          'priority_leads',
          JSON.stringify(
            priorityLeads,
          ),
        );
      }
    } catch {
      // Local storage failure should not
      // prevent lead submission.
    }

    Promise.resolve(
      submitChatbotLead(lead),
    ).catch(() => {
      // Keep chatbot usable even if
      // email submission temporarily fails.
    });
  };

  /* ============================================
     COMPLETE LEAD
     ============================================ */

  const completeLead = (
    data: typeof leadData,
    score: number,
    finalText: string,
  ) => {
    setIsTyping(true);

    window.setTimeout(() => {
      const finalMessage: Message = {
        id: createId(),
        text: finalText,
        sender: 'bot',
        timestamp: new Date(),
        intent: 'complete',
      };

      setMessages((prev) => {
        const completeConversation = [
          ...prev,
          finalMessage,
        ];

        saveLead(
          data,
          score,
          completeConversation,
        );

        return completeConversation;
      });

      setIsTyping(false);
    }, 800);
  };

  /* ============================================
     PROCESS RESPONSE
     ============================================ */

  const processResponse = (
    rawResponse: string,
  ) => {
    const response =
      rawResponse.trim();

    if (currentStep === 'name') {
      if (response.length < 2) {
        addBotMessage(
          'Could you please share your name so I know how to address you?',
          'name',
        );

        return;
      }

      setLeadData((prev) => ({
        ...prev,
        name: response,
      }));

      setCurrentStep('email');

      addBotMessage(
        `Great to meet you, ${response}! 📧\n\nTo keep you updated with relevant services and proposals, please share your email address.`,
        'email',
      );

      return;
    }

    /* ============================================
       EMAIL
       ============================================ */

    if (currentStep === 'email') {
      const normalizedEmail =
        response.toLowerCase();

      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        !emailRegex.test(
          normalizedEmail,
        )
      ) {
        addBotMessage(
          "That doesn't look like a valid email address. 😊\n\nPlease enter an email such as name@company.com.",
          'email',
        );

        return;
      }

      setLeadData((prev) => ({
        ...prev,
        email: normalizedEmail,
      }));

      setCurrentStep('purpose');

      addBotMessage(
        `Perfect, ${leadData.name}. 🎯\n\nWhat brings you to AdvantEdge today?`,
        'purpose',
        purposeOfEnquiries,
      );

      return;
    }

    /* ============================================
       PURPOSE
       ============================================ */

    if (currentStep === 'purpose') {
      setLeadData((prev) => ({
        ...prev,
        purposeOfEnquiry: response,
      }));

      setCurrentStep('phone');

      const cleanPurpose =
        response.replace(
          /^[🎯💼📅🤝❓📝]\s*/,
          '',
        );

      addBotMessage(
        `Thanks — I understand you're interested in "${cleanPurpose}". 📞\n\nWould you like to share your phone number?\n\nIt's optional, but it helps our team contact you faster.`,
        'phone',
      );

      return;
    }

    /* ============================================
       PHONE / SKIP
       ============================================ */

    if (currentStep === 'phone') {
      const isSkipping =
        response.toLowerCase() ===
          'skip for now' ||
        response.toLowerCase() ===
          'skip' ||
        response.toLowerCase() ===
          'no';

      const phone = isSkipping
        ? ''
        : response;

      const updatedLeadData = {
        ...leadData,
        phone,
      };

      setLeadData(
        updatedLeadData,
      );

      let score = 50;

      if (
        leadData.purposeOfEnquiry.includes(
          'Quote',
        ) ||
        leadData.purposeOfEnquiry.includes(
          'Consultation',
        )
      ) {
        score += 30;
      }

      if (
        phone &&
        phone.replace(/\D/g, '')
          .length >= 10
      ) {
        score += 20;
      }

      setLeadScore(score);
      setCurrentStep('complete');

      let finalMessage =
        `🎉 Thank you, ${leadData.name}!\n\n`;

      if (score >= 70) {
        finalMessage +=
          `I've marked your enquiry as high priority based on your requirements.\n\n`;

        finalMessage +=
          `Our team will review the details and connect with you using the information you've provided.\n\n`;

        finalMessage +=
          `📧 We'll use ${leadData.email} for follow-up communication.`;
      } else {
        finalMessage +=
          `Your enquiry has been captured successfully.\n\n`;

        finalMessage +=
          `Our team will review your requirements and reach out at ${leadData.email}`;

        if (phone) {
          finalMessage +=
            ` or ${phone}`;
        }

        finalMessage += '.';
      }

      completeLead(
        updatedLeadData,
        score,
        finalMessage,
      );

      return;
    }

    /* ============================================
       AFTER LEAD CAPTURE
       SIMPLE FAQ ASSISTANT
       ============================================ */

    const lowerResponse =
      response.toLowerCase();

    if (
      lowerResponse.includes(
        'price',
      ) ||
      lowerResponse.includes(
        'cost',
      ) ||
      lowerResponse.includes(
        'budget',
      )
    ) {
      addBotMessage(
        'Our pricing depends on the scope, services, complexity, and level of implementation required. Our team can recommend the right engagement after understanding your objectives.',
      );

      return;
    }

    if (
      lowerResponse.includes(
        'timeline',
      ) ||
      lowerResponse.includes(
        'how long',
      )
    ) {
      addBotMessage(
        'Timelines depend on the scope of work. Strategy-focused engagements can begin quickly, while larger integrated implementations may require multiple phases.',
      );

      return;
    }

    if (
      lowerResponse.includes(
        'case',
      ) ||
      lowerResponse.includes(
        'example',
      ) ||
      lowerResponse.includes(
        'portfolio',
      )
    ) {
      addBotMessage(
        'We can share relevant case studies and examples based on your industry and objectives. Our team can recommend the most relevant examples during your consultation.',
      );

      return;
    }

    if (
      lowerResponse.includes(
        'team',
      ) ||
      lowerResponse.includes(
        'who',
      )
    ) {
      addBotMessage(
        'AdvantEdge combines strategy, marketing, communications, digital execution, analytics, CRM, automation, and AI capabilities to support business growth.',
      );

      return;
    }

    addBotMessage(
      "Thanks for your question. Our team can provide a detailed recommendation based on your business goals and requirements.\n\nYou can continue asking me questions here.",
    );
  };

  /* ============================================
     SEND
     ============================================ */

  const handleSend = () => {
    const cleanValue =
      inputValue.trim();

    if (
      !cleanValue ||
      isTyping
    ) {
      return;
    }

    addUserMessage(cleanValue);
    processResponse(cleanValue);

    setInputValue('');
  };

  /* ============================================
     OPTION CLICK
     ============================================ */

  const handleOptionClick = (
    option: string,
  ) => {
    if (isTyping) return;

    addUserMessage(option);
    processResponse(option);
  };

  /* ============================================
     DOWNLOAD CONVERSATION
     ============================================ */

  const downloadConversation =
    () => {
      const transcript = messages
        .map(
          (message) =>
            `[${message.timestamp.toLocaleTimeString()}] ${
              message.sender ===
              'bot'
                ? 'AdvantEdge AI'
                : leadData.name ||
                  'You'
            }: ${message.text}`,
        )
        .join('\n\n');

      const blob = new Blob(
        [transcript],
        {
          type: 'text/plain',
        },
      );

      const url =
        URL.createObjectURL(blob);

      const anchor =
        document.createElement('a');

      anchor.href = url;

      anchor.download =
        `advantedge-chat-${new Date()
          .toISOString()
          .split('T')[0]}.txt`;

      document.body.appendChild(
        anchor,
      );

      anchor.click();
      anchor.remove();

      URL.revokeObjectURL(url);
    };

  /* ============================================
     CLOSE
     ============================================ */

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  /* ============================================
     PLACEHOLDER
     ============================================ */

  const getPlaceholder = () => {
    if (isTyping) {
      return 'AdvantEdge AI is typing...';
    }

    if (
      currentStep === 'name'
    ) {
      return 'Enter your name...';
    }

    if (
      currentStep === 'email'
    ) {
      return 'Enter your email...';
    }

    if (
      currentStep === 'phone'
    ) {
      return 'Enter phone number...';
    }

    return 'Type your message...';
  };

  /* ============================================
     UI
     ============================================ */

  return (
    <>
      {/* ============================================
          FLOATING CHAT BUTTON
          ============================================ */}

      {!isOpen && (
        <button
          type="button"
          onClick={() =>
            setIsOpen(true)
          }
          className="ae-chat-launcher"
          aria-label="Open AdvantEdge AI assistant"
          title="Chat with AdvantEdge AI"
        >
          <div className="ae-chat-launcher-glow" />

          <Sparkles className="relative z-10 h-5 w-5" />

          <span className="ae-chat-online-indicator" />

          <span className="sr-only">
            Open AI assistant
          </span>
        </button>
      )}

      {/* ============================================
          CHATBOT
          ============================================ */}

      {isOpen && (
        <section
          className={[
            'ae-chat-window',
            isMinimized
              ? 'ae-chat-window-minimized'
              : '',
          ].join(' ')}
          role="dialog"
          aria-label="AdvantEdge AI Strategy Assistant"
          aria-live="polite"
        >
          {/* ============================================
              HEADER
              ============================================ */}

          <header className="ae-chat-header">
            <div className="ae-chat-header-glow" />

            <div className="ae-chat-header-inner">
              <div className="ae-chat-brand">
                <div className="ae-chat-brand-icon">
                  <Sparkles className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate text-[13px] font-bold tracking-[-0.01em] text-white">
                      AdvantEdge AI
                    </h3>

                    <span className="ae-chat-ai-badge">
                      AI
                    </span>
                  </div>

                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span className="ae-chat-status-dot" />

                    <p className="text-[9px] font-medium text-white/55">
                      Strategy Assistant
                    </p>
                  </div>
                </div>
              </div>

              <div className="ae-chat-header-actions">
                <button
                  type="button"
                  onClick={() =>
                    setIsMinimized(
                      (prev) => !prev,
                    )
                  }
                  className="ae-chat-header-button"
                  aria-label={
                    isMinimized
                      ? 'Restore chat'
                      : 'Minimize chat'
                  }
                  title={
                    isMinimized
                      ? 'Restore'
                      : 'Minimize'
                  }
                >
                  {isMinimized ? (
                    <Maximize2 className="h-4 w-4" />
                  ) : (
                    <Minimize2 className="h-4 w-4" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="ae-chat-header-button"
                  aria-label="Close chat"
                  title="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </header>

          {/* ============================================
              BODY
              ============================================ */}

          {!isMinimized && (
            <>
              {/* ============================================
                  MESSAGES
                  ============================================ */}

              <div className="ae-chat-messages">
                {/* intro system status */}

                <div className="ae-chat-system-line">
                  <span className="ae-chat-system-line-bar" />

                  <span>
                    AdvantEdge Growth
                    Intelligence
                  </span>

                  <span className="ae-chat-system-line-bar" />
                </div>

                {messages.map(
                  (message) => (
                    <div
                      key={message.id}
                      className={[
                        'ae-chat-message',
                        message.sender ===
                        'user'
                          ? 'ae-chat-message-user'
                          : 'ae-chat-message-bot',
                      ].join(' ')}
                    >
                      {message.sender ===
                        'bot' && (
                        <div className="ae-chat-mini-avatar">
                          <Sparkles className="h-3 w-3" />
                        </div>
                      )}

                      <div
                        className={[
                          'ae-chat-bubble',
                          message.sender ===
                          'user'
                            ? 'ae-chat-bubble-user'
                            : 'ae-chat-bubble-bot',
                        ].join(' ')}
                      >
                        <p className="whitespace-pre-line">
                          {message.text}
                        </p>

                        <span className="ae-chat-time">
                          {message.timestamp.toLocaleTimeString(
                            [],
                            {
                              hour: '2-digit',
                              minute:
                                '2-digit',
                            },
                          )}
                        </span>
                      </div>
                    </div>
                  ),
                )}

                {/* ============================================
                    TYPING
                    ============================================ */}

                {isTyping && (
                  <div className="ae-chat-message ae-chat-message-bot">
                    <div className="ae-chat-mini-avatar">
                      <Sparkles className="h-3 w-3" />
                    </div>

                    <div className="ae-chat-typing">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                )}

                {/* ============================================
                    PURPOSE OPTIONS
                    ============================================ */}

                {currentStep ===
                  'purpose' &&
                  messages.length >
                    0 &&
                  !isTyping && (
                    <div className="ae-chat-options">
                      {purposeOfEnquiries.map(
                        (purpose) => (
                          <button
                            type="button"
                            key={
                              purpose
                            }
                            onClick={() =>
                              handleOptionClick(
                                purpose,
                              )
                            }
                            className="ae-chat-option"
                          >
                            {purpose}
                          </button>
                        ),
                      )}
                    </div>
                  )}

                {/* ============================================
                    PHONE SKIP
                    ============================================ */}

                {currentStep ===
                  'phone' &&
                  !isTyping && (
                    <div className="ae-chat-phone-skip">
                      <button
                        type="button"
                        onClick={() =>
                          handleOptionClick(
                            'Skip for now',
                          )
                        }
                      >
                        Skip for now
                      </button>
                    </div>
                  )}

                {/* ============================================
                    COMPLETE
                    ============================================ */}

                {currentStep ===
                  'complete' &&
                  messages.length >
                    0 &&
                  !isTyping && (
                    <div className="ae-chat-complete">
                      <div className="ae-chat-complete-status">
                        <div className="ae-chat-check">
                          <Check className="h-3 w-3" />
                        </div>

                        <div>
                          <p className="text-[10px] font-bold text-[#000131]">
                            Enquiry
                            captured
                          </p>

                          <p className="mt-0.5 text-[9px] text-gray-500">
                            Lead score:{' '}
                            {leadScore}/100
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={
                          downloadConversation
                        }
                        className="ae-chat-download"
                      >
                        <Download className="h-3.5 w-3.5" />

                        Save transcript
                      </button>
                    </div>
                  )}

                <div
                  ref={
                    messagesEndRef
                  }
                />
              </div>

              {/* ============================================
                  INPUT
                  ============================================ */}

              <div className="ae-chat-input-section">
                <div className="ae-chat-input-wrapper">
                  <input
                    type={
                      currentStep ===
                      'email'
                        ? 'email'
                        : currentStep ===
                            'phone'
                          ? 'tel'
                          : 'text'
                    }
                    value={inputValue}
                    onChange={(event) =>
                      setInputValue(
                        event.target.value,
                      )
                    }
                    onKeyDown={(
                      event,
                    ) => {
                      if (
                        event.key ===
                          'Enter' &&
                        !event.shiftKey
                      ) {
                        event.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder={getPlaceholder()}
                    className="ae-chat-input"
                    autoComplete={
                      currentStep ===
                      'email'
                        ? 'email'
                        : currentStep ===
                            'phone'
                          ? 'tel'
                          : currentStep ===
                              'name'
                            ? 'name'
                            : 'off'
                    }
                    disabled={isTyping}
                  />

                  <button
                    type="button"
                    onClick={handleSend}
                    disabled={
                      !inputValue.trim() ||
                      isTyping
                    }
                    className="ae-chat-send"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>

                <div className="ae-chat-footer">
                  <span className="ae-chat-footer-dot" />

                  <span>
                    Powered by
                    AdvantEdge AI
                  </span>

                  <span className="ae-chat-footer-divider">
                    •
                  </span>

                  <span>
                    Secure enquiry
                    capture
                  </span>
                </div>
              </div>
            </>
          )}
        </section>
      )}

      {/* ============================================
          COMPONENT CSS
          ============================================ */}

      <style>{`
        /* ==========================================
           LAUNCH BUTTON
           ========================================== */

        .ae-chat-launcher {
          position: fixed !important;
          right: 20px;
          bottom: 20px;

          width: 54px;
          height: 54px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.20);

          color: #ffffff;

          background:
            linear-gradient(
              145deg,
              #000131 0%,
              #0000aa 72%,
              #1426c6 100%
            );

          box-shadow:
            0 18px 45px rgba(0,0,80,0.30),
            inset 0 1px 0 rgba(255,255,255,0.16);

          cursor: pointer;

          z-index: 999997;

          overflow: visible;

          transition:
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .ae-chat-launcher:hover {
          border-color:
            rgba(255,179,0,0.50);

          box-shadow:
            0 22px 55px rgba(0,0,100,0.38),
            0 0 0 4px rgba(255,179,0,0.06),
            inset 0 1px 0 rgba(255,255,255,0.20);
        }

        .ae-chat-launcher-glow {
          position: absolute;
          inset: 8px;

          border-radius: 12px;

          background:
            radial-gradient(
              circle,
              rgba(255,255,255,0.16),
              transparent 70%
            );

          pointer-events: none;
        }

        .ae-chat-online-indicator {
          position: absolute;

          top: -3px;
          right: -3px;

          width: 11px;
          height: 11px;

          border-radius: 999px;

          border: 2px solid #080912;

          background: ${colors.brand.accent};

          box-shadow:
            0 0 0 2px rgba(255,179,0,0.10),
            0 0 12px rgba(255,179,0,0.55);

          animation:
            aeChatPulse 2.4s ease-in-out infinite;
        }

        /* ==========================================
           WINDOW
           ========================================== */

        .ae-chat-window {
          position: fixed !important;

          right: 20px;
          bottom: 20px;

          width: 360px;
          height: 530px;

          max-width:
            calc(100vw - 32px);

          max-height:
            calc(100dvh - 32px);

          display: flex;
          flex-direction: column;

          overflow: hidden;

          border-radius: 20px;

          border:
            1px solid rgba(255,255,255,0.18);

          background:
            rgba(249,250,252,0.98);

          box-shadow:
            0 30px 90px rgba(0,1,49,0.28),
            0 0 0 1px rgba(0,1,49,0.05);

          z-index: 999997;

          animation:
            aeChatOpen 0.32s
            cubic-bezier(0.22,1,0.36,1);

          transition:
            height 0.28s
              cubic-bezier(0.22,1,0.36,1),
            width 0.28s
              cubic-bezier(0.22,1,0.36,1);
        }

        .ae-chat-window-minimized {
          height: 66px;
          width: 320px;
        }

        /* ==========================================
           HEADER
           ========================================== */

        .ae-chat-header {
          position: relative;

          flex: 0 0 auto;

          min-height: 66px;

          overflow: hidden;

          background:
            linear-gradient(
              120deg,
              #050611 0%,
              #000131 52%,
              #00006e 100%
            );

          border-bottom:
            1px solid rgba(255,255,255,0.10);
        }

        .ae-chat-header::after {
          content: '';

          position: absolute;

          left: 18px;
          right: 18px;
          top: 0;

          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.50),
              transparent
            );
        }

        .ae-chat-header-glow {
          position: absolute;

          width: 170px;
          height: 170px;

          top: -110px;
          right: -35px;

          border-radius: 50%;

          background:
            ${colors.brand.accent};

          opacity: 0.13;

          filter: blur(55px);

          pointer-events: none;
        }

        .ae-chat-header-inner {
          position: relative;
          z-index: 2;

          min-height: 66px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 12px;

          padding: 10px 12px 10px 14px;
        }

        .ae-chat-brand {
          display: flex;
          align-items: center;

          gap: 10px;

          min-width: 0;
        }

        .ae-chat-brand-icon {
          width: 36px;
          height: 36px;

          flex: 0 0 auto;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 11px;

          color: ${colors.brand.accent};

          background:
            rgba(255,255,255,0.08);

          border:
            1px solid rgba(255,255,255,0.14);

          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.10);
        }

        .ae-chat-ai-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-width: 22px;
          height: 15px;

          padding: 0 5px;

          border-radius: 999px;

          font-size: 7px;
          line-height: 1;

          font-weight: 900;
          letter-spacing: 0.08em;

          color: #080912;

          background:
            ${colors.brand.accent};
        }

        .ae-chat-status-dot {
          width: 6px;
          height: 6px;

          border-radius: 999px;

          background:
            ${colors.brand.accent};

          box-shadow:
            0 0 8px
            rgba(255,179,0,0.65);
        }

        .ae-chat-header-actions {
          flex: 0 0 auto;

          display: flex;
          align-items: center;

          gap: 5px;
        }

        .ae-chat-header-button {
          width: 32px;
          height: 32px;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 0;

          color:
            rgba(255,255,255,0.74);

          border-radius: 9px;

          border:
            1px solid
            rgba(255,255,255,0.08);

          background:
            rgba(255,255,255,0.04);

          cursor: pointer;

          transition:
            background 0.2s ease,
            color 0.2s ease,
            border-color 0.2s ease;
        }

        .ae-chat-header-button:hover {
          color: #ffffff;

          background:
            rgba(255,255,255,0.10);

          border-color:
            rgba(255,255,255,0.16);
        }

        /* ==========================================
           MESSAGES
           ========================================== */

        .ae-chat-messages {
          flex: 1;

          min-height: 0;

          overflow-y: auto;
          overflow-x: hidden;

          padding:
            12px 12px 16px;

          background:
            linear-gradient(
              180deg,
              #f7f8fb 0%,
              #ffffff 100%
            );

          scrollbar-width: thin;
          scrollbar-color:
            rgba(0,1,49,0.14)
            transparent;
        }

        .ae-chat-messages::-webkit-scrollbar {
          width: 5px;
        }

        .ae-chat-messages::-webkit-scrollbar-track {
          background: transparent;
        }

        .ae-chat-messages::-webkit-scrollbar-thumb {
          border-radius: 999px;

          background:
            rgba(0,1,49,0.14);
        }

        .ae-chat-system-line {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          margin:
            1px 0 12px;

          font-size: 7px;
          font-weight: 800;

          letter-spacing: 0.16em;
          text-transform: uppercase;

          color:
            rgba(0,1,49,0.32);
        }

        .ae-chat-system-line-bar {
          width: 24px;
          height: 1px;

          background:
            rgba(0,1,49,0.10);
        }

        .ae-chat-message {
          width: 100%;

          display: flex;
          align-items: flex-end;

          gap: 6px;

          margin-bottom: 10px;
        }

        .ae-chat-message-user {
          justify-content: flex-end;
        }

        .ae-chat-message-bot {
          justify-content: flex-start;
        }

        .ae-chat-mini-avatar {
          width: 23px;
          height: 23px;

          flex: 0 0 auto;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 2px;

          border-radius: 7px;

          color:
            ${colors.brand.secondary};

          background:
            rgba(0,0,170,0.06);

          border:
            1px solid
            rgba(0,0,170,0.10);
        }

        .ae-chat-bubble {
          max-width: 82%;

          min-width: 0;

          padding:
            9px 11px 7px;

          border-radius: 13px;

          word-break: break-word;
          overflow-wrap: anywhere;

          font-size: 11px;
          line-height: 1.58;
        }

        .ae-chat-bubble p {
          margin: 0;
        }

        .ae-chat-bubble-bot {
          color: #31394a;

          background: #ffffff;

          border:
            1px solid
            rgba(0,1,49,0.08);

          border-bottom-left-radius: 4px;

          box-shadow:
            0 5px 18px
            rgba(0,1,49,0.04);
        }

        .ae-chat-bubble-user {
          color: #ffffff;

          border:
            1px solid
            rgba(255,255,255,0.12);

          border-bottom-right-radius: 4px;

          background:
            ${gradients.primary};

          box-shadow:
            0 8px 20px
            rgba(0,0,170,0.14);
        }

        .ae-chat-time {
          display: block;

          margin-top: 4px;

          font-size: 7px;

          line-height: 1;

          opacity: 0.45;
        }

        .ae-chat-bubble-user
        .ae-chat-time {
          color: rgba(255,255,255,0.80);
        }

        /* ==========================================
           TYPING
           ========================================== */

        .ae-chat-typing {
          display: flex;
          align-items: center;

          gap: 3px;

          min-width: 43px;

          padding: 10px 12px;

          border-radius:
            13px 13px 13px 4px;

          background: #ffffff;

          border:
            1px solid
            rgba(0,1,49,0.08);

          box-shadow:
            0 5px 18px
            rgba(0,1,49,0.04);
        }

        .ae-chat-typing span {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background:
            ${colors.brand.secondary};

          animation:
            aeChatTyping
            1.15s
            ease-in-out
            infinite;
        }

        .ae-chat-typing span:nth-child(2) {
          animation-delay: 0.14s;

          background:
            ${colors.brand.accent};
        }

        .ae-chat-typing span:nth-child(3) {
          animation-delay: 0.28s;
        }

        /* ==========================================
           OPTIONS
           ========================================== */

        .ae-chat-options {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0,1fr));

          gap: 6px;

          margin:
            2px 0 12px 29px;
        }

        .ae-chat-option {
          min-height: 36px;

          padding: 7px 9px;

          text-align: left;

          font-size: 9px;
          line-height: 1.35;

          font-weight: 650;

          color:
            ${colors.brand.primary};

          border-radius: 10px;

          border:
            1px solid
            rgba(0,1,49,0.10);

          background: #ffffff;

          box-shadow:
            0 4px 14px
            rgba(0,1,49,0.025);

          cursor: pointer;

          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .ae-chat-option:hover {
          transform:
            translateY(-1px);

          border-color:
            rgba(0,0,170,0.25);

          background:
            rgba(0,0,170,0.025);

          box-shadow:
            0 8px 18px
            rgba(0,1,49,0.05);
        }

        .ae-chat-phone-skip {
          margin:
            -2px 0 12px 29px;
        }

        .ae-chat-phone-skip button {
          padding: 6px 10px;

          border-radius: 8px;

          border:
            1px solid
            rgba(0,1,49,0.09);

          background:
            rgba(0,1,49,0.025);

          color:
            rgba(0,1,49,0.58);

          font-size: 9px;
          font-weight: 650;

          cursor: pointer;
        }

        .ae-chat-phone-skip button:hover {
          color:
            ${colors.brand.secondary};

          border-color:
            rgba(0,0,170,0.20);
        }

        /* ==========================================
           COMPLETE STATUS
           ========================================== */

        .ae-chat-complete {
          margin:
            4px 0 10px 29px;

          padding: 10px;

          border-radius: 12px;

          border:
            1px solid
            rgba(0,1,49,0.08);

          background:
            rgba(255,255,255,0.85);

          box-shadow:
            0 6px 20px
            rgba(0,1,49,0.04);
        }

        .ae-chat-complete-status {
          display: flex;
          align-items: center;

          gap: 8px;
        }

        .ae-chat-check {
          width: 25px;
          height: 25px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 8px;

          color: #ffffff;

          background:
            ${gradients.primary};
        }

        .ae-chat-download {
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 6px;

          margin-top: 9px;

          padding: 7px 10px;

          border-radius: 9px;

          border:
            1px solid
            rgba(0,1,49,0.10);

          background: #ffffff;

          color:
            ${colors.brand.primary};

          font-size: 9px;
          font-weight: 700;

          cursor: pointer;

          transition:
            background 0.2s ease,
            border-color 0.2s ease;
        }

        .ae-chat-download:hover {
          background:
            rgba(0,0,170,0.035);

          border-color:
            rgba(0,0,170,0.20);
        }

        /* ==========================================
           INPUT
           ========================================== */

        .ae-chat-input-section {
          flex: 0 0 auto;

          padding: 10px 11px 8px;

          border-top:
            1px solid
            rgba(0,1,49,0.08);

          background:
            rgba(255,255,255,0.98);

          box-shadow:
            0 -8px 22px
            rgba(0,1,49,0.025);
        }

        .ae-chat-input-wrapper {
          display: flex;
          align-items: center;

          gap: 7px;
        }

        .ae-chat-input {
          flex: 1;

          min-width: 0;
          height: 39px;

          padding:
            0 11px;

          border-radius: 11px;

          border:
            1px solid
            rgba(0,1,49,0.10);

          outline: none;

          background:
            #f8f9fb;

          color:
            ${colors.brand.primary};

          font-size: 11px;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .ae-chat-input::placeholder {
          color:
            rgba(0,1,49,0.35);
        }

        .ae-chat-input:focus {
          border-color:
            rgba(0,0,170,0.45);

          background: #ffffff;

          box-shadow:
            0 0 0 3px
            rgba(0,0,170,0.07);
        }

        .ae-chat-input:disabled {
          opacity: 0.65;
        }

        .ae-chat-send {
          width: 39px;
          height: 39px;

          flex: 0 0 auto;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 0;

          border-radius: 11px;

          border: none;

          color: #ffffff;

          background:
            ${gradients.primary};

          box-shadow:
            0 7px 18px
            rgba(0,0,170,0.17);

          cursor: pointer;

          transition:
            opacity 0.2s ease,
            box-shadow 0.2s ease;
        }

        .ae-chat-send:not(:disabled):hover {
          box-shadow:
            0 10px 24px
            rgba(0,0,170,0.24);
        }

        .ae-chat-send:disabled {
          opacity: 0.38;

          cursor: not-allowed;

          box-shadow: none;
        }

        .ae-chat-footer {
          display: flex;
          align-items: center;
          justify-content: center;

          flex-wrap: wrap;

          gap: 4px;

          margin-top: 7px;

          font-size: 7px;

          line-height: 1;

          color:
            rgba(0,1,49,0.36);
        }

        .ae-chat-footer-dot {
          width: 5px;
          height: 5px;

          border-radius: 999px;

          background:
            ${colors.brand.accent};
        }

        .ae-chat-footer-divider {
          opacity: 0.45;
        }

        /* ==========================================
           ANIMATIONS
           ========================================== */

        @keyframes aeChatOpen {
          from {
            opacity: 0;
            transform:
              translateY(18px)
              scale(0.97);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }

        @keyframes aeChatPulse {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0.5;
          }
        }

        @keyframes aeChatTyping {
          0%,
          60%,
          100% {
            transform:
              translateY(0);

            opacity: 0.4;
          }

          30% {
            transform:
              translateY(-3px);

            opacity: 1;
          }
        }

        /* ==========================================
           MOBILE
           ========================================== */

        @media (max-width: 640px) {
          .ae-chat-launcher {
            right: 14px;

            bottom:
              max(
                14px,
                env(
                  safe-area-inset-bottom
                )
              );

            width: 50px;
            height: 50px;

            border-radius: 15px;
          }

          .ae-chat-window {
            right: 10px;

            bottom:
              max(
                10px,
                env(
                  safe-area-inset-bottom
                )
              );

            width:
              calc(100vw - 20px);

            max-width: none;

            height:
              min(
                520px,
                calc(
                  100dvh - 20px
                )
              );

            max-height:
              calc(
                100dvh - 20px
              );

            border-radius: 18px;
          }

          .ae-chat-window-minimized {
            width:
              min(
                320px,
                calc(
                  100vw - 20px
                )
              );

            height: 64px;
          }

          .ae-chat-header {
            min-height: 64px;
          }

          .ae-chat-header-inner {
            min-height: 64px;

            padding:
              9px 10px 9px 12px;
          }

          .ae-chat-brand-icon {
            width: 34px;
            height: 34px;
          }

          .ae-chat-header-button {
            width: 30px;
            height: 30px;
          }

          .ae-chat-messages {
            padding:
              11px 10px 14px;
          }

          .ae-chat-bubble {
            max-width: 84%;

            font-size: 10.5px;
          }

          .ae-chat-options {
            margin-left: 0;

            grid-template-columns: 1fr 1fr;
          }

          .ae-chat-phone-skip,
          .ae-chat-complete {
            margin-left: 0;
          }

          .ae-chat-input-section {
            padding:
              9px 9px 7px;
          }
        }

        /* ==========================================
           VERY SMALL MOBILE
           ========================================== */

        @media (max-width: 380px) {
          .ae-chat-options {
            grid-template-columns: 1fr;
          }

          .ae-chat-system-line-bar {
            width: 15px;
          }
        }

        /* ==========================================
           REDUCED MOTION
           ========================================== */

        @media (
          prefers-reduced-motion:
          reduce
        ) {
          .ae-chat-window,
          .ae-chat-online-indicator,
          .ae-chat-typing span {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default AIChatbot;
