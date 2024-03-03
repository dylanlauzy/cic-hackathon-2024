"use client";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [question, setQuestion] = useState("");
  const [selectedGuy, setSelectedGuy] = useState("");
  const [chats, setChats] = useState({});

  return (
    <AppContext.Provider
      value={{
        question,
        setQuestion,
        chats,
        setChats,
        selectedGuy,
        setSelectedGuy,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useCanvasContext must be used within a CanvasContextProvider"
    );
  }

  return context;
};
