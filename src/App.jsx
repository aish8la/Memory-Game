import { Game } from "./components/game/Game";
import { Layout } from "./components/layout/Layout";
import "./App.css";
import { useState } from "react";

export default function App() {
  
  const [score, setScore] = useState({currentScore: 0, highScore: 0});
  const [display, setDisplay] = useState("MAIN");

  let currentDisplay;
  
  switch(display) {
    case "MAIN":
    case "GAME":
      currentDisplay = <Game scoreSetter={setScore} ></Game>;
      break;
    case "OVER":
    default:
      break;
  }

  return (
    <Layout score={score}>
      {currentDisplay}
    </Layout>
  )
}

