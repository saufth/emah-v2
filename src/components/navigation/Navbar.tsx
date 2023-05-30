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
import { NAV, navAriaLabel } from '@/modules/navigation/config'
import { OC_STATE } from '@/modules/input/config'
import { DEVICE_SIZES, SIZES, mobileQuery } from '@/modules/sizing/config'
// Tpes
import type { OCVariantsConfig } from '@/types/animation'
import type { SizeDevice } from '@/types/sizing'

/** Header animation transition configuration */
const headerTransitions = {
  type: 'spring',
  stiffness: 240,
  damping: 26,
  ease: 'easeIn'
}

/** Header element animation variants for desktop */
const HEADER_VARIANTS_DESKTOP: OCVariantsConfig = {
  open: {
    width: '100%',
    height: '100vh',
    top: 0,
    border: 0,
    borderRadius: 0,
    transition: {
      ...headerTransitions,
      duration: 0.8,
      delay: 0.06,
      border: {
        delay: 0
      },
      borderRadius: {
        duration: 0.06,
        ease: 'easeOut'
      }
    }
  },
  closed: {
    width: '91.666667%',
    height: 80,
    top: 28,
    border: '1px solid rgba(128, 128, 128, 0.1)',
    borderRadius: 9999,
    transition: {
      ...headerTransitions,
      duration: 0.06,
      borderRadius: {
        duration: 0.8,
        delay: 0.06,
        ease: 'easeOut'
      }
    }
  }
}

/** Header element animation variants for mobile */
const HEADER_VARIANTS_MOBILE: OCVariantsConfig = {
  open: {
    width: '100%',
    height: '100vh',
    top: 0,
    border: 0,
    borderRadius: 0,
    transition: {
      ...headerTransitions,
      duration: 0.8,
      delay: 0.06,
      border: {
        duration: 0.06,
        delay: 0
      },
      borderRadius: {
        duration: 0.06,
        delay: 0,
        ease: 'easeOut'
      }
    }
  },
  closed: {
    width: '90%',
    height: 64,
    top: 16,
    border: '1px solid rgba(128, 128, 128, 0.1)',
    borderRadius: 9999,
    transition: {
      ...headerTransitions,
      duration: 0.06,
      borderRadius: {
        duration: 0.8,
        delay: 0.06,
        ease: 'easeOut'
      }
    }
  }
}

/** Header element animation variants configuration */
const HEADER_VARIANTS: Readonly<Record<SizeDevice, OCVariantsConfig>> = {
  mobile: HEADER_VARIANTS_MOBILE,
  desktop: HEADER_VARIANTS_DESKTOP
}

/** Nav animation transition configuration */
const navTransitions = {
  ease: 'easeOut',
  duration: 0.6
}

/** Header element animation variants */
const NAV_VARIANTS: OCVariantsConfig = {
  open: {
    opacity: 1,
    transition: {
      ...navTransitions
    }
  },
  closed: {
    opacity: 0,
    transition: {
      ...navTransitions
    }
  }
}

/**
 * The main navbar component of the application
 * @returns The Navbar component
 */
export default function Navbar () {
  /** Used for get the state of the window size */
  const isMobile = useMediaQuery(mobileQuery)
  /** The header animation variants */
  const headerVariants = HEADER_VARIANTS[isMobile ? DEVICE_SIZES.mobile : DEVICE_SIZES.desktop]
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
      variants={headerVariants}
      animate={animationState}
      initial={false}
    >
      <nav aria-label={navAriaLabel}>
        <div className='w-11/12 h-16 md:h-20 px-8 md:px-10 mx-auto fixed top-4 md:top-7 right-0 left-0 z-60 flex justify-between items-center'>
          <NextLink href={NAV[0].href} onClick={closeToggle}>
            <Logo
              type={isMobile ? LOGO_TYPES.logomark : LOGO_TYPES.logoname}
              alt={NAV[0].children}
              size={SIZES.sm}
              priority
            />
          </NextLink>

          <div className='pr-1'>
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
            <div className='w-11/12 px-8 md:px-10 pb-9 mx-auto flex flex-col md:flex-row justify-between md:items-center gap-y-8'>
              <ul className='space-y-8'>
                {NAV.map((option, key) => (
                  <li className='first:hidden last:hidden' key={key}>
                    <Link
                      href={option.href}
                      size={SIZES.lg}
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
