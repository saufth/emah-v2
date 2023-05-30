// Types
import type { Nameable } from '@/types/common'

/**
 * A background video component
 * @see {@link Nameable} for props specification
 * @param Nameable The component props
 * @returns The BackgroundVideo component
 */
export default function BackgroundVideo ({ name }: Nameable) {
  const videoSrc = `/video/${name}.mp4`

  return (
    <div className='absolute inset-0 -z-20 overflow-hidden flex items-center'>
      <video
        className='w-full h-full object-cover'
        width={1920}
        height={1080}
        controls={false}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controlsList='nodownload noplaybackrate'
      >
        <source src={videoSrc} type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-primary-light/10' />
    </div>
  )
}
