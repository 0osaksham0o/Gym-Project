import React, { useState } from "react";
import './chatbot.css'

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async () => {
    if (!userInput.trim()) return;

    // Add the user's message to the conversation
    setMessages([...messages, { sender: "user", text: userInput }]);

    try {
      // Fetch bot's response from the backend
      const response = await fetch(`http://localhost:7800/chatbot?question=${userInput}`);
      const data = await response.json();

      // Add the bot's response to the conversation
      setMessages([
        ...messages,
        { sender: "user", text: userInput },
        { sender: "bot", text: data.response },
      ]);
    } catch (error) {
      setMessages([
        ...messages,
        { sender: "user", text: userInput },
        { sender: "bot", text: "Sorry, something went wrong. Please try again later." },
      ]);
    }

    setUserInput(""); // Clear the input field
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h3>Chat with Us</h3>
      </div>
      <div className="chatbox">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="user-input">
          <input
            type="text"
            value={userInput}
            onChange={handleUserInput}
            placeholder="Type your message..."
          />
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
