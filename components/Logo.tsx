import { motion } from 'framer-motion'

export function Logo() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="font-yeseva text-5xl md:text-6xl font-normal text-text"
    >
      small talk
    </motion.h1>
  )
} 