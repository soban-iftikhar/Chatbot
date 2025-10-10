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

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handelSubmit(event);
    }
  }

  return (
    <>
      <div className="input-wrapper">
        <label htmlFor="user-input"></label>
        <input
          type="text"
          id="user-input"
          placeholder="Type your message here..."
          value={inputValue}
          onChange={getInputValue}
          onKeyPress={handleKeyPress}
        />
      </div>
      <button type="submit" className="send-button" onClick={handelSubmit}>
        Send
      </button>
    </>
  );
};

export default Input;
