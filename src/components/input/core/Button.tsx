// Config
import { BUTTON_TYPES } from '@/modules/input/config'
import { THEMES } from '@/modules/theme/config'
// Types
import type { ButtonProps } from '@/types/input'
// Styles
import styles from '@/styles/Button.module.css'

/**
 * A simple themeable button component
 * @see {@link ButtonProps} for props specification
 * @param ButtonProps The component props
 * @returns The Button component
 *
 * @default type 'button'
 * @default theme 'primary'
 */
export default function Button ({
  children,
  action,
  type = BUTTON_TYPES.button,
  theme = THEMES.primary,
  disabled
}: ButtonProps) {
  const themeStyle = theme === THEMES.secondary ? styles.btn__secondary : styles.btn__primary
  const btnStyle = `${styles.btn} ${themeStyle} ${styles.group}`

  return (
    <button onClick={action} type={type} disabled={disabled}>
      <div className={btnStyle}>
        {children?.toUpperCase()} <span className={styles.btn__arrow}>&rarr;</span>
        <div className={styles.btn__circle} />
      </div>
    </button>
  )
}
