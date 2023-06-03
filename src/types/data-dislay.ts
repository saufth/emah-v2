// Types
import type { Dimensionable, SizeProps } from './sizing'
import type { Key } from 'react'
import type { Nameable } from './common'
import type { Themeable } from './theme'

/** Video names of the application */
export type VideoApp = 'hero'

/** The video component properties */
export interface VideoProps extends Nameable<VideoApp> {}

/** Image extention type */
export type ImageExt = 'svg'
  | 'jpg'
  | 'png'

/** Logo component types */
export type LogoType = 'logotype'
  | 'logoname'
  | 'logomark'

/** The pictures used on the application */
export type PictureType = 'about'
  | 'solutions0'
  | 'solutions1'
  | 'solutions2'
  | 'solutions3'

/** The image component properties */
export interface ImageProps extends Nameable<PictureType>, Dimensionable {
  /** The image extention */
  ext: ImageExt
  /** The image alternative text */
  alt: string
  /** The image priority */
  priority?: boolean
}

/** Logo component properties */
export interface LogoProps extends Themeable, SizeProps, Pick<ImageProps, 'alt' | 'priority'> {
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

export interface ShowcaseProps extends HeaderProps {
  /** The image properties */
  image: ImageProps
  /** Used to invert the order of the content */
  reverse: boolean
  /** The react key attribite */
  key?: Key | null
}
