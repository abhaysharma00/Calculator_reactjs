import "./App.css";
import react, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Output from "./Output";

function App() {
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const [op, setop] = useState("");
  const [result, setresult] = useState("");

  return (
    <div>
      <h1>Calculator</h1>
      <Input setnum={setnum1} />
      <Input setnum={setnum2} />

      <h4>choose an operation </h4>
      <Button symbol={"+"} setop={setop} />
      <Button symbol={"-"} setop={setop} />
      <Button symbol={"*"} setop={setop} />
      <Button symbol={"/"} setop={setop} />

      <h3>Result</h3>
      <Output
        result={result}
        setresult={setresult}
        num1={num1}
        num2={num2}
        op={op}
      />
    </div>
  );
}

export default App;
