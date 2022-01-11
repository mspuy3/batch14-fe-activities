import React, { useState }  from 'react'
import { sendMessage } from '../../../api/slack-api'

const ChatForm = () => {
   const [isSending, setisSending] = useState(false)
   const [receiver_id, setReceiver_id] = useState('')
   const [receiver_class, setReceiver_class] = useState('')
   const [body, setBody] = useState('')
   const [error, setError] = useState([])
   const [flash, setFlash] = useState('')
 
   let headerData = JSON.parse(localStorage.getItem("headers"));
 
   const handleSend = async () => {
 
      setisSending(true)
 
     const [response, errors] = await sendMessage(headerData, receiver_id, receiver_class, body)
     if (errors.length > 0) {
       setFlash('')
       setError(errors)
       setisSending(false)
     } else {
      setisSending(false)
       setFlash('Successful Send')
       setError([]) 
     }
   }
 
   return (
 
     <div>
        
      <h2>ChatForm Component</h2>

       {isSending ? (
          <p>Sending Message....</p>
        ) : (
         <div>
         <div>
           <label htmlFor=''>receiver_id:</label>
           <input
             type='number'
             value={receiver_id}
             onChange={(e) => setReceiver_id(e.target.value)}
           />
         </div>
         <div>
           <label htmlFor=''>receiver_class:</label>
           <input
             type='text'
             value={receiver_class}
             onChange={(e) => setReceiver_class(e.target.value)}
           />
         </div>
         <div>
           <label htmlFor=''>body:</label>
           <input
             type='text'
             value={body}
             onChange={(e) => setBody(e.target.value)}
           />
         </div>
         {error.lg}
         <button onClick={handleSend}>Send</button>
       </div>
       )}
 
 
       {error.length ? error.map((err) => <p>{err}</p>) : null}
       {flash && <p>{flash}</p>}
 
     </div>
 
   )
}

export default ChatForm
