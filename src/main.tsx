
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const favicon = new URL('./assets/favicon.png', import.meta.url);

const link = document.createElement('link');
link.rel = 'icon';
link.href = favicon.href;
document.head.appendChild(link);


createRoot(document.getElementById("root")!).render(<App />);
  