// Store
import { useGlobalStore } from '@/modules/app/store'
import { shallow } from 'zustand/shallow'
// Ainimation
import { motion } from 'framer-motion'
// Config
import { OCH_STATE, OC_STATE } from '@/modules/input/config'
// Types
import type { OCHVariantsConfig, TransitionConfig } from '@/types/animation'
import { OCHState } from '@/types/input'
import { useState } from 'react'

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
  const [buttonMenuState, setButtonMenuState] = useState<OCHState>(OCH_STATE.closed)
  // Animation state
  const [menuState, setMenuState] = useGlobalStore(
    (state) => [state.menuState, state.setMenuState],
    shallow
  )
  /** Check if the menu is closed */
  const isMenuClosed = () => menuState !== OC_STATE.open
  /** Handle the animamenu toggle state */
  const toggleMenu = () => {
    const state = isMenuClosed() ? OC_STATE.open : OC_STATE.closed
    setMenuState(state)
    setButtonMenuState(state)
  }
  /** Handle the mouse over event state */
  const handleMouseOver = () => { isMenuClosed() && setButtonMenuState(OCH_STATE.hover) }
  /** Handle the animation closed state */
  const handleMouseOut = () => { isMenuClosed() && setButtonMenuState(OC_STATE.closed) }

  return (
    <button
      className='w-8 md:w-9 h-9 relative [&>span]:w-full [&>span]:h-0.5 [&>span]:absolute [&>span]:bg-secondary'
      onClick={toggleMenu}
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
