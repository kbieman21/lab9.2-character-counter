import { useState } from "react";
import CharacterCounter from "./CharacterCounter";

export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}

export interface StatsDisplayProps {
  stats?: TextStats;
  showReadingTime?: boolean;
}

function StatsDisplay({ stats, showReadingTime }: StatsDisplayProps) {
  const [text, setText] = useState("");
  let contentElement: React.ReactNode;
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const averWordReadingPerMin = 150;
  const readingTimeInMin = wordCount / averWordReadingPerMin;

  // if(text.length < 25){
  //   contentElement =
  // }
  return (
    <div>
      <CharacterCounter />

      <div>
        <p>
          Min: {25} | Max: {100}
        </p>
      </div>
      
    </div>
  );
}

export default StatsDisplay;
