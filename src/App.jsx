import { useState, useEffect, useRef } from "react"
import Input from "./Input"
import ChatMessage from "./ChatMessage"
import ChatReply from "./ChatReply"
import botIcon from "./assets/bot.png"   

function App() {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Bot response logic
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim();
    
    const responses = {
      'hello': 'Hi there! How can I help you today? 😊',
      'hi': 'Hello! What can I do for you?',
      'hey': 'Hey! How\'s it going?',
      'how are you': 'I\'m doing great, thanks for asking! How about you?',
      'what is your name': 'I\'m your friendly chatbot assistant!',
      'help': 'I\'m here to chat with you! Try asking me about anything!',
      'bye': 'Goodbye! It was nice chatting with you! 👋',
      'goodbye': 'See you later! Have a wonderful day! ✨',
      'thanks': 'You\'re very welcome! Happy to help! 😊',
      'thank you': 'My pleasure! Is there anything else I can help you with?',
      'joke': 'Why don\'t scientists trust atoms? Because they make up everything! 😄',
      'tell me a joke': 'What do you call a fake noodle? An impasta! 🍝',
      'weather': 'I wish I could check the weather for you! I hope it\'s nice where you are! ☀️',
      'good morning': 'Good morning! Hope you have a fantastic day ahead! ☀️',
      'good afternoon': 'Good afternoon! How has your day been so far?',
      'good evening': 'Good evening! How was your day?',
      'good night': 'Good night! Sweet dreams! 🌙',
      'what can you do': 'I can chat with you, tell jokes, answer questions, and keep you company! What would you like to talk about?',
      'who made you': 'I was created by a developer learning React! Pretty cool, right? 🤖',
      'how old are you': 'I\'m brand new! Just born in the digital world! 👶',
      'where are you from': 'I live in the cloud, in the wonderful world of code! ☁️💻',
    };

    // Check for exact matches first
    if (responses[message]) {
      return responses[message];
    }

    // Check for partial matches
    if (message.includes('hello') || message.includes('hi')) {
      return 'Hello! Nice to meet you! 😊';
    }
    if (message.includes('joke') || message.includes('funny')) {
      return 'Here\'s one: Why did the scarecrow win an award? Because he was outstanding in his field! 😂';
    }
    if (message.includes('weather')) {
      return 'I can\'t check the real weather, but I hope it\'s nice where you are! ☀️';
    }
    if (message.includes('love') || message.includes('like')) {
      return 'That sounds wonderful! I love chatting with people too! ❤️';
    }
    if (message.includes('sad') || message.includes('upset')) {
      return 'I\'m sorry to hear that. I hope things get better for you soon! 💙';
    }
    if (message.includes('happy') || message.includes('excited')) {
      return 'That\'s awesome! I love hearing when people are happy! 😄';
    }
    if (message.includes('food') || message.includes('eat')) {
      return 'I don\'t eat, but I love hearing about delicious food! What\'s your favorite? 🍕';
    }
    if (message.includes('music') || message.includes('song')) {
      return 'Music is amazing! I wish I could listen to it. What\'s your favorite genre? 🎵';
    }
    if (message.includes('movie') || message.includes('film')) {
      return 'Movies are great! I\'d love to watch them if I could. What\'s your favorite? 🎬';
    }

    // Default responses for unrecognized input
    const defaultResponses = [
      'That\'s interesting! Tell me more about that.',
      'I\'m here to chat! What would you like to talk about?',
      'Hmm, that\'s a good point! What do you think about it?',
      'I\'d love to learn more about that topic!',
      'That sounds fascinating! Can you tell me more?',
      'Cool! I\'m always eager to learn new things!',
      'Interesting perspective! What made you think of that?',
      'I find that really intriguing! Thanks for sharing!',
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const addMessage = (messageText) => {
    const userMessage = {
      id: crypto.randomUUID(),
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);

    // Add bot response after a short delay
    setTimeout(() => {
      const botResponse = {
        id: crypto.randomUUID(),
        text: getBotResponse(messageText),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500 + Math.random() * 1000);
  };

  return (
    <>
      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-title">
            <div className="chat-avatar">
              <img src={botIcon} alt="Bot" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </div>
            <div>
              <div>AI Assistant</div>
              <div style={{ fontSize: '12px', opacity: 0.8, fontWeight: 400 }}>
                Always here to help
              </div>
            </div>
          </div>
          <div className="chat-status">
            <div className="status-dot"></div>
            Online
          </div>
        </div>
        
        <div className="messages-container">
          {messages.map(message => (
            message.type === 'user' ? (
              <ChatMessage 
                key={message.id} 
                text={message.text} 
                timestamp={message.timestamp} 
              />
            ) : (
              <ChatReply 
                key={message.id} 
                text={message.text} 
                timestamp={message.timestamp} 
              />
            )
          ))}
          
          <div ref={messagesEndRef} />
        </div>
        
        <div className="input-container">
          <div className="feature-buttons">
            <div className="feature-btn" title="Attach file">📎</div>
            <div className="feature-btn" title="Emoji">😊</div>
          </div>
          <Input onSubmit={addMessage} />
        </div>
      </div>
    </>
  )
}

export default App
