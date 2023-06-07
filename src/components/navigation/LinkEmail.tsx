// Components
import Link from './core/Link'
// Config
import { domain } from '@/modules/app/config'
import { THEMES } from '@/modules/theme/config'
// Types
import type { Themeable } from '@/types/theme'

/** The email of the organizacion */
const email = `contacto@${domain}`
/** The email hypertext reference */
const mailto = `mailto:contacto@${domain}`

/**
 * The main link to redirect to the default email provider interface of the user
 * @see {@link Themeable} for props specifications
 * @param Themeable The component props
 * @returns The LinkEmail component
 */
export default function LinkEmail ({ theme = THEMES.primary }: Themeable) {
  return (
    <div className='max-w-fit'>
      <Link
        href={mailto}
        theme={theme}
        rel={['noopener', 'noreferrer']}
        underline
      >
        {email}
      </Link>
    </div>
  )
}
