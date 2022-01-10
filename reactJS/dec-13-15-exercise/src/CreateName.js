import React, { useState } from 'react'

const CreateName = (props) => {

   const initialFormState = { id: null, firstName: '', lastName: '' }
   const [names, setNames] = useState(initialFormState)

   const handleInputChange = (event) => {
      const { name, value } = event.target
    
      setNames({ ...names, [name]: value })
   }

  return (
    
   <form
      onSubmit={event => {
         event.preventDefault()
         if (!names.firstName) return

         props.createName(names)
         setNames(initialFormState)
      }}
   >

      <label>First Name</label>
      <input type="text" name="firstName" value={names.firstName} onChange={handleInputChange} required/>
      <label>Last Name</label>
      <input type="text" name="lastName" value={names.lastName} onChange={handleInputChange} />
      <button>Add Name</button>

   </form>

  )
}

export default CreateName