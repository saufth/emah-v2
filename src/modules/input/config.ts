// Types
import type { OCHCycleConfig } from '@/types/animation'
import type { ButtonTypesConfig, OCHStateConfig, OCStateConfig } from '@/types/input'

/** Button types configuration */
export const BUTTON_TYPES: ButtonTypesConfig = {
  button: 'button',
  submit: 'submit',
  reset: 'reset'
}

/** The open-closed state configuration */
export const OC_STATE: OCStateConfig = {
  open: 'open',
  closed: 'closed'
}

/** The open-closed-hover state configuration */
export const OCH_STATE: OCHStateConfig = {
  ...OC_STATE,
  hover: 'hover'
}

/** Button animation cycles configuration */
export const OCH_CYCLE: OCHCycleConfig = {
  closed: 0,
  open: 1,
  hover: 2
}
