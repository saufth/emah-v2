// Types
import type { Author } from 'next/dist/lib/metadata/types/metadata-types'

/** The application domain name */
export const domain = process.env.NEXT_PUBLIC_DOMAIN

/** The base URL of the aplication */
export const baseUrl: URL = new URL(`https://${domain}`)

/** The project author */
export const authors: Author = {
  name: 'Sauftdev',
  url: baseUrl
}

/** The name of the organization */
export const organization = 'Emah'

/** The alternative name of the organization */
export const organizationAlt = 'Expert Marketing Associates & Hacks'

/** The head title of the application */
export const organizationTitle = `${organization} – ${organizationAlt}`

export const description = 'Hacemos Marketing Estratégico'

/** Organization solutions */
export const SOLUTIONS: ReadonlyArray<string> = [
  'Marketing',
  'Branding',
  'Development',
  'Design'
]

/** The keyword list of the application */
export const keywords = [
  organization.toLowerCase(),
  ...SOLUTIONS.map((service) => service.toLowerCase())
]

/** Theme color of the application */
export const themeColor = '#FF6700'
