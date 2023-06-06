// Store
import { create } from 'zustand'
// Config
import { OC_STATE } from '../input/config'
// Types
import type { OCState } from '@/types/input'

/** Gobal state properties */
export interface GlobalState {
  /** Navbar menu state */
  menuState: OCState
  /** Used to toggle the Navbar menu state */
  setMenuState: (newState: OCState) => void
}

/** The global store */
export const useGlobalStore = create<GlobalState>((set) => ({
  menuState: OC_STATE.closed,
  setMenuState: (newState) => set(() => ({
    menuState: OC_STATE[newState]
  }))
}))
