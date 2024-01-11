import React from "react";

function Input({ setnum }) {
  return (
    <div>
      Enter the number
      <input
        type="number"
        onChange={(e) => {
          setnum(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
