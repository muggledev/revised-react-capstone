import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import icons from "./assets/icons.js";

icons();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
