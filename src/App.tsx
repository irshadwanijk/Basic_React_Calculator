import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Keypad from "./keypadComp";

export default class App extends React.Component<{}, { result: string }> {
  constructor(props: string) {
    super(props);
    this.state = {
      result: ""
    };
  }

  onClick = (name: string) => {
    // name parameter holds the value which was clicked on calculator
    const result = this.state.result;

    let lastIndex = result.length - 1;
    if (name === "=") {
      this.calculate();
    } else if (name === "DEL") {
      this.backspace();
    } else if (name === "Reset") {
      this.reset();
    } else if (
      name === "+" ||
      name === "-" ||
      name === "/" ||
      name === "*" ||
      name === "."
      // here we check if the key clicked is among operators.
    ) {
      if (result === "") {
        return;
      } else if (
        result[lastIndex] === "+" ||
        result[lastIndex] === "-" ||
        result[lastIndex] === "/" ||
        result[lastIndex] === "*" ||
        result[lastIndex] === "."
        // then here we check if there is already an operator at the last index.
      ) {
        // If there already exists an operator and user clicks some other or same operator again then the last operator is replaced with the new one
        let tempResult = this.state.result.slice(0, -1);
        this.setState((prevState) => {
          return { ...prevState, result: tempResult + name };
        });
      } else {
        this.setState((prevState) => {
          return { result: prevState.result + name };
          // return { result: tempResult + name };
        });
      }
    } else {
      this.setState((prevState) => {
        return { result: prevState.result + name };
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  backspace = () => {
    this.setState((prevState) => {
      return { result: this.state.result.slice(0, -1) };
    });
  };

  reset = () => {
    this.setState((prevState) => {
      return { result: "" };
    });
  };

  render() {
    console.log("at render", this.state.result);
    return (
      <div className="App">
        <div className="">
          {/* <Theme /> */}
          <Keypad onClick={this.onClick} result={this.state.result} />
        </div>
      </div>
    );
  }
}
