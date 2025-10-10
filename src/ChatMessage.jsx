import React from 'react'

const ChatMessage = ({ text, timestamp }) => {
  return (
    <>
      <div className="chat-message">
        <p>{text}</p>
        <span className="timestamp">{timestamp}</span>
      </div>
    </>
  )
}

export default ChatMessage