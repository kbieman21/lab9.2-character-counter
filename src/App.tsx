import { useState } from "react";
import "./App.css";
import CharacterCounter from "./components/CharacterCounter";
import StatsDisplay from "./components/StatsDisplay";
//import StatsDisplay from './components/StatsDisplay';
import TextInput from "./components/TextInput";

function App() {
  const [text, setText] = useState("");

 
  return (
    <div>
     <StatsDisplay showReadingTime={false}/>
    
    </div>
  );
}

export default App;
