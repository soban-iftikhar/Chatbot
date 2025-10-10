import { useState} from "react"
import Input from "./Input"
import ChatMessage from "./ChatMessage"
import ChatReply from "./ChatReply"   

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (messageText) => {
    const newMessage = {
      id: Date.now(),
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'user'
    };
    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <>
      <div className="chat-container">
        <div className="messages-container">
          {messages.map(message => (
            <ChatMessage 
              key={message.id} 
              text={message.text} 
              timestamp={message.timestamp} 
            />
          ))}
        </div>
        <Input onSubmit={addMessage} />
      </div>
    </>
  )
}

export default App
