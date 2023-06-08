// Components
import Image from 'next/image'
import Showcase from '@/components/data-display/Showcase'
// Config
import { APP_ROUTES } from '@/modules/navigation/config'
import { picturesPath, IMG_EXT, PICTURES_SIZE } from '@/modules/data-display/config'
import { organization, purpose } from '@/modules/app/config'
// Types
import type { HeaderProps } from '@/types/data-dislay'

/** The headers configuration for strategy section */
const STRATEGY: Readonly<Record<string, HeaderProps>> = {
  team: {
    heading: 'Trabajamos en equipo',
    description: [
      'Filosofía: Los negocios son opuestos a las matemáticas. Mientras las matemáticas plantean que la mejor forma de sumar es multiplicar, en los negocios la mejor forma de sumar es dividir. Dividir el esfuerzo, el trabajo, las tareas y hasta los ingresos.',
      'Más allá de querer ser un experto en todas las áreas de una empresa o negocio, busca rodearte de un equipo de expertos que complemente correctamente las habilidades y conocimientos que no tienes.'
    ]
  },
  innovate: {
    heading: 'Innovamos constantemente',
    description: [
      'Lo importante es generar innovación alrededor de lo que el cliente considera valioso.',
      'Para lograr generar innovaciones de valor, es imperativo conocer al cliente, a la competencia, al mercado y a ti mismo como organización.'
    ]
  },
  oportunity: {
    heading: 'Transformamos problemas en oportunidades',
    description: [
      'Problemas = áreas de oportunidad.',
      'Mientras más grande y frecuente sea el problema, mayor será la posibilidad de generar valor.',
      'La creatividad es un elemento clave en nuestro proceso de encontrar soluciones.'
    ]
  },
  assume: {
    heading: 'No asumimos',
    description: [
      'Se debe tener certeza en cada tarea u objetivo a realizar. Nunca asumir, en caso de no tener plena certeza.',
      'Evitar el retrabajo. Dar indicaciones claras incrementa las probabilidades de que las cosas se hagan bien y a la primera.',
      'El estudio de mercado estratégico es un pilar indispensable en el momento de tomar decisiones que generen valor para el cliente.'
    ]
  },
  strategy: {
    heading: 'Planeamos y ejecutamos con estrategia',
    description: [
      'Se debe analizar y elegir con mucho cuidado la mejor forma de llegar del punto A (en donde estamos) al punto B (a donde se quiere llegar).',
      'Administrar con eficiencia los recursos disponibles.',
      'Siempre hay una forma óptima o mejor de hacer las cosas.',
      'El minimalismo y la metodología MVP son claves dentro de nuestra estrategia.'
    ]
  },
  prevent: {
    heading: 'Prevemos futuras tendencias',
    description: [
      'Saber cuándo entrar y salir de cualquier oportunidad de negocio. Nada es eterno; todo tiene un ciclo, un punto alto y un punto bajo.',
      'Lo único constante es el cambio. Sé tú quien decida los cambios en tu empresa, y no el mercado el que te obligue a hacerlos.'
    ]
  },
  progress: {
    heading: 'Buscamos progreso, no perfección',
    description: [
      'El mundo de los negocios es un juego infinito en el que no se tiene una certeza plena de todos los elementos que participan el mercado, ni de la variabilidad de estos.  A lo máximo que se puede aspirar es a tener estimaciones.',
      '¿Qué sí está en nuestro control? Generar una cultura de progreso constante dentro de nuestra organización; aspirar a ser mejores cada día con relación a nuestras propias métricas e inspirar el cambio en esta cultura de progreso en cada rincón de la compañía.'
    ]
  }
}

/** The about route id */
const aboutID = APP_ROUTES[1]

