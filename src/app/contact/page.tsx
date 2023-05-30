// Components
import ContactForm from '@/components/input/ContactForm'
// Config
import { NAV } from '@/modules/navigation/config'
// Types
import type { Metadata } from 'next'

/** The contact page head metadata configuration */
export const metadata: Metadata = {
  title: NAV[5].children
}

/** The contact page of the application */
export default function ContactPage () {
  return (
    <main>
      <div className='w-full h-24 bg-secondary' />
      <section className='max-w-4xl px-5% py-24 mx-auto space-y-12'>
        <header>
          <h2>Pongamonos en contacto</h2>
        </header>
        <ContactForm />
      </section>
    </main>
  )
}
