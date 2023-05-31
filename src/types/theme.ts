/** Application themes */
export type Theme = 'primary' | 'secondary'

/** Used for theme configuration */
export type ThemeConfig = Readonly<Record<Theme, Theme>>

/** Used for theme style configuration */
export type ThemeStyleConfig = Readonly<Record<Theme, string>>

/** Used for define a theme */
export interface Themeable {
  /** Theme property */
  theme?: Theme
}
