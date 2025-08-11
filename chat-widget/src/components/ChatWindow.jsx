import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: inputValue,
            sender: "user",
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setTimeout(() => {
            const botMessage = {
                id: Date.now() + 1,
                text: "Salam! sorğunuz qeydə alındı, tezliklə tərəfimizdən cavab veriləcək.",
                sender: "bot",
            };
            setMessages((prev) => [...prev, botMessage]);
        }, 1000);
    };

    return (
        <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 9999 }}>
            {/* Chat pəncərəsi */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="chat-window"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            width: "350px",
                            height: "400px",
                            background: "#fff",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            position: "absolute",
                            bottom: "80px",
                            right: "0",
                        }}
                    >
                        {/* Başlıq */}
                        <div
                            style={{
                                padding: "10px",
                                background: "#4a90e2",
                                color: "#fff",
                                borderTopLeftRadius: "8px",
                                borderTopRightRadius: "8px",
                            }}
                        >
                           💬 Canlı Dəstək
                        </div>

                        {/* Mesajlar */}
                        <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
                            {messages.length === 0 ? (
                                <p style={{ color: "#999" }}>Hələ mesaj yoxdur...</p>
                            ) : (
                                messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        style={{
                                            margin: "5px 0",
                                            padding: "8px",
                                            borderRadius: "6px",
                                            background: msg.sender === "user" ? "#e1ffc7" : "#f1f1f1",
                                            alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                                            maxWidth: "80%",
                                            fontStyle: msg.sender === "bot" ? "italic" : "normal",
                                            color: msg.sender === "bot" ? "#555" : "#000",
                                        }}
                                    >
                                        {msg.text}
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Mesaj yazma hissəsi */}
                        <div style={{ display: "flex", borderTop: "1px solid #ccc", padding: "10px" }}>
                            <input
                                type="text"
                                placeholder="Mesaj yaz..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                                style={{
                                    flex: 1,
                                    border: "1.5px solid #ccc",
                                    borderRadius: "20px",
                                    padding: "10px 15px",
                                    fontSize: "14px",
                                    outline: "none",
                                    transition: "border-color 0.3s",
                                    marginRight: "8px",
                                }}
                                onFocus={(e) => (e.target.style.borderColor = "#4a90e2")}
                                onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                            />
                            <button
                                onClick={handleSendMessage}
                                style={{
                                    padding: "10px 18px",
                                    border: "none",
                                    borderRadius: "20px",
                                    background: "#4a90e2",
                                    color: "#fff",
                                    fontWeight: "600",
                                    fontSize: "14px",
                                    cursor: "pointer",
                                    transition: "background-color 0.3s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#357ABD")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4a90e2")}
                            >
                                Göndər
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mesaj iconu */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "#4a90e2",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                }}
            >
                💬
            </motion.button>
        </div>
    );
}
