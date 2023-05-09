import FormInputEmail from './email'
import FormInputPassword from './password'

export interface FormInputProps {
  name: string
  value: string
  type: string
  handleInputChange: (value: string) => void
}

function FormInput({ name, type, value, handleInputChange }: FormInputProps) {
  return (
    <input
      className="form-control"
      type={type}
      name={name}
      value={value}
      onInput={(event) => handleInputChange((event.target as HTMLInputElement).value)}
    />
  )
}

export { FormInput, FormInputEmail, FormInputPassword }
