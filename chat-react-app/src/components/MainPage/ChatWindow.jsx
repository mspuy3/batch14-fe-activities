import React from 'react'
import ChatForm from './ChatWindow/ChatForm'
import ChatView from './ChatWindow/ChatView'

const ChatWindow = () => {
  return (
    <div>
      <h1>This is the ChatWindow component</h1>

      <ChatView />
      <ChatForm />

    </div>
  )
}

export default ChatWindow
