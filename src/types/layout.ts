// Types
import type { ReactNode } from 'react'

/** Used to define a geeric parent element */
export interface Parent<T = ReactNode> {
  /** The child element of parent component */
  children?: T
}

/** Used to define an id to a element */
export interface ID {
  /** The element id property */
  id?: string
}
