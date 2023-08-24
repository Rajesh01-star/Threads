"use client";
// context/Context.js
import React, { useContext, useState } from "react";

const Context = React.createContext();

export function ContextProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <Context.Provider value={{ loading, setLoading }}>
      {children}
    </Context.Provider>
  );
}

export function useGlobalContext() {
  return useContext(Context);
}
