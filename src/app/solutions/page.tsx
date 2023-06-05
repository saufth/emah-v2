// Components
import Image from 'next/image'
import LinkToAbout from '@/components/navigation/LinkToAbout'
import LinkToSolutions from '@/components/navigation/LinkToSolutions'
import Loading from '../loading'
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
  },
  {
    heading: SOLUTIONS[3],
    description: 'No es tan simple con solo tener un logo. Para ser distinguido, es necesario establecer algunos parámetros que se usen siempre: un concepto de diseño. Definimos elementos visuales, colores y tipografía. Creamos presentaciones visuales únicas y consistentes para marcas sobresalientes.'
  }
]

/** The solutions section id */
const solutionsID = APP_ROUTES[1]

/** The home page of the application */
export default function HomePage () {
  return (
    <main>
      <Hero />

      <section className='px-5% py-36 md:py-44 text-center space-y-10 bg-stone-50'>
        <header>
          <h2 className='text-tagline-lg'>
            NUESTRO PROPOSITO
          </h2>
        </header>
        <p className='h2s'>
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

      <section className='px-5% py-24 space-y-12 lg:space-y-24'>
        <header className='space-y-8 text-center lg:text-left'>
          <h2 className='text-tagline-md'>
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

        <div className='px-5'>
          {SOLUTIONS_HEADERS.map((solution, key) => {
            const imageName = `${solutionsID}${key}` as PictureType

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
                reverse={key % 2 !== 0}
                key={key}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}