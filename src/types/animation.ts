// Types
import type { OCHState, OCState } from '@/types/input'
import type { Variant } from 'framer-motion'

/** Used for open-closed state animation variants configuration */
export type OCVariantsConfig = Readonly<Record<OCState, Variant>>

/** Used for open-closed-hover state animation variants configuration */
export type OCHVariantsConfig = Readonly<Record<OCHState, Variant>>

/** Used for open-closed-hover state animation configuration */
export type OCHCycleConfig = Readonly<Record<OCHState, number>>
