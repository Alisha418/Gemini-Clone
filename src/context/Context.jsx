import { createContext, useState } from "react";
import run, { resetChat, loadChatHistory } from "../config/geminiapi";

export const Context = createContext();

const ContextProvider = (props) => {
  const [Input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setloading] = useState(false);

  const newChat = () => {
    if (messages.length > 0) {
      setChatHistory((prev) => [
        ...prev,
        { title: messages[0].text, messages: [...messages] },
      ]);
    }
    resetChat();
    setMessages([]);
    setloading(false);
    setShowResult(false);
  };

  const loadChat = (index) => {
    const chat = chatHistory[index];
    if (!chat) return;
    loadChatHistory(chat.messages);
    setMessages(chat.messages);
    setShowResult(true);
    setloading(false);
  };

  const onSet = async () => {
    const userPrompt = Input.trim();
    if (!userPrompt) return;

    const userMessage = { role: "user", text: userPrompt };
    setMessages((prev) => [...prev, userMessage]);
    setloading(true);
    setShowResult(true);

    try {
      const response = await run(userPrompt);
      setMessages((prev) => [...prev, { role: "model", text: response }]);
    } catch (error) {
      const errorText =
        error.message || "Something went wrong. Please try again.";
      setMessages((prev) => [...prev, { role: "model", text: errorText }]);
    } finally {
      setloading(false);
      setInput("");
    }
  };

  const contextValue = {
    Input,
    setInput,
    messages,
    chatHistory,
    showResult,
    setShowResult,
    loading,
    setloading,
    onSet,
    loadChat,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
