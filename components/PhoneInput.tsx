'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { FAQModal } from './FAQModal'
import { ContactModal } from './ContactModal'

interface PhoneInputProps {
  onSubmit: (phoneNumber: string) => void
  isSubmitted: boolean
}

export function PhoneInput({ onSubmit, isSubmitted }: PhoneInputProps) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isFAQOpen, setIsFAQOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    
    if (cleaned.length >= 6) {
      return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
    } else if (cleaned.length >= 3) {
      return cleaned.replace(/(\d{3})(\d{0,3})/, '($1) $2')
    }
    
    return cleaned
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhoneNumber(formatted)
    setError('')
  }

  const handleSubmit = async () => {
    const cleaned = phoneNumber.replace(/\D/g, '')
    
    if (cleaned.length !== 10) {
      setError('please enter a valid 10-digit phone number')
      return
    }

    setIsLoading(true)
    setError('')
    
    try {
      // Call the backend API
      const response = await fetch('/api/submit-phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber: cleaned }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit phone number')
      }

      // Call the parent component's onSubmit
      await onSubmit(cleaned)
      
      console.log('API Response:', data)
      
    } catch (err) {
      console.error('Error submitting phone number:', err)
      setError('something went wrong. try again?')
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleFAQClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsFAQOpen(true)
  }

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsContactOpen(true)
  }

  return (
    <>
      <div className="space-y-4">
        <div className="space-y-3">
          <input
            type="tel"
            value={phoneNumber}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="your phone number"
            maxLength={15}
            disabled={isLoading || isSubmitted}
            className="w-full px-4 py-3 bg-black/20 border-2 border-accent rounded-xl text-text placeholder:text-text/70 focus:border-primary focus:bg-black/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50"
          />
          
          <motion.button
            onClick={handleSubmit}
            disabled={isLoading || isSubmitted || !phoneNumber}
            className="w-full px-4 py-3 bg-gradient-to-r from-primary to-accent text-text font-medium rounded-xl hover:shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 border-2 border-text/30 border-t-text rounded-full"
              />
            ) : (
              <Send className="w-5 h-5" />
            )}
            {isLoading ? 'sending...' : 'send it'}
          </motion.button>
        </div>

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm text-center"
          >
            {error}
          </motion.p>
        )}

        {isSubmitted && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-sm text-center"
          >
            sent! 🎉
          </motion.p>
        )}

        <div className="flex justify-center gap-6 pt-2">
          <button 
            onClick={handleFAQClick}
            className="text-text/70 hover:text-text underline underline-offset-4 transition-colors duration-200 text-sm cursor-pointer"
          >
            faq
          </button>
          <button 
            onClick={handleContactClick}
            className="text-text/70 hover:text-text underline underline-offset-4 transition-colors duration-200 text-sm cursor-pointer"
          >
            contact
          </button>
        </div>
      </div>

      <FAQModal isOpen={isFAQOpen} onClose={() => setIsFAQOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
} 