// Components
import Link from './core/Link'
import LinkEmail from './LinkEmail'
import LinkToContact from './LinkToContact'
// Hooks
import useDimensions from '../../modules/sizing/hooks/useDimensions'
// Animation
import { motion } from 'framer-motion'
// Config
import { NAV, navAriaLabel } from '@/modules/navigation/config'
import { OC_STATE } from '@/modules/input/config'
import { SIZES } from '@/modules/sizing/config'
// Types
import type { MenuProps } from '@/types/navigation'
import type { OCVariantsConfig } from '@/types/animation'

/** Menu animation variants */
const MENU_VARIANTS: OCVariantsConfig = {
  open: {
    opacity: 1,
    height: '100vh',
    transition: {
      delay: 0.3
    }
  },
  closed: {
    opacity: 0,
    height: 0
  }
}

/** Background animation variants */
const BG_VARIANTS: OCVariantsConfig = {
  open: (width = 1366) => ({
    clipPath: `circle(${width * 2}px at 100% 0px)`,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0px)',
    opacity: 1,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

/**
 * The main menu component of the application
 * @returns The Menu component
 */
export default function Menu ({ isOpen, action }: MenuProps) {
  // Animation
  const { width } = useDimensions()

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? OC_STATE.open : OC_STATE.closed}
      custom={width}
    >
      <motion.ul
        aria-label={navAriaLabel}
        className='w-full h-screen pt-4 fixed top-0 left-0 z-50 overflow-hidden grid place-content-center gap-y-6 text-primary-light text-center'
        variants={MENU_VARIANTS}
      >
        <div className='text-sm'>
          Menu
        </div>

        {NAV.map((option, key) => (
          option.href !== NAV[5].href
            ? (
              <li onClick={action} key={key}>
                <Link href={option.href} size={SIZES.lg}>
                  {option.children}
                </Link>
              </li>
              )
            : <LinkToContact key={key} />
        ))}

        <LinkEmail />
      </motion.ul>

      <motion.div
        className='w-full h-screen fixed top-0 z-50 bg-secondary'
        variants={BG_VARIANTS}
      />
    </motion.nav>
  )
}
