// Types
import type { Dimensionable, SizeProps } from './sizing'
import type { Themeable } from './theme'

/** Header properties */
export interface HeaderProps {
  /** Header heading */
  heading: string
  /** Header description */
  description?: string
}

/** Used for header list configuration */
export type HeaderListConfig = ReadonlyArray<HeaderProps>

/** Image extention type */
export type ImageExt = 'svg' | 'jpg' | 'png'

/** Logo component types */
export type LogoType = 'logotype' | 'logoname' | 'logomark'

/** Logo component properties */
export interface LogoProps extends Themeable, SizeProps {
  /** Logo style type */
  type?: LogoType
  /** Logo image alternative text */
  alt?: string
  /** Logo image priority */
  priority?: boolean
}

/** The svg icons of the application */
export type AppIcon = 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'linkedin'

/** The icon component props */
export interface IconProps {
  /** Icon to display */
  name: AppIcon
}

/** The svg icon properties */
export interface SVGIcon extends Dimensionable {
  /** The svg icon path */
  path: string
}

/** Used for url configurations */
export interface URLIcon {
  /** Item name */
  name: AppIcon,
  /** Item URL */
  url: URL
}
