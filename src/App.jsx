import { Game } from "./components/game/Game";
import { Layout } from "./components/layout/Layout";
import "./App.css";
import { useState } from "react";

export default function App() {
  
  const [score, setScore] = useState({currentScore: 0, highScore: 0});

  return (
    <Layout score={score}>
      <Game scoreSetter={setScore} ></Game>
    </Layout>
  )
}

