// Components
import Logo from '@/components/data-display/core/Logo'
// Config
import { THEMES } from '@/modules/theme/config'

/** The main loading component of application */
export default function Loading () {
  return (
    <div className='w-screen h-screen px-12 fixed top-0 left-0 z-80 overflow-hidden grid place-content-center gap-y-2 bg-gradient-to-r from-primary-dark to-primary-light'>
      <div className='max-w-xs'>
        <Logo
          alt='Loading...'
          theme={THEMES.secondary}
          priority
        />
      </div>
      <span className='font-primary-light text-lg text-white text-right'>
        Cargando...
      </span>
    </div>
  )
}
