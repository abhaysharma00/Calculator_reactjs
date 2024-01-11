import React, { useEffect } from "react";

export function calculate(symbol) {
  console.log(symbol);
  // setresult(20);
}

function Output({ result, setresult, num1, num2, op }) {
  useEffect(() => {
    let x = Number(num1);
    let y = Number(num2);

    if (op == "+") setresult(x + y);
    else if (op == "-") setresult(x - y);
    else if (op == "*") setresult(x * y);
    else if (op == "/") setresult(x / y);
  }, [num1, num2, op]);

  return (
    <div>
      <div>
        <h4>Equation</h4>
        {`${num1}
      ${op}
      ${num2} = ${result}`}
      </div>
      <div onClick={() => {}}>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default Output;
