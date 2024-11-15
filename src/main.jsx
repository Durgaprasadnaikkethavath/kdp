import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, HashRouter } from "react-router-dom";
// import ShopContextProvider from "./Context/ShopContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
