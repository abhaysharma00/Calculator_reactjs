import React, { useState } from "react";
function Button({ symbol, setop }) {
  return (
    <div
      onClick={() => {
        setop(symbol);
      }}
    >
      {symbol}
    </div>
  );
}

export default Button;
