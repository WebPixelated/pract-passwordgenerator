import { useState } from "react";
import { PasswordContext } from "./PasswordContext";

export const PasswordProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [password, setPassword] = useState("");

  const value = { password, setPassword };
  return (
    <PasswordContext.Provider value={value}>
      {children}
    </PasswordContext.Provider>
  );
};
