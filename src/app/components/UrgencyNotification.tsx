import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, TrendingUp, Download, CheckCircle2, X } from 'lucide-react';

interface Notification {
  id: number;
  icon: React.ReactNode;
  message: string;
  color: string;
}

export function UrgencyNotification() {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const notifications: Notification[] = [
    {
      id: 1,
      icon: <Users className="w-4 h-4" />,
      message: 'Rajesh from Mumbai just booked a consultation',
      color: 'from-gray-900 to-gray-800'
    },
    {
      id: 2,
      icon: <TrendingUp className="w-4 h-4" />,
      message: '127 businesses signed up this month',
      color: 'from-gray-800 to-gray-700'
    },
    {
      id: 3,
      icon: <Download className="w-4 h-4" />,
      message: 'Priya from Bangalore downloaded our case study',
      color: 'from-gray-700 to-gray-600'
    },
    {
      id: 4,
      icon: <CheckCircle2 className="w-4 h-4" />,
      message: 'Only 2 consultation slots left this week',
      color: 'from-gray-900 to-gray-800'
    },
    {
      id: 5,
      icon: <Users className="w-4 h-4" />,
      message: '3 clients working with us right now',
      color: 'from-gray-800 to-gray-700'
    },
    {
      id: 6,
      icon: <TrendingUp className="w-4 h-4" />,
      message: 'Vikram from Delhi just started a project',
      color: 'from-gray-700 to-gray-600'
    }
  ];

  useEffect(() => {
    // Show first notification after 8 seconds
    const initialTimer = setTimeout(() => {
      setCurrentNotification(notifications[0]);
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (currentNotification) {
      // Auto-hide after 6 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 6000);

      // Show next notification after 12 seconds (6s display + 6s gap)
      const nextTimer = setTimeout(() => {
        const currentIndex = notifications.findIndex(n => n.id === currentNotification.id);
        const nextIndex = (currentIndex + 1) % notifications.length;
        setCurrentNotification(notifications[nextIndex]);
        setIsVisible(true);
      }, 12000);

      return () => {
        clearTimeout(hideTimer);
        clearTimeout(nextTimer);
      };
    }
  }, [currentNotification]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && currentNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: -50 }}
          transition={{ type: 'spring', bounce: 0.4, duration: 0.6 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm"
        >
          <div className={`bg-gradient-to-r ${currentNotification.color} text-white rounded-2xl shadow-2xl p-4 pr-12 border border-white/20 backdrop-blur-sm`}>
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                {currentNotification.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold leading-tight">
                  {currentNotification.message}
                </p>
                <p className="text-xs text-white/80 mt-1">Just now</p>
              </div>
            </div>

            {/* Animated Progress Bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-white/40 rounded-full"
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 6, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
