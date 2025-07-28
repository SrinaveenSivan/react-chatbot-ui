import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
  if (!input.trim()) return;

  const newMessages = [...messages, { role: 'user', content: input }];
  setMessages(newMessages);
  setInput('');

  try {
    const response = await axios.post(
  'http://localhost:8080/ai/handle',
  input,
  {
    headers: {
      'Content-Type': 'text/plain',
      'Accept': 'application/json'
    }
  }
);


    const aiReply = response.data.result;
    console.log('AI Reply:', aiReply);
    setMessages([...newMessages, { role: 'ai', content: aiReply }]);
  } catch (error) {
    setMessages([...newMessages, { role: 'ai', content: '⚠️ Error from backend' }]);
  }
};


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chat-container">
      <h2>🤖 AI Chatbot</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.role}`}>
            <div className="message-bubble">{msg.content}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
