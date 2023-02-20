import { createContext, useContext, useState } from "react";

const VerificationContext = createContext(undefined) as any;

function VerificationProvider({ children }: any) {
  const [token, setToken] = useState(false);
  const auth = JSON.parse(localStorage.getItem(`weather`) as any);
  if (auth && token === false) {
    setToken(auth);
  }
  return (
    <VerificationContext.Provider value={{token, setToken}}>{children}</VerificationContext.Provider>
  );
}

function useVerification() {
    const context = useContext(VerificationContext);
    if (!context) {
        throw new Error("There is no context Verification")
    }
    return context;
}

export { VerificationProvider, useVerification };
