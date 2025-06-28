'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PhoneInput } from '@/components/PhoneInput'
import { Logo } from '@/components/Logo'

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (phoneNumber: string) => {
    setIsSubmitted(true)
    // TODO: Integrate with backend API
    console.log('Phone number submitted:', phoneNumber)
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-dark border border-accent rounded-2xl p-8 md:p-12 max-w-md w-full modal-glow"
      >
        <div className="text-center space-y-8">
          <Logo />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg font-light tracking-wide opacity-90"
          >
            let's hit pause. 
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <PhoneInput onSubmit={handleSubmit} isSubmitted={isSubmitted} />
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
} 