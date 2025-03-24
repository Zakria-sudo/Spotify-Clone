import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import Playercontext from "./components/context/Playercontext.jsx";

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Playercontext>
        <App />
      </Playercontext>
    </BrowserRouter>
  </StrictMode>
);
