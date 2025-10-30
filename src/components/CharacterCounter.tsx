import { useState } from "react";
import TextInput from "./TextInput";

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

  const handleTextChange = (newText: string) => {
    setText(newText);
    console.log("Text changed");
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const averWordReadingPerMin = 150;
  const readingTimeInMin = wordCount / averWordReadingPerMin;

  return (
    <div>
      <h1>Character Counter</h1>

      <TextInput
        onTextChange={handleTextChange}
        placeholder=""
        initialValue=""
      />

      <div className="display:flex flex-direction:row">
        <div>
          {" "}
          <h3>Character:</h3>
          {text.length}
          <h3>Words:</h3>
          <p>{wordCount}</p>
          <div>
            <h3>Reading time</h3>
            {readingTimeInMin}
          </div>
        </div>
      </div>
      {minWords}
      {maxWords}
      {targetReadingTime}
    </div>
  );
}

export default CharacterCounter;
