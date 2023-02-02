import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import ProductState from "./context/ProductState";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ProductState>
    <App />
  </ProductState>
);
