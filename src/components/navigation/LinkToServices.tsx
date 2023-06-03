// Components
import LinkButton from './core/LinkButton'
// Config
import { NAV } from '@/modules/navigation/config'
// Types
import type { Themeable } from '@/types/theme'

/**
 * The main link to services page component
 * @see {@link Themeable} for props specifications
 * @param Themeable The component props
 * @returns The LinkToServices component
 */
export default function LinkToServices ({ theme }: Themeable) {
  return (
    <LinkButton href={NAV[4].href} theme={theme}>
      Saber más
    </LinkButton>
  )
}
