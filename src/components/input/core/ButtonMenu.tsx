// Store
import { useGlobalStore } from '@/modules/app/store'
import { shallow } from 'zustand/shallow'
// Ainimation
import { motion } from 'framer-motion'
// Config
import { OCH_STATE } from '@/modules/input/config'
// Types
import type { OCHVariantsConfig, TransitionConfig } from '@/types/animation'

/** Animation transition configuration */
const transition: TransitionConfig = {
  stiffness: 64,
  damping: 12,
  duration: 0.24,
  ease: 'easeOut'
}

/** Header element animation variants */
const SPAN_A_VARIANTS: OCHVariantsConfig = {
  open: {
    right: '0px',
    top: '17px',
    rotate: '45deg',
    transition
  },
  closed: {
    right: '4px',
    top: '14px',
    transition
  },
  hover: {
    right: '4px',
    top: '10px',
    transition: {
      ...transition,
      duration: 0.16
    }
  }
}

/** Header element animation variants */
const SPAN_B_VARIANTS: OCHVariantsConfig = {
  open: {
    left: '0px',
    bottom: '17px',
    rotate: '-45deg',
    transition
  },
  closed: {
    left: '4px',
    bottom: '14px',
    transition
  },
  hover: {
    left: '4px',
    bottom: '10px',
    transition: {
      ...transition,
      duration: 0.16
    }
  }
}

/**
* The main menu button of the application
* @returns The ButtonMenu component
*/
export default function ButtonMenu () {
  // Animation state
  const [buttonMenuState, setButtonMenuState, toggleMenuState] = useGlobalStore(
    (state) => [state.buttonMenuState, state.setButtonMenuState, state.toggleMenuState],
    shallow
  )
  /** Check if the menu is closed */
  const isMenuClosed = () => buttonMenuState !== OCH_STATE.open
  /** Handle the animation closed state */
  const handleMouseOut = () => {
    isMenuClosed() && setButtonMenuState(OCH_STATE.closed)
  }
  /** Handle the animation open state */
  const handleOpenState = () => {
    toggleMenuState()
    isMenuClosed() ? setButtonMenuState(OCH_STATE.open) : setButtonMenuState(OCH_STATE.closed)
  }
  /** Handle the animation hover state */
  const handleMouseOver = () => {
    isMenuClosed() && setButtonMenuState(OCH_STATE.hover)
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
        animate={buttonMenuState}
        initial={false}
      />
      <motion.span
        variants={SPAN_B_VARIANTS}
        animate={buttonMenuState}
        initial={false}
      />
    </button>
  )
}
