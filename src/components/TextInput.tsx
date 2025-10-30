//import { useState } from "react";

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
  //const [text, setText] = useState(initialValue);

  return (
    <div className="w-full">
      <h1>Text Input</h1>
      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)}
        rows={6}
      ></textarea>
    </div>
  );
}

export default TextInput;
