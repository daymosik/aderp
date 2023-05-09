import { FormInput } from './index'

export interface FormInputEmailProps {
  value: string
  handleInputChange: (value: string) => void
}

function FormInputEmail({ value, handleInputChange }: FormInputEmailProps) {
  return <FormInput name={'email'} type={'text'} value={value} handleInputChange={handleInputChange} />
}

export default FormInputEmail
