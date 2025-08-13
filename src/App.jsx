import { Game } from "./components/game/Game";
import { Layout } from "./components/layout/Layout";
import "./App.css";
import { useState } from "react";
import { MainMenu } from "./components/displays/main";
import { GameOver } from "./components/displays/over";

export default function App() {
  
  const [score, setScore] = useState({currentScore: 0, highScore: 0});
  const [display, setDisplay] = useState("MAIN");

  let currentDisplay;
  
  switch(display) {
    case "MAIN":
      currentDisplay = <MainMenu displaySetter={setDisplay}></MainMenu>;
      break;
    case "GAME":
      currentDisplay = <Game scoreSetter={setScore} displaySetter={setDisplay} ></Game>;
      break;
    case "OVER":
      currentDisplay = <GameOver displaySetter={setDisplay} score={score}></GameOver>
      break;
    default:
      currentDisplay = <MainMenu displaySetter={setDisplay}></MainMenu>;
      break;
  }

  return (
    <Layout score={score}>
      {currentDisplay}
    </Layout>
  )
}

