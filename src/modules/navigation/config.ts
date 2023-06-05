// Config
import { organization } from '../app/config'
// Types
import type { AppRoute, Navigable } from '@/types/navigation'

/** The application route names configuration */
export const APP_ROUTES: ReadonlyArray<AppRoute> = [
  'home',
  'about',
  'solutions',
  'contact'
]

/** The home navigation configuration */
export const HOME_NAV: Readonly<Navigable> = {
  children: 'Inicio',
  href: '/' // The home reference always is '/'
}

/** The about us page navigation configuration */
export const ABOUT_NAV: Readonly<Navigable> = {
  children: 'Nosotros',
  href: `/#${APP_ROUTES[1]}`
}

/** The solutions page navigation configuration */
export const SOLUTIONS_NAV: Readonly<Navigable> = {
  children: 'Soluciones',
  href: `/#${APP_ROUTES[2]}`
}

/** The contact page navigation configuration */
export const CONTACT_NAV: Readonly<Navigable> = {
  children: 'Contactános',
  href: `/${APP_ROUTES[3]}`
}

/** The main navigation configuration of the application */
export const NAV_LIST: ReadonlyArray<Readonly<Navigable>> = [
  HOME_NAV,
  ABOUT_NAV,
  SOLUTIONS_NAV,
  CONTACT_NAV
]

/** The aria label for navigation directories */
export const navAriaLabel = `${organization} directory`
