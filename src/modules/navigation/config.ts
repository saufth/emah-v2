// Config
import { organization } from '../app/config'
// Types
import type { AppRouteConfig, NavConfig } from '@/types/navigation'

/** The application route names configuration */
export const APP_ROUTES: AppRouteConfig = [
  'home',
  'purpose',
  'about',
  'solutions',
  'services',
  'why',
  'contact'
]

/** The main navigation configuration of the application */
export const NAV: NavConfig = [
  { // Page route
    children: 'Inicio',
    href: '/' // The home reference always is '/'
  },
  { // Section route
    children: 'Propósito',
    href: `/#${APP_ROUTES[1]}`
  },
  { // Page route
    children: 'Nosotros',
    href: `/#${APP_ROUTES[2]}`
  },
  { // Section route
    children: 'Soluciones',
    href: `/#${APP_ROUTES[3]}`
  },
  { // Page route
    children: 'Servicios',
    href: `/#${APP_ROUTES[4]}`
  },
  { // Page route
    children: 'Razón de ser',
    href: `/${APP_ROUTES[5]}`
  },
  { // Page route
    children: 'Contact us',
    href: `/${APP_ROUTES[6]}`
  }
]

/** The aria label for navigation directories */
export const navAriaLabel = `${organization} directory`
