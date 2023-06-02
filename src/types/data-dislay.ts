// Types
import type { Nameable } from './common'
import type { Dimensionable, SizeProps } from './sizing'
import type { Themeable } from './theme'

/** Video names of the application */
export type VideoApp = 'hero'

/** The video component properties */
export interface VideoProps extends Nameable<VideoApp> {}

/** Image extention type */
export type ImageExt = 'svg' | 'jpg' | 'png'

/** Logo component types */
export type LogoType = 'logotype' | 'logoname' | 'logomark'

export interface ImageProps {
  /** The source of the image */
  src: string
  /** Logo image alternative text */
  alt?: string
  /** Logo image priority */
  priority?: boolean
}

/** Logo component properties */
export interface LogoProps extends Themeable, SizeProps, Omit<ImageProps, 'src'> {
  /** Logo style type */
  type?: LogoType
}

/** The svg icons of the application */
export type AppIcon = 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'linkedin'

/** The icon component props */
export interface IconProps extends Nameable<AppIcon> {}

/** The svg icon properties */
export interface SVGIcon extends Dimensionable {
  /** The svg icon path */
  path: string
}

/** Used for url configurations */
export interface URLIcon extends Nameable<AppIcon> {
  /** Item URL */
  url: URL
}

/** Header properties */
export interface HeaderProps {
  /** Header heading */
  heading: string
  /** Header description */
  description?: string
}

/** Used for header list configuration */
export type HeaderListConfig = ReadonlyArray<HeaderProps>
