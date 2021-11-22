import { ThemeProp } from '../../theme/theme.types'

export interface InputProps extends ThemeProp, React.HTMLAttributes<HTMLInputElement> {
  className?: string
  /**
   * The id of the `input` element.
   */
  id?: string
  /**
   * Placeholder attribute of the `input` element.
   */
  placeholder?: string
  /**
   * Name attribute of the `input` element.
   */
  name: string
  /**
   * Value attribute of the `input` element.
   */
  value: string | number
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: string | number
  /**
   * Is input required?
   */
  required?: boolean
  /**
   * Is input disabled?
   */
  disabled?: boolean
  /**
   *  This prop helps users to fill forms faster, especially on mobile devices.
   *  The name can be confusing, as it's more like an autofill.
   *  You can learn more about it
   * [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete?: string
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus?: boolean
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly?: boolean
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent component.
   */
  hasError?: boolean
  /**
   * Text used to give context about a field's input, such as how the input will be used.
   */
  helpText?: string
}
