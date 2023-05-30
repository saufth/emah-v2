// Components
import LinkButton from './core/LinkButton'
// Config
import { NAV } from '@/modules/navigation/config'
// Types
import type { Themeable } from '@/types/theme'

/**
 * The main link to services section component
 * @see {@link Themeable} for props specifications
 * @param Themeable The component props
 * @returns The LinkToServices component
 */
export default function LinkToServices ({ theme }: Themeable) {
  return (
    <LinkButton href={NAV[1].href} theme={theme}>
      {NAV[1].children}
    </LinkButton>
  )
}
