import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./components/Style/style.css";
import "./index.css";
import AppContextProvider from "./strore/AppContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
