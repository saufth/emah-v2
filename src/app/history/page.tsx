// Config
import { NAV } from '@/modules/navigation/config'
// Types
import type { Metadata } from 'next'

/** The history page head metadata configuration */
export const metadata: Metadata = {
  title: NAV[4].children
}

/** The history page of the application */
export default function HistoryPage () {
  return (
    <main>
      <div className='w-full h-24 bg-secondary' />
      <section className='py-24'>
        <div className='max-w-5xl px-5% mx-auto space-y-8 [&>p]:text-lg text-center md:text-left'>
          <header>
            <h2>Nuestra historia</h2>
          </header>
          <p>
            En el año 2015, un grupo de expertos de logística y el transporte pensaron fundar
            una empresa diferente, que pudiera aportar soluciones innovadoras y efectivas para
            mejorar el desempeño empresarial de sus clientes.
          </p>
          <p>
            Así nació DISTRIBUIDORA EMPRESARIAL POTENCIA. Al comienzo de sus operaciones
            sortearon obstáculos que hoy en día culminan en una historia de superación
            y crecimiento.
          </p>
          <p>
            Sus fundadores han colaborado a lo largo de estos años con cientos de empresas que,
            como ellos decidieron embarcarse en la aventura de emprender. La compañía continúa
            trabajando incansablemente para superar las expectativas y alcanzar juntos el máximo
            potencial.
          </p>
          <p>
            La historia de la empresa actualmente es el sueño cumplido de un grupo de personas
            altamente comprometidas por brindar un servicio de excelencia, que abarca todo el
            territorio nacional, enfocándose en la tecnología y la innovación, y ejerciendo
            eficazmente su responsabilidad social.
          </p>
          <p>
            DISTRIBUIDORA EMPRESARIAL POTENCIA es una opción confiable para todas las empresas
            que buscan mejorar su logística y transporte.
          </p>
        </div>
      </section>
    </main>
  )
}
