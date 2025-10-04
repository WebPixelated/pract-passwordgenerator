import { createContext, useContext } from "react";

export type PasswordContextType = {
  password: string;
  params: ParametersType;
  setNewParams: (params: ParametersType) => void;
  generateAgain: () => void;
  strength: string;
  // generatePassword: () => string;
  // setPassword: (password: string) => void;
};

export type ParametersType = {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

export const PasswordContext = createContext<PasswordContextType | undefined>(
  undefined
);
export const usePassword = () => useContext(PasswordContext);
