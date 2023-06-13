import React from "react";

function Input({ value, onChange, onKeyUp, placeholder, inputRef }) {
  return (
    <input
      type={"text"}
      value={value}
      ref={inputRef}
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
      className="border rounded mr-2 px-2"
    />
  );
}

export default Input;
