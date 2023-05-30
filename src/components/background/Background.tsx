// Utils
import { createIterableArray } from '@/modules/common/utils'

/** Used to create the line items */
const iterable = createIterableArray(6)

/**
 * The main background component
 * @returns The Background component
 */
export default function Background () {
  return (
    <div className='absolute inset-0 -z-20 overflow-hidden flex items-center'>
      <div className='absolute inset-0 -z-10 flex items-center bg-gradient'>
        {iterable.map((key) => (
          <span className='w-full h-full border-l border-l-white/20 first:border-l-0' key={key} />
        ))}
      </div>
    </div>
  )
}
