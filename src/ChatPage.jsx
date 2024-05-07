import { useState, useRef, useEffect } from "react";
import './ChatPage.css';
const ChatPage = () => {
  const scrollToBottom = () => {
    // Utilise scrollIntoView avec l'option `block: 'nearest'` pour éviter de déplacer la vue si ce n'est pas nécessaire
    messageEndRef.current?.scrollIntoView({ behavior: "smooth", block: 'nearest' });
  };
  
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([]);
  const messageEndRef = useRef(null);

  

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!input) return;
    setMessage((prevMessage) => [
      ...prevMessage,
      { user: "You", text: input, type: "user" }
    ]);
    setInput("");
    const query = input.replace(/\s+/g, "+");
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/home/${query}`
      );
      const data = await response.json();
      const message = await data.top.res;
      console.log({ message });
      setMessage((prevMessages) => [
        ...prevMessages,
        { user: "Chatbot", text: message, type: "bot" }
      ]);
    } catch (err) {
      console.log("error ", err);
    }
  };
  useEffect(() => {
    // Assurez-vous que la fenêtre ne défile pas vers le bas lors du rechargement de la page.
    // Vous pouvez ajuster '0' pour définir la position horizontale si nécessaire.
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="ChatPage">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                message.type === "user" ? "flex-start" : "flex-end",
              margin: "5px"
            }}
          >
            <div
              style={{
                background: message.type === "user" ? "#444654" : "#202123",
                padding: "15px",
                borderRadius: "10px",
                maxWidth: "60%",
                color: "white"
              }}
            >
              <strong style={{ marginRight: "10px" }}>
                {" "}
                {message.user} :{" "}
              </strong>
              <span>{message.text}</span>
            </div>
          </div>
        ))}
        <div ref={messageEndRef}></div>
      </div>
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          style={{
            position: "sticky",
            bottom: 0,
            padding: "10px",
            width: "96%"
          }}
        />
        <button type="submit" className="submit-button">
          send
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
