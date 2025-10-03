import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";

import App from "./App.tsx";
import { PasswordProvider } from "./context/PasswordProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PasswordProvider>
      <App />
    </PasswordProvider>
  </StrictMode>
);
