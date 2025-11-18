import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import Countdown from './Countdown'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode" onLoad={() => setLoaded(true)} style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_50%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 sm:py-24 flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600 drop-shadow-[0_0_25px_rgba(255,0,0,0.35)]">
              DEVILZ.NETWORK
            </span>
          </h1>
          <p className="mt-3 text-red-200/80 text-lg sm:text-xl md:text-2xl uppercase tracking-[0.25em]">
            Launching Soon
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl text-zinc-300/90"
        >
          A new era of gaming servers and community begins.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full"
        >
          <Countdown />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2"
        >
          <form onSubmit={(e)=> e.preventDefault()} className="flex w-full max-w-xl rounded-lg overflow-hidden border border-red-500/30 bg-zinc-900/60 backdrop-blur-sm shadow-[0_0_25px_rgba(255,0,0,0.12)]">
            <div className="relative flex-1">
              <input type="email" required placeholder="Enter your email" className="w-full bg-transparent px-4 py-3 text-red-100 placeholder-red-300/50 outline-none" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-red-500/30 to-red-700/30" />
            </div>
            <button className="px-5 py-3 bg-gradient-to-b from-red-600 to-red-700 hover:from-red-500 hover:to-red-700 transition text-white font-semibold tracking-wide">
              Notify Me
            </button>
          </form>
        </motion.div>

        <div className="mt-6 flex items-center gap-6 opacity-80">
          <div className="w-6 h-6 rounded-full border border-red-500/50 relative">
            <div className="absolute inset-0 m-auto w-[2px] h-[2px] bg-red-500 rounded-full"></div>
          </div>
          <div className="w-10 h-px bg-gradient-to-r from-red-700/60 to-transparent" />
          <div className="flex items-center gap-3 text-red-300/70 text-xs uppercase tracking-[0.2em]">
            <span>CS 1.6 vibes</span>
            <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
            <span>Esports energy</span>
          </div>
        </div>
      </div>

      {/* Tactical lines and HUD accents */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute top-24 left-10 w-24 h-24 border border-red-600/40 rotate-45" />
        <div className="absolute bottom-32 right-12 w-16 h-16 border-t border-l border-red-600/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-red-700/30" />
      </div>

      {/* Subtle noise overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.5\'/></svg>")' }} />
    </section>
  )
}
