import { useState } from "react";


export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}

//{minWords, maxWords, targetReadingTime}:CharacterCounterProps
function CharacterCounter({
  minWords,
  maxWords,
  targetReadingTime,
}: CharacterCounterProps) {
  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const averWordReadingPerMin = 150;
  const readingTimeInMin = wordCount / averWordReadingPerMin;

  return (
    <div>
      
      {minWords}
      {maxWords}
      {targetReadingTime}
    </div>
  )
}

export default CharacterCounter;
