// Componens
import Image from 'next/image'
// Config
import { picturesPath } from '@/modules/data-display/config'
// Types
import type { ShowcaseProps } from '@/types/data-dislay'

/**
 * Used for display a header with a image to show information about something
 * @see {@link ShowcaseProps} for props specification
 * @param ShowcaseProps The component props
 * @returns The Showcase component
 */
export default function Showcase ({ heading, description, image, reverse, key }: ShowcaseProps) {
  const containerReverseStyle = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'

  return (
    <article
      className={`py-12 flex flex-col-reverse ${containerReverseStyle} justify-between items-start md:items-center gap-y-6 lg:gap-x-12`}
      key={key}
    >
      <header className='space-y-4 lg:space-y-5 text-center lg:text-left'>
        <h3>
          {heading}
        </h3>
        <p className='leading-relaxed'>
          {description}
        </p>
      </header>
      <Image
        src={`${picturesPath}${image.name}.${image.ext}`}
        alt={image.alt}
        className='lg:max-w-2xl h-auto rounded-3xl'
        width={image.width}
        height={image.height}
      />
    </article>
  )
}
