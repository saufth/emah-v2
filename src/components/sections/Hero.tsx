'use client'
// React
import { useRef } from 'react'
// Hooks
import useDimensions from '@/modules/sizing/hooks/useDimensions'
// Animation
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
// Config
import { description } from '@/modules/app/config'

/**
 * The main hero section component
 * @returns The Hero section component
 */
export default function Hero () {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)

  const { width: heroWidth } = useDimensions(heroRef.current)

  const videoSrc = '/video/hero.mp4'

  // Animation
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end']
  })
  const spring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 16
  })
  const videoWidth = useTransform(
    spring,
    [0, 1],
    ['320px', `${heroWidth}px`]
  )

  return (
    <section
      className='bg-gradient pt-28 md:pt-40'
      ref={heroRef}
    >
      <motion.div
        className='h-full px-section pb-section mx-auto space-y-12 md:space-y-12'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.1
        }}
        ref={heroContentRef}
      >
        <h1 className='max-w-7xl mx-auto text-center text-white'>
          {description}
        </h1>

        <div className='flex justify-center'>
          <motion.div
            className='h-md relative overflow-hidden rounded-3xl'
            style={{ width: videoWidth }}
          >
            <video
              className='w-screen h-full object-cover object-center'
              width={1920}
              height={1080}
              controls={false}
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              controlsList='nodownload noplaybackrate'
            >
              <source src={videoSrc} type='video/mp4' />
            </video>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
