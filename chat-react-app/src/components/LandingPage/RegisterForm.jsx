import React, { useState } from 'react'
import { register } from '../../api/slack-api'

const RegisterForm = () => {

   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState([])
   const [flash, setFlash] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [passwordConfirmation, setPasswordConfirmation] = useState('')
 
   const handleRegister = async (e) => {
     e.preventDefault()
     setIsLoading(true)
     const [response, errors] = await register(
       email,
       password,
       passwordConfirmation
     )
      
      console.log('response: ', response)
      console.log('errors: ', errors)

     if (errors.length > 0) {
      setFlash('') 
      setError(errors)
     } else {
      setError([])
      setFlash('Successful register')
     }
     setIsLoading(false)
   }

   return (
   <div>
      {isLoading ? (
         <p>Registering....</p>
       ) : (
         <div>
           Registration
           <div>
             <label htmlFor=''>Email: </label>
             <input
               type='email'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             />
           </div>
           <div>
             <label htmlFor=''>Set Password: </label>
             <input
               type='password'
               value={password}
               onChange={(e) => setPassword(e.target.value)}
             />
           </div>
           <div>
             <label htmlFor=''>Repeat Password: </label>
             <input
               type='password'
               value={passwordConfirmation}
               onChange={(e) => setPasswordConfirmation(e.target.value)}
             />
           </div>
           <button onClick={handleRegister}>Register</button>
         </div>
       )}
 
       {error.length ? error.map((err) => <p>{err}</p>) : null}
       {flash && <p>{flash}</p>}

   
   </div>
   )

}

export default RegisterForm