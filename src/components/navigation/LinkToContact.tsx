// Components
import LinkButton from './core/LinkButton'
// Config
import { NAV } from '@/modules/navigation/config'
// Types
import type { Themeable } from '@/types/theme'

/**
 * The main link to contact page
 * @see {@link Themeable} for props specifications
 * @param Themeable The component props
 * @returns The LinkToContact component
 */
export default function LinkToContact ({ theme }: Themeable) {
  return (
    <LinkButton href={NAV[6].href} theme={theme}>
      {NAV[6].children}
    </LinkButton>
  )
}
