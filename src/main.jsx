import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tailwindcss/tailwind.css";
import Quiz from "./components/Quiz.jsx";
import { QuizProvider } from "./contexts/Quiz";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>
);
