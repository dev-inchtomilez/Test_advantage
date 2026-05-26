import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, MapPin, Clock, TrendingUp } from 'lucide-react';

interface Activity {
  id: string;
  name: string;
  action: string;
  location: string;
  timeAgo: string;
  type: 'consultation' | 'download' | 'signup' | 'project';
}

export function LiveActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  const activityTemplates: Omit<Activity, 'id' | 'timeAgo'>[] = [
    { name: "Rajesh Kumar", action: "booked a strategy consultation", location: "Mumbai", type: "consultation" },
    { name: "Priya Sharma", action: "downloaded the Marketing ROI Guide", location: "Bangalore", type: "download" },
    { name: "Amit Patel", action: "started a website redesign project", location: "Delhi", type: "project" },
    { name: "Sneha Reddy", action: "signed up for the newsletter", location: "Hyderabad", type: "signup" },
    { name: "Vikram Singh", action: "booked a brand strategy session", location: "Pune", type: "consultation" },
    { name: "Ananya Iyer", action: "downloaded the SEO Checklist", location: "Chennai", type: "download" },
    { name: "Rohan Gupta", action: "started a digital marketing campaign", location: "Kolkata", type: "project" },
    { name: "Meera Joshi", action: "joined a webinar on content marketing", location: "Ahmedabad", type: "signup" },
    { name: "Karthik Nair", action: "booked a free marketing audit", location: "Kochi", type: "consultation" },
    { name: "Divya Menon", action: "downloaded the Social Media Strategy", location: "Thiruvananthapuram", type: "download" }
  ];

  const getRandomTimeAgo = () => {
    const times = [
      "Just now",
      "2 minutes ago",
      "5 minutes ago",
      "8 minutes ago",
      "12 minutes ago",
      "15 minutes ago",
      "20 minutes ago"
    ];
    return times[Math.floor(Math.random() * times.length)];
  };

  useEffect(() => {
    // Initial activities
    const initialActivities: Activity[] = activityTemplates.slice(0, 3).map((template, index) => ({
      ...template,
      id: `activity-${Date.now()}-${index}`,
      timeAgo: getRandomTimeAgo()
    }));
    setActivities(initialActivities);

    // Add new activity every 8 seconds
    const interval = setInterval(() => {
      const randomTemplate = activityTemplates[Math.floor(Math.random() * activityTemplates.length)];
      const newActivity: Activity = {
        ...randomTemplate,
        id: `activity-${Date.now()}`,
        timeAgo: "Just now"
      };

      setActivities(prev => {
        const updated = [newActivity, ...prev];
        return updated.slice(0, 4); // Keep max 4 activities
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'consultation':
        return <Users className="w-4 h-4" />;
      case 'download':
        return <TrendingUp className="w-4 h-4" />;
      case 'signup':
        return <Users className="w-4 h-4" />;
      case 'project':
        return <TrendingUp className="w-4 h-4" />;
    }
  };

  const getActivityColor = (type: Activity['type']) => {
    switch (type) {
      case 'consultation':
        return 'bg-blue-500';
      case 'download':
        return 'bg-green-500';
      case 'signup':
        return 'bg-purple-500';
      case 'project':
        return 'bg-orange-500';
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="fixed bottom-6 right-6 z-50 max-w-sm"
    >
      <div className="card-minimal p-4 shadow-2xl border-2 border-gray-900">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <h4 className="font-bold text-sm text-gray-900">Live Activity</h4>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-2">
          <AnimatePresence mode="popLayout">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-xl p-3 border border-gray-100"
              >
                <div className="flex gap-3">
                  <div className={`flex-shrink-0 w-8 h-8 ${getActivityColor(activity.type)} rounded-lg flex items-center justify-center text-white`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 font-medium">
                      <span className="font-bold">{activity.name}</span>
                    </p>
                    <p className="text-xs text-gray-600 truncate">
                      {activity.action}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {activity.location}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {activity.timeAgo}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500">
            Join <span className="font-bold text-gray-900">247+</span> businesses growing with us
          </p>
        </div>
      </div>
    </motion.div>
  );
}
