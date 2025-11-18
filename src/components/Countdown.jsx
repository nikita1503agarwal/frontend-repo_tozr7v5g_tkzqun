import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const targetDate = new Date('2026-01-01T00:00:00Z').getTime()

function getTimeLeft() {
  const now = Date.now()
  let diff = Math.max(0, targetDate - now)

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  diff -= days * (1000 * 60 * 60 * 24)

  const hours = Math.floor(diff / (1000 * 60 * 60))
  diff -= hours * (1000 * 60 * 60)

  const minutes = Math.floor(diff / (1000 * 60))
  diff -= minutes * (1000 * 60)

  const seconds = Math.floor(diff / 1000)

  return { days, hours, minutes, seconds }
}

function TimeBlock({ label, value }) {
  const padded = useMemo(() => String(value).padStart(2, '0'), [value])
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={label + padded}
        initial={{ opacity: 0.4, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="relative w-24 sm:w-28 md:w-32 aspect-[5/4] bg-gradient-to-b from-zinc-900/80 to-black/80 border border-red-500/30 rounded-lg overflow-hidden shadow-[0_0_35px_rgba(252,70,70,0.15)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,80,80,0.2),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-20 mix-blend-screen bg-[linear-gradient(90deg,transparent_0,rgba(255,255,255,0.06)_50%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(255,0,0,0.08))]" />
        <div className="relative h-full w-full flex items-center justify-center">
          <span className="font-hud text-3xl sm:text-4xl md:text-5xl tracking-widest text-red-400 drop-shadow-[0_0_10px_rgba(255,0,0,0.45)]">
            {padded}
          </span>
        </div>
      </motion.div>
      <span className="mt-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-red-300/70">{label}</span>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="w-full flex items-center justify-center">
      <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        <TimeBlock label="Days" value={time.days} />
        <TimeBlock label="Hours" value={time.hours} />
        <TimeBlock label="Minutes" value={time.minutes} />
        <TimeBlock label="Seconds" value={time.seconds} />
      </div>
    </div>
  )
}
