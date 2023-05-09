import { FormInput } from './index'

export interface FormInputPasswordProps {
  value: string
  handleInputChange: (value: string) => void
}

function FormInputPassword({ value, handleInputChange }: FormInputPasswordProps) {
  return <FormInput name={'password'} type={'password'} value={value} handleInputChange={handleInputChange} />
}

export default FormInputPassword
