import { PropsWithChildren } from 'react'

export interface FormGroupProps {
  label: string
}

function FormGroup({ label, children }: PropsWithChildren<FormGroupProps>) {
  return (
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">{label}</label>
      {children}
    </div>
  )
}

export default FormGroup
