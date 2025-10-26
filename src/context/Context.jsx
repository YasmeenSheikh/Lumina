import { createContext, useState } from "react";
import { askGemini } from "../Lumina";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResponse((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onsent = async (prompt) => {
    setResponse("");
    setLoading(true);
    setShowResult(true);
    let result;
    if (prompt !== undefined) {
      result = await askGemini(prompt);
      setRecentPrompt(prompt);
    } else {
      setPreviousPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);
      result = await askGemini(input);
    }
    setRecentPrompt(input);
    setPreviousPrompt((prev) => [...prev, input]);

    try {
      // const data = await askGemini(input); // Gemini’s response
      let newData = data.split(" ");

      for (let i = 0; i < newData.length; i++) {
        const nextWord = newData[i];
        delayPara(i, nextWord + " ");
      }

      // setResponse(newData); // keep it as markdown
    } catch (error) {
      setResponse("⚠️ Something went wrong. Try again!");
    }

    setLoading(false);
    setInput("");
  };

  //   onsent("what is react js");
  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    onsent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    response,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
