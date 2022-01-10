import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import { login } from '../../api/slack-api'

const LoginForm = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState([])
  const [flash, setFlash] = useState('')


  let navigate = useNavigate();

  const handleLogin = async () => {

    setIsLoading(true)

    const [response, errors] = await login(email, password)

    console.log('response', response);
    console.log('errors', errors);
    
    if (errors.length > 0) {
      setFlash('')
      setError(errors)
      setIsLoading(false)
    } else {
      console.log('login response', response)
      setIsLoading(false)
      setFlash('Successful login')
      setError([])
      navigate(`../main`, {replace: true,});

    }
  }

  return (

    <div>

      {isLoading ? (
         <p>Logging In....</p>
       ) : (
        <div>
        Log In
        <div>
          <label htmlFor=''>email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor=''>password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error.lg}
        <button onClick={handleLogin}>Login</button>
      </div>
      )}


      {error.length ? error.map((err) => <p>{err}</p>) : null}
      {flash && <p>{flash}</p>}

    </div>

  )
}
export default LoginForm