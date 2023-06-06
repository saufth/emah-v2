// Components
import Image from 'next/image'
// import LinkToContact from '@/components/navigation/LinkToContact'
import LinkToAbout from '@/components/navigation/LinkToAbout'
import LinkToSolutions from '@/components/navigation/LinkToSolutions'
import Loading from './loading'
import Showcase from '@/components/data-display/Showcase'
// Utils
import dynamic from 'next/dynamic'
// Config
import { APP_ROUTES } from '@/modules/navigation/config'
import { picturesPath, IMG_EXT, PICTURES_SIZE } from '@/modules/data-display/config'
import { SOLUTIONS, organization } from '@/modules/app/config'
// Types
import type { HeaderProps, PictureType } from '@/types/data-dislay'

// Dynamic imports
const Hero = dynamic(() => import('@/components/sections/Hero'), {
  loading: () => <Loading />,
  ssr: false
})

/** The headers configuration for solutions section */
const SOLUTIONS_HEADERS: ReadonlyArray<HeaderProps> = [
  {
    heading: SOLUTIONS[0],
    description: 'Impulsamos a las marcas a la dirección adecuada. Creamos lazos de alianza con negocios cuyo objetivo es crecer: aquellos que buscan un cambio para progresar. Ayudamos a recuperar presencia en los medios, a lograr sus metas y a asegurar un crecimiento exponencial. ¡Y solo es el comienzo!'
  },
  {
    heading: SOLUTIONS[1],
    description: 'Construimos marcas sobresalientes, creamos el ADN de marca y desarrollamos sistemas funcionales de comunicación visual. Le damos forma al carácter de tu marca, una imagen atractiva y una identidad única. Además, renovamos marcas existentes.'
  },
  {
    heading: SOLUTIONS[2],
    description: 'Creemos que una página web le da cuerpo a la identidad de tu marca. Es por eso que desarrollamos sistemas responsivos con un propósito más grande que solo informar. Buscamos crear sitios web que sean reactivos al cambio, que generen una experiencia positiva y que muevan tus emociones.'
  }
]

/** The solutions section id */
const solutionsID = APP_ROUTES[2]

/** The home page of the application */
export default function HomePage () {
  return (
    <main>
      <Hero />

      <section className='px-5% py-section space-y-10 bg-stone-50'>
        <header className='flex justify-center'>
          <h2 className='text-tagline'>
            NUESTRO PROPOSITO
          </h2>
        </header>
        <p className='h2s text-center'>
          Impulsamos empresas con visión, a fin de crear un legado de progreso y verdad.
        </p>
        <Image
          src={`${picturesPath}purpose.${IMG_EXT.jpg}`}
          alt={organization}
          className='w-full h-auto rounded-3xl'
          width={PICTURES_SIZE.width}
          height={PICTURES_SIZE.height}
        />
        <div className='flex justify-center'>
          <LinkToAbout />
        </div>
      </section>

      <section className='px-5% py-section space-y-12 lg:space-y-24'>
        <header className='space-y-8 text-center lg:text-left'>
          <h2 className='text-tagline'>
            NUESTRAS SOLUCIONES
          </h2>
          <p className='h2'>
            Los mejores resultados se logran cuando la ejecución del branding
            y el marketing empujan hacia el mismo destino.
          </p>
          <div className='flex justify-center md:justify-start'>
            <LinkToSolutions />
          </div>
        </header>

        {SOLUTIONS_HEADERS.map((solution, key) => {
          const imageName = `${solutionsID}${key}` as PictureType
          const showcaseID = solution.heading.toLowerCase()

          return (
            <Showcase
              heading={solution.heading}
              description={solution.description}
              image={{
                name: imageName,
                ext: IMG_EXT.jpg,
                alt: solution.heading,
                ...PICTURES_SIZE
              }}
              href={`/${solutionsID}#${showcaseID}`}
              reverse={key % 2 !== 0}
              key={key}
            />
          )
        })}
      </section>
    </main>
  )
}
