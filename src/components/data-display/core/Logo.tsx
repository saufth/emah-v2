// Components
import Image from 'next/image'
// Config
import { IMG_EXT, LOGO_TYPES, logosPath } from '@/modules/data-display/config'
import { organization } from '@/modules/app/config'
import { THEMES } from '@/modules/theme/config'
// Types
import type { Dimensionable, Size } from '@/types/sizing'
import type { LogoProps, LogoType } from '@/types/data-dislay'

/** Logo component sizes configuration */
const LOGO_SIZES: Readonly<Record<LogoType, Dimensionable>> = {
  logotype: {
    width: 1000,
    height: 234.793
  },
  logoname: {
    width: 1000,
    height: 234.793
  },
  logomark: {
    width: 1000,
    height: 931.169
  }
}

/** Logo component size styles configuration */
const LOGO_SIZE_STYLES: Readonly<Record<Size, string>> = {
  sm: 'h-5 md:h-7',
  md: 'h-16',
  lg: 'h-24'
}

/**
 * The main logotype of the application
 * @see {@link LogoProps} for props definition
 * @param LogoProps The logo component props
 * @returns The Logo component
 */
export default function Logo ({
  type = LOGO_TYPES.logotype,
  theme = THEMES.primary,
  alt = organization,
  size,
  priority
}: LogoProps) {
  const imageSrc = `${logosPath}${type}-${theme}.${IMG_EXT.svg}`
  const sizeStyle = size ? `w-auto ${LOGO_SIZE_STYLES[size]}` : 'w-full h-auto'

  return (
    <Image
      src={imageSrc}
      alt={alt}
      className={sizeStyle}
      width={LOGO_SIZES[type].width}
      height={LOGO_SIZES[type].height}
      priority={priority}
    />
  )
}
