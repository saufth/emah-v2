// Config
import { organization } from '../app/config'
// Types
import type { AppRouteConfig, NavConfig } from '@/types/navigation'

/** The application route names configuration */
export const APP_ROUTES: AppRouteConfig = [
  'home',
  'about',
  'solutions',
  'services',
  'why',
  'contact'
]

/** The main navigation configuration of the application */
export const NAV: NavConfig = [
  { // Page route
    children: 'Home',
    href: '/' // The home reference always is '/'
  },
  { // Section route
    children: 'About Us',
    href: `/#${APP_ROUTES[1]}`
  },
  { // Section route
    children: 'Solutions',
    href: `/#${APP_ROUTES[2]}`
  },
  { // Section route
    children: 'Services',
    href: `/#${APP_ROUTES[3]}`
  },
  { // Page route
    children: 'Reason why',
    href: `/${APP_ROUTES[4]}`
  },
  { // Page route
    children: 'Contact us',
    href: `/${APP_ROUTES[5]}`
  }
]

/** The aria label for navigation directories */
export const navAriaLabel = `${organization} directory`
