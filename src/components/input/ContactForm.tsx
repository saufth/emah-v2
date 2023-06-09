'use client'
// Components
import Button from '@/components/input/core/Button'
// React
import { useRef, FormEvent, useState } from 'react'
// Types
import type { MailerData } from '@/types/common'

/** The contact form of the application */
export default function ContactForm () {
  // The modal state
  const [modalMessageState, setModalMessageState] = useState<string>('')
  // The send button state
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState<boolean>(false)
  // The form reference
  const formRef = useRef<HTMLFormElement>(null)
  // The modal reference
  const dialogRef = useRef<HTMLDialogElement>(null)

  /** Open the modal */
  const openModal = () => { dialogRef.current?.showModal() }
  /** Close the modal */
  const closeModal = () => {
    dialogRef.current?.close()
    setIsSendButtonDisabled(false)
  }

  /**
   * Used for send emails from contact form
   * @param event The form event used for prevent default
   */
  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data: MailerData = {
      name: String(event.currentTarget.contactName.value),
      email: String(event.currentTarget.contactEmail.value),
      message: String(event.currentTarget.contactMessage.value)
    }
    console.log(data)

    setIsSendButtonDisabled(true)
    const response = await fetch('/api/contact', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(response)
    if (!response.ok) {
      setModalMessageState('Lo sentimos, hubo un problema al intentar enviar el mensaje')
    }
    setModalMessageState('Hemos recibido tu mensaje')
    openModal()
  }

  return (
    <>
      <form
        className='space-y-8'
        onSubmit={sendEmail}
        ref={formRef}
      >
        <div>
          <input
            className='w-full px-4 py-3 border-b border-b-stone-300 resize-none'
            type='text'
            name='contactName'
            id='contactName'
            placeholder='Tu nombre'
            required
          />
        </div>
        <div>
          <input
            className='w-full px-4 py-3 border-b border-b-stone-300 resize-none'
            type='email'
            name='contactEmail'
            id='contactEmail'
            placeholder='Tu Email'
            required
          />
        </div>
        <div>
          <textarea
            className='w-full px-4 py-3 border-b border-b-stone-300 resize-none'
            name='contactMessage'
            id='contactMessage'
            rows={2}
            placeholder='Cuéntanos sobre tu proyecto'
            defaultValue=''
            required
          />
        </div>
        <div className='pt-6 flex justify-center'>
          <Button type='submit' disabled={isSendButtonDisabled}>
            Enviar
          </Button>
        </div>
      </form>
      <dialog className='p-5 m-auto space-y-3' ref={dialogRef}>
        <div className='pb-5 text-lg text-stone-500 border-b border-b-stone-300'>
          {modalMessageState}
        </div>
        <button
          className='font-primary-bold text-primary float-right'
          onClick={closeModal}
        >
          Cerrar
        </button>
      </dialog>
    </>
  )
}
