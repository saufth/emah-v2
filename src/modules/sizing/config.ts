// Types
import type { SizeConfig, SizeDeviceConfig } from '@/types/sizing'

/** The default sizes of the aplication */
export const DEVICE_SIZES: SizeDeviceConfig = {
  mobile: 'mobile',
  desktop: 'desktop'
}

/** The default sizes of the aplication */
export const SIZES: SizeConfig = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
}

/** Media query used to check for mobile size */
export const mobileQuery = '(max-width: 768px)'

/** Media query used to check for desktop size */
export const desktopQuery = '(min-width: 768px)'
