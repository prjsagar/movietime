import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StarRating from "./StarRating";

createRoot(document.getElementById("root")).render(
  <App />
  // {/* <StarRating maxRating={5} color="red" size="28" /> */}
);
