'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface FAQModalProps {
  isOpen: boolean
  onClose: () => void
}

const faqData = [
  {
    question: "how does small talk work?",
    answer: "enter your phone number and our ai will send you a text to vibecheck you. we'll analyze your personality and match you with compatible people for real-world meetups."
  },
  {
    question: "how much does it cost?",
    answer: "$25 per event. share your referral code with friends and save $1 for every person who joins."
  },
  {
    question: "is my data safe?",
    answer: "yes! we only use your phone number to send you texts and match you with people. we never share your personal info."
  },
  {
    question: "where do the meetups happen?",
    answer: "we organize meetups in your local area. you'll get details about time and location once you're matched."
  },
  {
    question: "what if i don't vibe with my matches?",
    answer: "no worries! you can always skip a meetup or request new matches. we want you to find your people."
  }
]

export function FAQModal({ isOpen, onClose }: FAQModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-dark border border-accent rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto relative scrollbar-hide modal-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-yeseva text-2xl text-text">faq</h2>
              <button
                onClick={onClose}
                className="text-text/70 hover:text-text transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-accent/30 pb-4 last:border-b-0"
                >
                  <h3 className="font-medium text-text mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-text/80 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-accent/30">
              <p className="text-text/60 text-xs text-center">
                still have questions? hit us up at contact@smalltalk.com
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 