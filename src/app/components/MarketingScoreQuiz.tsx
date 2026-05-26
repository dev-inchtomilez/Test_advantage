import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, TrendingUp, AlertCircle, Star } from 'lucide-react';

export function MarketingScoreQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const questions = [
    {
      question: "How would you rate your current marketing strategy?",
      options: [
        { text: "We don't have a formal strategy", score: 1 },
        { text: "Basic strategy, mostly reactive", score: 2 },
        { text: "Solid strategy with some gaps", score: 3 },
        { text: "Comprehensive and data-driven", score: 4 }
      ]
    },
    {
      question: "How well do you track marketing ROI?",
      options: [
        { text: "We don't track ROI", score: 1 },
        { text: "Basic tracking, limited insights", score: 2 },
        { text: "Track key metrics regularly", score: 3 },
        { text: "Advanced analytics and attribution", score: 4 }
      ]
    },
    {
      question: "How consistent is your brand across channels?",
      options: [
        { text: "Inconsistent messaging and visuals", score: 1 },
        { text: "Somewhat consistent", score: 2 },
        { text: "Mostly aligned across channels", score: 3 },
        { text: "Fully integrated brand experience", score: 4 }
      ]
    },
    {
      question: "What's your content marketing maturity?",
      options: [
        { text: "Irregular or no content production", score: 1 },
        { text: "Ad-hoc content when we have time", score: 2 },
        { text: "Regular content with a calendar", score: 3 },
        { text: "Strategic content engine with SEO", score: 4 }
      ]
    },
    {
      question: "How do you approach customer acquisition?",
      options: [
        { text: "Mostly word-of-mouth", score: 1 },
        { text: "Some paid ads, no clear funnel", score: 2 },
        { text: "Multi-channel with basic nurturing", score: 3 },
        { text: "Optimized funnel with automation", score: 4 }
      ]
    }
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const calculateScore = () => {
    const total = answers.reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 4;
    return Math.round((total / maxScore) * 100);
  };

  const getScoreLevel = (score: number) => {
    if (score >= 80) return { level: "Expert", color: "text-green-600", icon: Star };
    if (score >= 60) return { level: "Advanced", color: "text-blue-600", icon: TrendingUp };
    if (score >= 40) return { level: "Intermediate", color: "text-yellow-600", icon: AlertCircle };
    return { level: "Beginner", color: "text-orange-600", icon: AlertCircle };
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setIsStarted(false);
  };

  const score = calculateScore();
  const scoreLevel = getScoreLevel(score);
  const ScoreLevelIcon = scoreLevel.icon;

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {!isStarted ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl mb-6 shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                What's Your Marketing Score?
              </h2>
              <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
                Take our quick 5-question assessment to discover how your marketing stacks up and get personalized recommendations.
              </p>
              <button
                onClick={() => setIsStarted(true)}
                className="btn-minimal btn-primary inline-flex items-center gap-2 text-lg"
              >
                Start Assessment
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-gray-500 mt-4">Takes less than 2 minutes</p>
            </motion.div>
          ) : !showResults ? (
            <motion.div
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="card-minimal p-8 sm:p-12"
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-500">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {Math.round(((currentQuestion) / questions.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-gray-900 to-gray-700 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full text-left p-6 border-2 border-gray-200 rounded-2xl hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-gray-900 group-hover:bg-gray-900 transition-all duration-300 flex items-center justify-center">
                        <motion.div
                          className="w-3 h-3 rounded-full bg-white opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                      <span className="text-sm text-gray-900 font-medium">{option.text}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-minimal p-8 sm:p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full mb-6 shadow-xl"
              >
                <ScoreLevelIcon className="w-12 h-12 text-white" />
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Your Marketing Score
              </h3>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
                className="mb-8"
              >
                <div className="text-7xl sm:text-8xl font-bold text-gray-900 mb-2">
                  {score}
                </div>
                <div className={`text-2xl font-bold ${scoreLevel.color}`}>
                  {scoreLevel.level}
                </div>
              </motion.div>

              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                {score >= 80 ? (
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Excellent!</strong> You have a mature marketing operation. 
                    AdvantEdge can help you scale even further with advanced strategies and optimization.
                  </p>
                ) : score >= 60 ? (
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Great progress!</strong> Your marketing is on the right track. 
                    We can help fill gaps and optimize your systems for maximum ROI.
                  </p>
                ) : score >= 40 ? (
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Good foundation!</strong> There's significant room for improvement. 
                    AdvantEdge can build a comprehensive strategy to accelerate your growth.
                  </p>
                ) : (
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Let's get started!</strong> You're in the perfect position to transform 
                    your marketing. AdvantEdge will create a strategic roadmap tailored to your business.
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={restart}
                  className="btn-minimal btn-secondary"
                >
                  Retake Assessment
                </button>
                <a
                  href="/contact"
                  className="btn-minimal btn-primary inline-flex items-center justify-center gap-2"
                >
                  Get Your Free Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}