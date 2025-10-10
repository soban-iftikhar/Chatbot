import React from "react";
import { useState } from "react";

const Input = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  function getInputValue(event) {
    const value = event.target.value;
    setInputValue(value); 
  }

  function handelSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      onSubmit(inputValue); 
      setInputValue(""); 
    }
  }

  return (
    <>
      <div className="input-container">
        <label htmlFor="user-input"></label>
        <input
          type="text"
          id="user-input"
          placeholder="Type your message here..."
          value={inputValue}
          onChange={getInputValue}
        />
        <button type="submit" onClick={handelSubmit}>Send</button>
      </div>
    </>
  );
};

export default Input;
