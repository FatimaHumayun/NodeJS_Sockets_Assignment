// components/ChatComponent.js
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // Replace with your server URL if different

const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  //   useEffect(() => {
  //     socket.on("message", (msg) => {
  //       setMessages((prevMessages) => [...prevMessages, msg]);
  //     });
  useEffect(() => {
    console.log("Connecting to WebSocket...");

    socket.on("connect", () => {
      console.log("Connected to WebSocket");
    });

    socket.on("message", (msg) => {
      console.log("Received message:", msg); // Check if messages are received
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("message");
      socket.off("connect");
    };
  }, []);

  //     return () => {
  //       socket.off("message");
  //     };
  //   }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("message", message);
      setMessage("");
    }
  };

  return (
    <div>
      <div>
        <h2>Chat</h2>
        <div>
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
