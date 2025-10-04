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
  const [strength, setStrength] = useState("");

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

  const calculateStrength = (password: string): void => {
    // Initialize variables
    let passStrength = 0;
    let passType = "";

    // Check password length
    if (password.length >= 8) {
      passStrength += 1;
    }

    // Check for mixed case
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
      passStrength += 1;
    }

    // Check for numbers
    if (password.match(/\d/)) {
      passStrength += 1;
    }

    // Check for special characters
    if (password.match(/[^a-zA-Z\d]/)) {
      passStrength += 1;
    }

    // Return results
    if (passStrength < 2) {
      passType = "Weak";
    } else if (passStrength === 2) {
      passType = "Average";
    } else if (passStrength === 3) {
      passType = "Strong";
    } else {
      passType = "Very Strong";
    }

    setStrength(passType);
  };

  const setNewParams = (newParams: ParametersType) => {
    const { uppercase, lowercase, numbers, symbols } = newParams;
    if (uppercase || lowercase || numbers || symbols) {
      setParams(newParams);
    }
    return;
  };

  useEffect(() => {
    setPassword(generatePassword(params));
  }, [params]);

  useEffect(() => {
    calculateStrength(password);
  }, [password]);

  const generateAgain = useCallback(() => {
    setPassword(generatePassword(params));
  }, [params]);

  const value = { password, params, strength, setNewParams, generateAgain };
  return (
    <PasswordContext.Provider value={value}>
      {children}
    </PasswordContext.Provider>
  );
};
