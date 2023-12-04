import "./App.css";
import Button from "./components/Button";
import { buttons, numbers } from "./components/buttons";
import { useState } from "react";

function App() {
  const [screenValue, setScreenValue] = useState("0");
  const [bufferValue, setBufferValue] = useState(0);
  const [operationName, setOperationName] = useState("");

  function onClickHandler(event) {
    const target = event.target.textContent;
    const getIsOperator = event.target.getAttribute("operator");
    const operator = event.target.getAttribute("name");

    if (getIsOperator === "false") {
      switch (target) {
        case "-/+":
          setScreenValue(-screenValue);
          break;

        case ".":
          setScreenValue(screenValue.includes(".") ? screenValue : screenValue + ".");
          break;

        case "←":
          screenValue.length > 1 ? setScreenValue(screenValue.slice(0, -1)) : setScreenValue(0);
          break;

        case "C":
          setScreenValue(0);
          setBufferValue(0);
          break;

        default:
          setScreenValue(screenValue === 0 ? target : screenValue + target);
          break;
      }
    } else {
      mathOperations(operator);
    }
  }

  function mathOperations(operator) {
    switch (operator) {
      case "sqrt":
        setScreenValue(Math.sqrt(screenValue));
        break;

      case "square":
        setScreenValue(screenValue * screenValue);
        break;

      case "equals":
        equalsButton(operationName);
        break;

      default:
        setBufferValue(screenValue);
        setScreenValue(0);
        setOperationName(operator);
        break;
    }
  }

  function equalsButton(operationName) {
    switch (operationName) {
      case "add":
        setScreenValue(+bufferValue + +screenValue);
        break;

      case "sub":
        setScreenValue(+bufferValue - +screenValue);
        break;

      case "mul":
        setScreenValue(+bufferValue * +screenValue);
        break;

      case "div":
        setScreenValue(+bufferValue / +screenValue);
        break;

      case "exp":
        setScreenValue((+bufferValue) ** +screenValue);
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <section className="calculator">
        <header className="App-header">React Calculator</header>
        <section className="screen">{screenValue}</section>
        <section className="calc-functions">
          {buttons.map((button) => (
            <Button
              operator={button.op}
              key={button.name}
              name={button.name}
              styles={button.style}
              onClick={onClickHandler}
            >
              {button.symbol}
            </Button>
          ))}
        </section>
        <section className="calc-numbers">
          {numbers.map((button) => (
            <Button
              operator={button.op}
              key={button.name}
              name={button.name}
              styles={button.style}
              onClick={onClickHandler}
            >
              {button.symbol}
            </Button>
          ))}
        </section>
      </section>
    </div>
  );
}

export default App;
