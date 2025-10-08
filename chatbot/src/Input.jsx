import React from "react";

const Input = () => {
  return (
    <>
      <div className="input-container">
        <label htmlFor="user-input"></label>
        <input
          type="text"
          id="user-input"
          placeholder="Type your message here..."
        />
        <button type="submit">Send</button>
      </div>
    </>
  );
};

export default Input;
