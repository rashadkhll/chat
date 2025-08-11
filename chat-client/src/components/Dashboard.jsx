import React, { useState, useRef, useEffect } from "react";

const contacts = [
  { id: 1, name: "Rashad", online: true },
  { id: 2, name: "Aysel", online: false },
  { id: 3, name: "Kamran", online: true },
];

const initialMessages = {
  1: [
    { id: 1, fromMe: false, text: "Salam!" },
    { id: 2, fromMe: true, text: "Salam, necəsən?" },
    { id: 3, fromMe: false, text: "Yaxşıyam, sən?" },
  ],
  2: [
    { id: 1, fromMe: false, text: "Salam, Aysel" },
  ],
  3: [],
};

export default function Dashboard() {
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, activeContact]);

  function sendMessage() {
    if (!input.trim()) return;
    const newMsg = {
      id: Date.now(),
      fromMe: true,
      text: input.trim(),
    };
    setMessages((prev) => ({
      ...prev,
      [activeContact.id]: [...(prev[activeContact.id] || []), newMsg],
    }));
    setInput("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") sendMessage();
  }

  return (
    <div style={styles.container}>
      {/* Contacts panel */}
      <div style={styles.contactsPanel}>
        <h2 style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Contacts</h2>
        {contacts.map((c) => (
          <div
            key={c.id}
            onClick={() => setActiveContact(c)}
            style={{
              ...styles.contactItem,
              backgroundColor: activeContact.id === c.id ? "#e6f7ff" : "transparent",
            }}
          >
            <div style={{ fontWeight: "bold" }}>{c.name}</div>
            <div style={{ fontSize: 12, color: c.online ? "green" : "gray" }}>
              {c.online ? "Online" : "Offline"}
            </div>
          </div>
        ))}
      </div>

      {/* Chat panel */}
      <div style={styles.chatPanel}>
        {/* Header */}
        <div style={styles.chatHeader}>
          {activeContact.name}
          <span
            style={{
              marginLeft: 10,
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: activeContact.online ? "green" : "gray",
              display: "inline-block",
            }}
          />
        </div>

        {/* Messages */}
        <div style={styles.messages}>
          {(messages[activeContact.id] || []).map((msg) => (
            <div
              key={msg.id}
              style={{
                ...styles.messageBubble,
                alignSelf: msg.fromMe ? "flex-end" : "flex-start",
                backgroundColor: msg.fromMe ? "#dcf8c6" : "#fff",
                color: "#000",
              }}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div style={styles.inputArea}>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={styles.input}
          />
          <button onClick={sendMessage} style={styles.sendButton}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    border: "1px solid #ddd",
  },
  contactsPanel: {
    width: 250,
    borderRight: "1px solid #ddd",
    overflowY: "auto",
  },
  contactItem: {
    padding: 15,
    cursor: "pointer",
    borderBottom: "1px solid #eee",
  },
  chatPanel: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ece5dd",
  },
  chatHeader: {
    padding: 15,
    backgroundColor: "#075e54",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    display: "flex",
    alignItems: "center",
  },
  messages: {
    flex: 1,
    padding: 15,
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    gap: 10,
    backgroundColor: "#ece5dd",
  },
  messageBubble: {
    maxWidth: "60%",
    padding: 10,
    borderRadius: 10,
    boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)",
  },
  inputArea: {
    padding: 10,
    display: "flex",
    borderTop: "1px solid #ddd",
    backgroundColor: "#f0f0f0",
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    border: "1px solid #ddd",
    outline: "none",
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
    padding: "0 20px",
    borderRadius: 20,
    border: "none",
    backgroundColor: "#075e54",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
