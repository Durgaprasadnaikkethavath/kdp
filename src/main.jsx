import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, HashRouter } from "react-router-dom";
import ShopContextProvider from "./Context/ShopContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </HashRouter>
);
