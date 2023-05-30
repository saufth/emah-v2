// Components
import LinkButton from './core/LinkButton'
// Config
import { NAV } from '@/modules/navigation/config'
// Types
import type { Themeable } from '@/types/theme'

/**
 * The main link to about section
 * @see {@link Themeable} for props specifications
 * @param Themeable The component props
 * @returns The LinkToAbout component
 */
export default function LinkToAbout ({ theme }: Themeable) {
  return (
    <LinkButton href={NAV[2].href} theme={theme}>
      {NAV[2].children}
    </LinkButton>
  )
}
