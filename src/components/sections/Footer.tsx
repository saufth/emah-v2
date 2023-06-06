// Components
import Link from '../navigation/core/Link'
import LinkToContact from '../navigation/LinkToContact'
import Logo from '../data-display/core/Logo'
import LinkEmail from '../navigation/LinkEmail'
import NextLink from 'next/link'
// Config
import { NAV_LIST, navAriaLabel } from '@/modules/navigation/config'
import { organization } from '@/modules/app/config'
import { SIZES } from '@/modules/sizing/config'
import { LOGO_TYPES } from '@/modules/data-display/config'

/** The main footer of the application */
export default function Footer () {
  return (
    <footer className='bg-stone-200'>
      <div className='px-section'>
        <div className='max-w-8xl py-16 mx-auto flex flex-col lg:flex-row justify-between gap-y-8'>
          <div className='lg:w-[232px] grid lg:block place-content-center'>
            <NextLink href={NAV_LIST[0].href}>
              <Logo
                type={LOGO_TYPES.logoname}
                alt={NAV_LIST[0].children}
                size={SIZES.sm}
              />
            </NextLink>
          </div>
          <nav aria-label={navAriaLabel}>
            <ul className='w-full flex flex-col lg:flex-row gap-y-4 lg:gap-x-6 text-center'>
              {NAV_LIST.map((option, key) => (
                <li
                  className='last:hidden last:lg:block'
                  key={key}
                >
                  <Link href={option.href} size={SIZES.sm}>
                    {option.children}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='lg:w-[232px] flex justify-center lg:block lg:text-right'>
            <LinkEmail />
          </div>
          <div className='grid place-content-center lg:hidden'>
            <LinkToContact />
          </div>
        </div>
      </div>
      <div>
        <div className='max-w-8xl px-1 py-4 mx-auto text-center'>
          {`Copyright ${new Date().getFullYear()} ${organization}. All rights reserved.`}
        </div>
      </div>
    </footer>
  )
}
