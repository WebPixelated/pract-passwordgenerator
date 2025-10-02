import { createContext, useContext } from "react";

export type PasswordContextType = {
  password: string;
  setPassword: (password: string) => void;
};

export const PasswordContext = createContext<PasswordContextType | undefined>(
  undefined
);
export const usePassword = () => useContext(PasswordContext);
