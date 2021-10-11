import React from "react";
import Theme from "./theme";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

type KeypadProps = {
  onClick: (name: string) => void;
  result: string;
};

export default class Keypad extends React.Component<KeypadProps> {
  constructor(props: KeypadProps) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="calculator">
        <div className="heading">
          <label className="heading-calc" htmlFor="calculator">
            calc
          </label>
        </div>

        <input type="text" placeholder="0" value={this.props.result} />
        <div className="calculator-buttons">
          <button
            name="8"
            className="calc-button"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            8
          </button>

          <button
            name="7"
            className="calc-button"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            7
          </button>

          <button
            name="9"
            className="calc-button"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            9
          </button>

          <button
            name="DEL"
            className="calc-button is-del"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            DEL
          </button>

          <button
            name="4"
            className="calc-button"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            4
          </button>

          <button
            name="5"
            className="calc-button"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            5
          </button>

          <button
            name="6"
            className="calc-button"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            6
          </button>

          <button
            name="+"
            className="calc-button"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            &#43;
          </button>

          <button
            name="1"
            className="calc-button"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            1
          </button>

          <button
            name="2"
            className="calc-button"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            2
          </button>

          <button
            name="3"
            className="calc-button"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            3
          </button>

          <button
            name="-"
            className="calc-button"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            &minus;
          </button>

          <button
            name="."
            className="calc-button"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            &sdot;
          </button>

          <button
            name="0"
            className="calc-button"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            0
          </button>

          <button
            name="/"
            className="calc-button"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            &divide;
          </button>

          <button
            name="*"
            className="calc-button"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            &times;
          </button>

          <button
            name="Reset"
            className="calc-button is-reset"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            Reset
          </button>

          <button
            name="="
            className="calc-button is-equals"
            onClick={(e) => {
              this.props.onClick((e.target as HTMLButtonElement).name);
            }}
          >
            &#61;
          </button>
        </div>
      </div>
    );
  }
}