/** The about us page of the application */
export default function AboutPage () {
  return (
    <main>
      <section className='px-section pb-section pt-32 md:pt-44 space-y-12 bg-stone-100'>
        <h1 className='h2s text-center'>
          El éxito a corto, mediano y largo plazo de cualquier empresa no depende
          de un solo aspecto, sino de la sincronización de muchos.
        </h1>
        <Image
          src={`${picturesPath}${aboutID}.${IMG_EXT.jpg}`}
          alt={organization}
          className='w-full h-auto rounded-3xl'
          width={PICTURES_SIZE.width}
          height={PICTURES_SIZE.height}
        />
      </section>

      <section className='p-section space-y-12 lg:space-y-24'>
        <header className='space-y-8 text-center lg:text-left'>
          <h2 className='text-tagline mx-auto md:mx-0'>
            NUESTRA ESTRATEGIA
          </h2>
          <p className='h2'>
            Aquí te presentamos los aspectos más importantes, mismos que forman
            parte de nuestro ADN y que son la clave en la generación de soluciones
            de valor para nuestros clientes.
          </p>
        </header>

        {Object.keys(STRATEGY).map((strategy, key) => {
          return (
            <Showcase
              heading={STRATEGY[strategy].heading}
              description={STRATEGY[strategy].description}
              image={{
                name: strategy,
                ext: IMG_EXT.jpg,
                alt: STRATEGY[strategy].heading,
                ...PICTURES_SIZE
              }}
              reverse={key % 2 !== 0}
              key={key}
            />
          )
        })}
      </section>

      <section className='px-section md:px-11% py-section space-y-8 md:space-y-12 text-center md:text-left bg-stone-50'>
        <header className='space-y-5 md:space-y-8'>
          <h2 className='text-tagline mx-auto md:mx-0'>
            NUESTRA RAZÓN DE SER
          </h2>
          <p className='h2'>
            {purpose}
          </p>
        </header>

        <div className='space-y-3 md:space-y-5'>
          <p>
            En el mercado podemos ver muchas historias de éxito, pero también historias de
            fracaso. Dependiendo de cómo analices las estadísticas, podrás encontrar que entre
            8 y 9 de cada 10 emprendimientos terminan cerrando o en banca rota durante un periodo
            no mayor a 2 años. Así mismo, para las empresas medianas y grandes, que ya tienen más
            de 10 años en el mercado, existe un concepto conocido como “zombie companies”, el
            cual se refiere a aquellas compañías que requieren, para poder subsistir, acceder a
            préstamos o financiamientos, y que, además, su nivel de ingresos no es suficiente
            para cubrir el total de sus gastos corrientes. Esto obviamente deriva en una ausencia
            de pago de utilidades para sus accionistas.
          </p>
          <p>
            Es complicado tener un número exacto de cuántas empresas “zombie” hay en total. Sin embargo,
            se estima que entre un 20 y 30 % de ellas en el mundo se encuentran en esta situación.
          </p>
          <p>
            Algunos ejemplos son: BlockBuster, BlackBerry, Sears, El Globo, AMC, GameStop, Kodak, WeWork,
            Carnival Cruise Lines, entre otras.
          </p>
          <p>
            Sí, aunque no lo creas, todas estas empresas hoy se encuentran quebradas o con altísimas
            posibilidades de terminar en banca rota en un corto o mediano plazo.
          </p>
        </div>

        <article className='space-y-4 md:space-y-5'>
          <header>
            <h3>Pero ¿qué tienen en común todas ellas?</h3>
          </header>

          <p>
            Que alguna vez estuvieron en la cima de sus respectivos giros comerciales. Sin embargo,
            no lograron consolidarse en el mercado y hoy simplemente pasarán a la historia como una
            empresa más, lejos de ser la que alguna vez fueron.
          </p>
        </article>

        <article className='space-y-4 md:space-y-5'>
          <header>
            <h3>¿Y qué tiene que ver todo esto con el marketing?</h3>
          </header>

          <p>
            La respuesta es que todas estas empresas no previeron lo que se venía y se aferraron a sus
            modelos arcaicos de negocio. Decidieron que lo que ellos pensaban era más importante que
            aquello que el cliente quería o necesitaba. Y puesto que, como lo mencionamos previamente,
            lo único constante es el cambio, fue algo que no tomaron en cuenta, por lo que el mercado
            tuvo que seguir su curso natural y decidir por ellos.
          </p>
          <p>
            Evitar que pases por la misma suerte que estas empresas es justamente nuestro gran combustible
            y razón de ser. Sabemos que para ello se requiere de un conocimiento profundo del mercado y
            del cliente, de capacidad para prever y anticipar tendencias, así como una estrategia a la
            medida de tus necesidades y las de tu cliente. Todo esto y mucho más es lo que podemos y
            queremos hacer por ti.
          </p>
          <p>
            Hoy en día, y no me dejarán mentir, conseguir que el marketing genere resultados reales y
            tangibles es un gran reto. En muchas ocasiones, más que una campaña armada y bien pensada,
            se ha vuelto un juego utilizar gente visualmente “atractiva” y/o supuestos “influencers” para
            intentar posicionar las marcas e incrementar las ventas. Sin embargo, en muchas ocasiones, lo
            máximo que se alcanza es un incremento de seguidores, que no necesariamente se ve reflejado en
            ventas, que es el verdadero objetivo de una campaña de este tipo.
          </p>
          <p>
            En EMAH tenemos como propósito que tu empresa se pueda reconocer por encima de estas campañas
            y que tu producto o servicio se distinga en el mercado por generar valor para los clientes,
            más allá de un bajo precio. Es más, aquí te dejamos un spoiler: Si tu idea para competir en el
            mercado está pensada solo en el precio, es muy probable que tu empresa no dure mucho. La
            máxima de todas las empresas debe ser el formar una cultura y que esta se vuelva parte de la
            vida de sus clientes.
          </p>
          <p>
            Permítenos formar parte de tu equipo. Queremos impulsar tu empresa para que se
            transforme en un legado para ti, para tu familia y tus seres queridos.
          </p>
        </article>
      </section>
    </main>
  )
}
