import React from 'react'

const ChatReply = ({ text, timestamp }) => {
  return (
    <>
      <div className="chat-reply">
        <p>{text}</p>
        <span className="timestamp">{timestamp}</span>
      </div>
    </>
  )
}

export default ChatReply