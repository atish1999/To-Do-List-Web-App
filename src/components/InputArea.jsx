import React, { useState } from "react";

export default function InputArea(props) {
  const [text, setText] = useState("");
  const handleChnage = (event) => {
    const { value } = event.target;
    setText(value);
  };
  return (
    <div className="form">
      <input type="text" onChange={handleChnage} value={text} />
      <button
        onClick={() => {
          props.addItem(text);
          setText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
