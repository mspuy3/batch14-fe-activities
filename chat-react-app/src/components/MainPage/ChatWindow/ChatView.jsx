import React, { useState }  from 'react'
import { receiveMessage, sendMessage } from '../../../api/slack-api'

const ChatView = () => {
   const [isReceiving, setisSending] = useState(false)
   const [receiver_id, setReceiver_id] = useState('')
   const [receiver_class, setReceiver_class] = useState('')
   const [body, setBody] = useState('')
   const [error, setError] = useState([])
   const [flash, setFlash] = useState('')
 
   let headerData = JSON.parse(localStorage.getItem("headers"));
 
   const handleReceive = async () => {
 
      setisSending(true)
 
     const [response, errors] = await receiveMessage(headerData, receiver_id, receiver_class)
     if (errors.length > 0) {
       setFlash('')
       setError(errors)
       setisSending(false)
     } else {
      setisSending(false)
       setFlash('Successful Receive')
       setError([]) 
     }
   }
 
   return (
 
     <div>
        
      <h2>ChatView Component</h2>

       {isReceiving ? (
          <p>Receiving Message....</p>
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
         {error.lg}
         <button onClick={handleReceive}>Receive</button>
       </div>
       )}
 
 
       {error.length ? error.map((err) => <p>{err}</p>) : null}
       {flash && <p>{flash}</p>}
 
     </div>
 
   )
}

export default ChatView
