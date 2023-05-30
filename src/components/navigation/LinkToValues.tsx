// Components
import LinkButton from './core/LinkButton'
// Config
import { NAV } from '@/modules/navigation/config'
// Types
import type { Themeable } from '@/types/theme'

/**
 * The main link to values section component
 * @see {@link Themeable} for props specifications
 * @param Themeable The component props
 * @returns The LinkToValues component
 */
export default function LinkToValues ({ theme }: Themeable) {
  return (
    <LinkButton href={NAV[3].href} theme={theme}>
      {NAV[3].children}
    </LinkButton>
  )
}
