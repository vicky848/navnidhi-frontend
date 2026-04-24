import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./index.css";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I’m Vicky. What’s your name?" }
  ]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({ name: "", phone: "" });

  const sendMessage = () => {
    if (!input.trim()) return;

    setError("");

    const userMsg = { sender: "user", text: input };
    let botMsg = {};

    if (step === 1) {
      setUserData({ ...userData, name: input });
      botMsg = {
        sender: "bot",
        text: "Nice to meet you 😊 Please enter your 10 digit phone number 📱"
      };
      setStep(2);
    } 
    else if (step === 2) {
      const phoneRegex = /^[6-9][0-9]{9}$/;

      if (!phoneRegex.test(input)) {
        setError("❌ Enter valid 10-digit number (start with 6-9)");
        return;
      }

      setUserData({ ...userData, phone: input });
      botMsg = {
        sender: "bot",
        text: "Perfect! Click below to continue on WhatsApp 👇"
      };
      setStep(3);
    }

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="chat-toggle" onClick={() => setOpen(!open)}>
        🤖
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chat-container">

          {/* Header */}
          <div className="chat-header">
            <span>💬 Chat with Vicky</span>
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.sender}`}>
                <div className="msg-text">{msg.text}</div>
              </div>
            ))}
          </div>

          {/* Error */}
          {error && <div className="error">{error}</div>}

          {/* Input */}
          {step !== 3 && (
            <div className="chat-input">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type here..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          )}

          {/* WhatsApp */}
          {step === 3 && (
            <a
              className="whatsapp-btn"
              href={`https://wa.me/918294647101?text=Hello%20Vicky,%20my%20name%20is%20${userData.name}%20and%20my%20number%20is%20${userData.phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Continue on WhatsApp
            </a>
          )}

        </div>
      )}
    </>
  );
};

export default Chatbot;