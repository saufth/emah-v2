// Components
import Image from 'next/image'
// import LinkToContact from '@/components/navigation/LinkToContact'
import LinkToSolutions from '@/components/navigation/LinkToSolutions'
import Loading from './loading'
import Showcase from '@/components/data-display/Showcase'
// Utils
import dynamic from 'next/dynamic'
// Config
import { APP_ROUTES } from '@/modules/navigation/config'
import { picturesPath, IMG_EXT, PICTURES_SIZE } from '@/modules/data-display/config'
import { SOLUTIONS } from '@/modules/app/config'
// Types
import type { HeaderListConfig, PictureType } from '@/types/data-dislay'
import LinkToServices from '@/components/navigation/LinkToServices'
// Dynamic imports
const Hero = dynamic(() => import('@/components/sections/Hero'), {
  loading: () => <Loading />,
  ssr: false
})

/** The headers configuration for solutions section */
const SOLUTIONS_HEADERS: HeaderListConfig = [
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
/** The purpose section id */
const purposeID = APP_ROUTES[1]
/** The solutions section id */
const solutionsID = APP_ROUTES[3]

/** The home page of the application */
export default function HomePage () {
  return (
    <main>
      <Hero />

      <section
        id={purposeID}
        className='px-5% py-36 md:py-44 text-center space-y-10 bg-stone-50'
      >
        <header>
          <h2 className='text-sm md:text-base text-stone-500'>
            NUESTRO PROPOSITO
          </h2>
        </header>
        <p className='font-primary-bold text-4xl md:text-8xl leading-tight md:leading-snug tracking-wide'>
          Impulsamos empresas con visión, a fin de crear un legado de progreso y verdad.
        </p>
        <Image
          src={`${picturesPath}${purposeID}.${IMG_EXT.jpg}`}
          alt={solutionsID}
          className='w-full h-auto rounded-3xl'
          width={PICTURES_SIZE.width}
          height={PICTURES_SIZE.height}
        />
        <div className='flex justify-center'>
          <LinkToSolutions />
        </div>
      </section>

      <section
        id={solutionsID}
        className='px-5% py-24 space-y-12 lg:space-y-24'
      >
        <header className='space-y-6 text-center lg:text-left'>
          <h2 className='text-base md:text-lg text-stone-500'>
            Nuestras soluciones
          </h2>
          <p className='font-primary-bold text-4xl md:text-7xl'>
            Convertirnos en aliado estratégico en el éxito de nuestros clientes y socios.
          </p>
          <div className='flex justify-center md:justify-start'>
            <LinkToServices />
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

      {/* <section
        id={APP_ROUTES[2]}
        className='py-24 md:py-36 px-5% space-y-12 lg:space-y-20 text-white bg-gradient-to-br from-primary via-primary-light to-primary-light'
      >
        <header className='text-center'>
          <h2>
            Acerca de nosotros
          </h2>
        </header>

        <div className='lg:flex lg:justify-center lg:gap-x-36 space-y-12 lg:space-y-0 [&>article]:lg:w-md [&>article]:space-y-4 text-center lg:text-left'>
          <article>
            <h3>Misión</h3>
            <p>
              En DISTRIBUIDORA EMPRESARIAL POTENCIA, proporcionamos soluciones de logística
              y transporte efectivas y eficientes, siendo un socio estratégico para nuestros
              clientes.
            </p>
          </article>
          <article>
            <h3>Visión</h3>
            <p>
              optimizando de manera innovadora los recursos y caminando con firmeza hacia el
              futuro en la industria de la logística y transporte.
            </p>
          </article>
        </div>

        <div className='grid place-content-center'>
          <LinkToContact theme={THEMES.secondary} />
        </div>
      </section> */}
    </main>
  )
}
