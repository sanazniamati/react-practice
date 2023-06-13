import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      className="bg-white p-2 roundd cursor-pointer hover:bg-slate-200 trasition"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
