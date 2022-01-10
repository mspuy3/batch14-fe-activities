import React, { useState, useEffect } from 'react'

const UpdateName = (props) => {
  const [editor, setEditor] = useState(props.currentEditor)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setEditor({ ...editor, [name]: value })
  }

  useEffect(() => {
   setEditor(props.currentEditor)
   }, [props])

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        props.updateName(editor.id, editor)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="firstName"
        value={editor.firstName}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="lastName"
        value={editor.lastName}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default UpdateName