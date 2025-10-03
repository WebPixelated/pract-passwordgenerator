import { useCallback, useEffect, useState } from "react";
import { PasswordContext, type ParametersType } from "./PasswordContext";

export const PasswordProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [password, setPassword] = useState("");
  const [params, setParams] = useState({
    length: 8,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });
  // const [strength, setStrength] = useState("");

  const generatePassword = (params: ParametersType) => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let validChars = "";
    const requiredChars: string[] = [];

    if (params.uppercase) {
      validChars += upper;
      requiredChars.push(upper[Math.floor(Math.random() * upper.length)]);
    }
    if (params.lowercase) {
      validChars += lower;
      requiredChars.push(lower[Math.floor(Math.random() * lower.length)]);
    }
    if (params.numbers) {
      validChars += numbers;
      requiredChars.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    if (params.symbols) {
      validChars += symbols;
      requiredChars.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    let generatedPassword = "";
    for (let i = 0; i < params.length - requiredChars.length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }

    // Insert required characters at random positions
    for (const char of requiredChars) {
      const pos = Math.floor(Math.random() * (generatedPassword.length + 1));
      generatedPassword =
        generatedPassword.slice(0, pos) + char + generatedPassword.slice(pos);
    }

    return generatedPassword;
  };

  // const calculateStrength = (password: string) => {
  //   const strengthNames = [
  //     "Very Weak",
  //     "Weak",
  //     "Moderate",
  //     "Strong",
  //     "Very Strong",
  //   ];

  //   let strength = 0;
  //   const lengthCriteria = password.length >= 8;
  //   const uppercaseCriteria = /[A-Z]/.test(password);
  //   const lowercaseCriteria = /[a-z]/.test(password);
  //   const numberCriteria = /[0-9]/.test(password);
  //   const symbolCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  //   if (lengthCriteria) strength += 1;
  //   if (uppercaseCriteria) strength += 1;
  //   if (lowercaseCriteria) strength += 1;
  //   if (numberCriteria) strength += 1;
  //   if (symbolCriteria) strength += 1;
  //   setStrength(strengthNames[strength - 1]);
  // };

  useEffect(() => {
    setPassword(generatePassword(params));
  }, [params]);

  const generateAgain = useCallback(() => {
    setPassword(generatePassword(params));
  }, [params]);

  const value = { password, params, setParams, generateAgain };
  return (
    <PasswordContext.Provider value={value}>
      {children}
    </PasswordContext.Provider>
  );
};
