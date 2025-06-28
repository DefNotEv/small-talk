'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Mail } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // TODO: Replace with actual email service (SendGrid, Resend, etc.)
      // For now, we'll simulate the email sending
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose()
        setIsSubmitted(false)
      }, 2000)
      
    } catch (error) {
      console.error('Failed to send email:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
            className="bg-dark border border-accent rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto relative scrollbar-hide modal-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-yeseva text-2xl text-text">contact</h2>
              <button
                onClick={onClose}
                className="text-text/70 hover:text-text transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-text/80 text-sm mb-2">
                    name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/20 border-2 border-accent rounded-xl text-text placeholder:text-text/50 focus:border-primary focus:bg-black/30 focus:outline-none transition-all duration-300"
                    placeholder="your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-text/80 text-sm mb-2">
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/20 border-2 border-accent rounded-xl text-text placeholder:text-text/50 focus:border-primary focus:bg-black/30 focus:outline-none transition-all duration-300"
                    placeholder="your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-text/80 text-sm mb-2">
                    subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/20 border-2 border-accent rounded-xl text-text placeholder:text-text/50 focus:border-primary focus:bg-black/30 focus:outline-none transition-all duration-300"
                    placeholder="what's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text/80 text-sm mb-2">
                    message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-black/20 border-2 border-accent rounded-xl text-text placeholder:text-text/50 focus:border-primary focus:bg-black/30 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="tell us what's on your mind..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gradient-to-r from-primary to-accent text-text font-medium rounded-xl hover:shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-text/30 border-t-text rounded-full"
                    />
                  ) : (
                    <Mail className="w-5 h-5" />
                  )}
                  {isSubmitting ? 'sending...' : 'send message'}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-text text-lg font-medium mb-2">message sent!</h3>
                <p className="text-text/70 text-sm">
                  we'll get back to you asap
                </p>
              </motion.div>
            )}

            <div className="mt-6 pt-4 border-t border-accent/30">
              <p className="text-text/60 text-xs text-center">
                or email us directly at contact@smalltalk.com
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 