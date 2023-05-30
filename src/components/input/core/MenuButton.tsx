// Ainimation
import { motion, useCycle } from 'framer-motion'
// Config
import { OCH_CYCLE, OCH_STATE } from '@/modules/input/config'
// Types
import type { Actionable } from '@/types/input'
import type { OCHVariantsConfig } from '@/types/animation'

/** Animation transition configuration */
const spanTransitions = {
  stiffness: 36,
  damping: 12,
  duration: 0.4,
  ease: 'backOut'
}

/** Header element animation variants */
const SPAN_A_VARIANTS: OCHVariantsConfig = {
  open: {
    right: '0px',
    top: '17px',
    rotate: '45deg',
    transition: {
      ...spanTransitions
    }
  },
  closed: {
    right: '4px',
    top: '14px',
    transition: {
      ...spanTransitions
    }
  },
  hover: {
    right: '4px',
    top: '10px',
    transition: {
      ...spanTransitions
    }
  }
}

/** Header element animation variants */
const SPAN_B_VARIANTS: OCHVariantsConfig = {
  open: {
    left: '0px',
    bottom: '17px',
    rotate: '-45deg',
    transition: {
      ...spanTransitions
    }
  },
  closed: {
    left: '4px',
    bottom: '14px',
    transition: {
      ...spanTransitions
    }
  },
  hover: {
    left: '4px',
    bottom: '10px',
    transition: {
      ...spanTransitions
    }
  }
}

/**
* The main menu button of the application
* @see {@link Actionable} for props definition
* @param Actionable The basic input component props
* @returns The MenuButton component
*/
export default function MenuButton ({ action }: Required<Actionable>) {
  // Button aimation state
  const [buttonState, cycleButton] = useCycle(OCH_STATE.closed, OCH_STATE.open, OCH_STATE.hover)
  /** Check if the menu is closed */
  const isMenuClosed = () => buttonState !== OCH_STATE.open
  /** Handle the animation closed state */
  const handleMouseOut = () => {
    isMenuClosed() && cycleButton(OCH_CYCLE.closed)
  }
  /** Handle the animation open state */
  const handleOpenState = () => {
    action()
    isMenuClosed() ? cycleButton(OCH_CYCLE.open) : cycleButton(OCH_CYCLE.closed)
  }
  /** Handle the animation hover state */
  const handleMouseOver = () => {
    isMenuClosed() && cycleButton(OCH_CYCLE.hover)
  }

  return (
    <button
      className='w-8 md:w-9 h-9 relative [&>span]:w-full [&>span]:h-0.5 [&>span]:absolute [&>span]:bg-secondary'
      onClick={handleOpenState}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <motion.span
        variants={SPAN_A_VARIANTS}
        animate={buttonState}
        initial={false}
      />
      <motion.span
        variants={SPAN_B_VARIANTS}
        animate={buttonState}
        initial={false}
      />
    </button>
  )
}
