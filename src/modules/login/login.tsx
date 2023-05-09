import AuthForm from '../../modules/auth/auth-form'
import { useState } from 'react'
import * as React from 'react'
import LoginService from '../../services/login'

function LoginView() {
  // const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmail = (value: string) => setEmail(value)
  const handlePassword = (value: string) => setPassword(value)

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await LoginService.login(email, password)
      // dispatch(setAuthStatus(true))
    } catch (e) {
      console.info(e)
      // TODO: as
      setErrorMessage(e ? (e as Error).message : '')
    }
  }

  return (
    <div className="container pt-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-5">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <AuthForm
                email={email}
                password={password}
                submitForm={submitForm}
                handleEmail={handleEmail}
                handlePassword={handlePassword}
                errorMessage={errorMessage}
                buttonText={'Log In'}
              >
                {/*<div>*/}
                {/*  Don&apos;t have an account? <Link href={NavigationPath.Signup}>Create one</Link>.*/}
                {/*</div>*/}
              </AuthForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginView
