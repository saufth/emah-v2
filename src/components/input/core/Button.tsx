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
  // Theme styles
  const btnThemeStyle = theme === THEMES.secondary
    ? styles.btn__secondary
    : styles.btn__primary
  const btnContainerThemeStyle = theme === THEMES.secondary
    ? styles.btn_container__secondary
    : styles.btn_container__primary
  const btnStyle = `${styles.btn} ${btnThemeStyle}`
  const btnContainerStyle = `${styles.btn_container} ${btnContainerThemeStyle}`

  return (
    <button onClick={action} type={type} disabled={disabled}>
      <div className={btnStyle}>
        <div className={btnContainerStyle}>
          {children}
        </div>
      </div>
    </button>
  )
}
