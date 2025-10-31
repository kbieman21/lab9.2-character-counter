import { useState } from "react";
import CharacterCounter from "./CharacterCounter";
import TextInput from "./TextInput";

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

  const handleTextChange = (newText: string) => {
    setText(newText);
    console.log("Text changed");
  };

  if (wordCount < 0) {
    showReadingTime = false;
  } else if (wordCount >= 0 && wordCount < 101) {
    showReadingTime = true;
  } else {
    //alert('Words are too short or too long')
  }
  return (
    <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
      <div>
        <TextInput
          onTextChange={handleTextChange}
          placeholder="Start typing here"
        />
      </div>

      <div className="w-full max-w-3xl bg-white p-6 rounded-lg border shadow-md">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-gray-700 mb-2">Characters</h3>
            <p className="text-2xl text-black-600">{text.length}</p>
          </div>

          <div>
            <h3 className="text-gray-700 mb-2">Words</h3>
            <p className="text-2xl text-red-600">{wordCount}</p>
          </div>

          {showReadingTime && (
            <div>
              <h3 className="text-gray-700 mb-2">Reading Time</h3>
              <p className="text-2xl text-black-600">
                {readingTimeInMin.toFixed(2)} min
              </p>
            </div>
          )}
        </div>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Min: {25} | Max: {100}
        </p>
      </div>
    </div>
  );
}

export default StatsDisplay;
