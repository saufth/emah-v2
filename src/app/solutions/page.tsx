// Components
import Image from 'next/image'
import Showcase from '@/components/data-display/Showcase'
// Config
import { APP_ROUTES } from '@/modules/navigation/config'
import { picturesPath, IMG_EXT, PICTURES_SIZE } from '@/modules/data-display/config'
import { SOLUTIONS, organization } from '@/modules/app/config'
// Types
import type { HeaderProps } from '@/types/data-dislay'

/** The headers configuration for solutions page */
const SOLUTIONS_CONFIG: Readonly<Record<string, HeaderProps>> = {
  marketing: {
    heading: SOLUTIONS[0],
    description: [
      'Análisis y estrategia',
      'Campañas eficientes y creativas (Inbound & outbound marketing)',
      'Marketing de contenidos',
      'Social & influencer marketing',
      'Performance marketing (SEO, SEM, SEA, PPC, Email marketing)'
    ]
  },
  branding: {
    heading: SOLUTIONS[1],
    description: [
      'Naming de marca',
      'Diseño de logo',
      'Identidad visual',
      'Identidad de marca',
      'Diseño de producto y empaque',
      'Brand culture',
      'Consultoría y capacitación'
    ]
  },
  development: {
    heading: SOLUTIONS[2],
    description: [
      'Front-end development',
      'Back-end development',
      'Mobile apps',
      'Landing page',
      'Consultoría y asesoría'
    ]
  }
}

/** The solutions route id */
const solutionsID = APP_ROUTES[2]

/** The solutions page of the application */
export default function SolutionsPage () {
  return (
    <main>
      <section className='px-section pb-section pt-32 md:pt-44 space-y-12 bg-stone-100'>
        <h1 className='h2s text-center'>
          Nuestro ideal es convertirnos en un aliado estratégico y determinante
          en el éxito trascendente de nuestros clientes y socios
        </h1>
        <Image
          src={`${picturesPath}${solutionsID}.${IMG_EXT.jpg}`}
          alt={organization}
          className='w-full h-auto rounded-3xl'
          width={PICTURES_SIZE.width}
          height={PICTURES_SIZE.height}
        />
      </section>

      <section className='p-section space-y-12 lg:space-y-24'>
        <header className='space-y-8 text-center lg:text-left'>
          <h2 className='text-tagline mx-auto md:mx-0'>
            NUESTRAS SOLUCIONES
          </h2>
          <p className='h2'>
            Nos apasiona crear posibilidades infinitas que generen valor a sus modelos
            de negocio para que, día con día, se vuelvan más competitivos y evolutivos
            al transcurso de las generaciones
          </p>
        </header>

        {Object.keys(SOLUTIONS_CONFIG).map((solution, key) => {
          return (
            <Showcase
              id={solution}
              heading={SOLUTIONS_CONFIG[solution].heading}
              description={SOLUTIONS_CONFIG[solution].description}
              image={{
                name: `${solutionsID}${key}`,
                ext: IMG_EXT.jpg,
                alt: SOLUTIONS_CONFIG[solution].heading,
                ...PICTURES_SIZE
              }}
              reverse={key % 2 !== 0}
              key={key}
            />
          )
        })}
      </section>
    </main>
  )
}
