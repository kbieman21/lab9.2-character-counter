import { useState } from "react";
import CharacterCounter from "./CharacterCounter";

export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

function TextInput({
  onTextChange,
  placeholder = "",
  initialValue = "",
}: TextInputProps) {
  const [text, setText] = useState(initialValue);

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const averWordReadingPerMin = 150;
  const readingTimeInMin = wordCount / averWordReadingPerMin;


  return (
    <div >
      <CharacterCounter />
          
      <textarea
       className="w-full border max-w-3xl text-xl bg-white p-6 rounded-lg shadow-md mb-5"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => {
          setText(e.target.value);
          onTextChange(e.target.value);
        }}
        rows={6}
      ></textarea>
     

     
    </div>
  );
}

export default TextInput;
