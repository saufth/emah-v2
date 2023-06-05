'use client'
// Components
import Link from './core/Link'
import LinkEmail from './LinkEmail'
import LinkToContact from './LinkToContact'
import Logo from '../data-display/core/Logo'
import MenuButton from '../input/core/MenuButton'
import NextLink from 'next/link'
import SocialNav from './SocialNav'
// Hooks
import useMediaQuery from '@/modules/sizing/hooks/useMediaQuery'
// Animation
import { motion, useCycle } from 'framer-motion'
// Config
import { LOGO_TYPES } from '@/modules/data-display/config'
import { NAV_LIST, navAriaLabel } from '@/modules/navigation/config'
import { OC_STATE } from '@/modules/input/config'
import { DEVICE_SIZES, SIZES, mobileQuery } from '@/modules/sizing/config'
// Tpes
import type { OCVariantsDevicesConfig, OCVariantsConfig, TransitionConfig } from '@/types/animation'

/** Navbar animation transition configuration */
const NAVBAR_TRANSITION: TransitionConfig = {
  type: 'spring',
  stiffness: 240,
  damping: 26,
  duration: 0.2
}

/** Navbar element animation variants */
const NAVBAR_VARIANTS: OCVariantsConfig = {
  open: {
    width: '100%',
    height: '100vh',
    top: 0,
    border: 0,
    borderRadius: 0
  },
  closed: {
    width: '90%',
    border: '1px solid rgba(128, 128, 128, 0.1)',
    borderRadius: 24
  }
}

/** Header element animation variants for desktop */
const NAVBAR_VARIANTS_DESKTOP: OCVariantsConfig = {
  open: {
    ...NAVBAR_VARIANTS.open,
    transition: NAVBAR_TRANSITION
  },
  closed: {
    height: 80,
    top: 28,
    ...NAVBAR_VARIANTS.closed,
    transition: NAVBAR_TRANSITION
  }
}

/** Header element animation variants for mobile */
const NAVBAR_VARIANTS_MOBILE: OCVariantsConfig = {
  open: {
    ...NAVBAR_VARIANTS.open,
    transition: NAVBAR_TRANSITION
  },
  closed: {
    height: 64,
    top: 16,
    ...NAVBAR_VARIANTS.closed,
    transition: NAVBAR_TRANSITION
  }
}

/** Header element animation variants configuration */
const NAVBAR_DEVICES_CONFIG: OCVariantsDevicesConfig = {
  mobile: NAVBAR_VARIANTS_MOBILE,
  desktop: NAVBAR_VARIANTS_DESKTOP
}

/** Header element animation variants */
const NAV_VARIANTS: OCVariantsConfig = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.1
    }
  }
}

/**
 * The main navbar component of the application
 * @returns The Navbar component
 */
export default function Navbar () {
  /** Used to get the media query state of the window */
  const isMobile = useMediaQuery(mobileQuery)
  /** The header animation variants */
  const navbarVariants = NAVBAR_DEVICES_CONFIG[isMobile ? DEVICE_SIZES.mobile : DEVICE_SIZES.desktop]
  // Animation state
  const [isOpen, toggle] = useCycle(false, true)
  /** The state key of the animation */
  const animationState = isOpen ? OC_STATE.open : OC_STATE.closed
  /** Handle the Menu state */
  const handleToggle = () => { toggle() }
  /** Close the Menu but not open */
  const closeToggle = () => { isOpen && toggle() }

  return (
    <motion.header
      className='fixed left-0 right-0 mx-auto z-70 bg-white'
      variants={navbarVariants}
      animate={animationState}
      initial={false}
    >
      <nav aria-label={navAriaLabel}>
        <div className='w-11/12 h-16 md:h-20 px-6 md:px-10 mx-auto fixed top-4 md:top-7 right-0 left-0 z-60 flex justify-between items-center'>
          <NextLink href={NAV_LIST[0].href} onClick={closeToggle}>
            <Logo
              type={isMobile ? LOGO_TYPES.logomark : LOGO_TYPES.logoname}
              alt={NAV_LIST[0].children}
              size={SIZES.sm}
              priority
            />
          </NextLink>

          <div className='pr-1.5 md:pr-2.5'>
            <MenuButton action={handleToggle} />
          </div>
        </div>

        <motion.div
          className='w-full h-full pt-24 md:pt-32 absolute top-0 left-0'
          variants={NAV_VARIANTS}
          animate={animationState}
          initial={false}
        >
          <div className='h-full overflow-y-auto'>
            <div className='w-11/12 px-8 md:px-10 py-6 md:py-9 mx-auto flex flex-col md:flex-row justify-between md:items-center gap-y-8 md:gap-y-10'>
              <ul className='space-y-8 md:space-y-10'>
                {NAV_LIST.map((option, key) => (
                  <li key={key}>
                    <Link
                      href={option.href}
                      size={SIZES.lg}
                      action={closeToggle}
                    >
                      {option.children}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className='grid gap-y-6'>
                <LinkToContact />
                <LinkEmail />
                <SocialNav />
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}
