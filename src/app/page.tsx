// Components
// import Image from 'next/image'
import dynamic from 'next/dynamic'
import Loading from './loading'
// import LinkToContact from '@/components/navigation/LinkToContact'
// Config
// import { SOLUTIONS, description } from '@/modules/app/config'
// import { IMG_EXT, picturesPath } from '@/modules/data-display/config'
// import { APP_ROUTES } from '@/modules/navigation/config'
// import { THEMES } from '@/modules/theme/config'
// Types
// import type { HeaderListConfig } from '@/types/data-dislay'

/** The headers configuration for solutions section */
// const SOLUTIONS_HEADERS: HeaderListConfig = [
//   {
//     heading: SOLUTIONS[0],
//     description: 'Impulsamos a las marcas a la dirección adecuada. Creamos lazos de alianza con negocios cuyo objetivo es crecer: aquellos que buscan un cambio para progresar. Ayudamos a recuperar presencia en los medios, a lograr sus metas y a asegurar un crecimiento exponencial. ¡Y solo es el comienzo!'
//   },
//   {
//     heading: SOLUTIONS[1],
//     description: 'Construimos marcas sobresalientes, creamos el ADN de marca y desarrollamos sistemas funcionales de comunicación visual. Le damos forma al carácter de tu marca, una imagen atractiva y una identidad única. Además, renovamos marcas existentes.'
//   },
//   {
//     heading: SOLUTIONS[2],
//     description: 'Creemos que una página web le da cuerpo a la identidad de tu marca. Es por eso que desarrollamos sistemas responsivos con un propósito más grande que solo informar. Buscamos crear sitios web que sean reactivos al cambio, que generen una experiencia positiva y que muevan tus emociones.'
//   },
//   {
//     heading: SOLUTIONS[3],
//     description: 'No es tan simple con solo tener un logo. Para ser distinguido, es necesario establecer algunos parámetros que se usen siempre: un concepto de diseño. Definimos elementos visuales, colores y tipografía. Creamos presentaciones visuales únicas y consistentes para marcas sobresalientes.'
//   }
// ]

const Hero = dynamic(() => import('@/components/sections/Hero'), {
  loading: () => <Loading />,
  ssr: false
})

/** The home page of the application */
export default function HomePage () {
  return (
    <main>
      <Hero />

      <section className='px-5% py-36 text-center space-y-6'>
        <header>
          <h2 className='text-base text-transparent bg-clip-text bg-gradient'>
            NUESTRO PROPOSITO
          </h2>
        </header>
        <p className='font-primary-bold text-8xl leading-tight tracking-wide'>
          Impulsamos empresas con visión, a fin de crear un legado de progreso y verdad.
        </p>
      </section>

      {/* <section
        id={APP_ROUTES[1]}
        className='py-24 space-y-12 lg:space-y-24'
      >
        <div className='flex flex-col-reverse lg:flex-row items-center gap-y-12 lg:gap-0'>
          <Image
            src={`${picturesPath}${APP_ROUTES[1]}.${IMG_EXT.jpg}`}
            alt={APP_ROUTES[1]}
            className='lg:w-11/20 h-auto hidden lg:block'
            width={1260}
            height={840}
          />
          <header className='lg:w-9/20 px-5% space-y-6 text-center lg:text-left'>
            <h2>Nuestras soluciones</h2>
            <p className='text-lg text-primary leading-relaxed'>
              Nos importa mucho entender lo que necesitas y cómo lo necesitas, para poder ofrecerte
              soluciones a tu medida. Por ello, ponemos a tu alcance los siguientes servicios.
            </p>
            <div className='grid md:block place-content-center'>
              <LinkToContact />
            </div>
          </header>
        </div>

        <div className='px-5'>
          {SOLUTIONS_HEADERS.map((service, key) => (
            <article className='py-12 lg:py-6 flex flex-col-reverse lg:flex-row justify-between items-start gap-y-6 lg:gap-x-12 border-t-2 first:border-t-0 border-primary/40' key={key}>
              <header className='lg:w-xl space-y-6 lg:space-y-8 text-center lg:text-left'>
                <h3>
                  {service.heading}
                </h3>
                <p className='text-primary leading-relaxed'>
                  {service.description}
                </p>
              </header>
              <Image
                src={`${picturesPath}service${key}.${IMG_EXT.jpg}`}
                alt={service.heading}
                className='lg:max-w-lg h-auto'
                width={1260}
                height={840}
              />
            </article>
          ))}
        </div>
      </section>

      <section
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
