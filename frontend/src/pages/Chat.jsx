import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { text: input, sender: "user" },
      { text: "AI response placeholder 🤖", sender: "ai" },
    ];

    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="sidebar">
        <h3>History</h3>
        <ul>
          <li>Chat 1</li>
          <li>Chat 2</li>
        </ul>
      </div>

      <div className="chat-area">
        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === "user" ? "user" : "ai"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}