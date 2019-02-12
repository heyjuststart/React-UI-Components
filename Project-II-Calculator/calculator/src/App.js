import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

// const App = () => {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      number: '0',
      action: ''
    };
  }

  appendToNumber(val) {
    const { number } = this.state;
    if(number === '0') {
      this.setState({ ...this.state, number: val.toString() });
    } else {
      this.setState({ ...this.state, number: `${this.state.number}${val}` });
    }
  }

  clear() {
    this.setState({ ...this.state, number: '0', total: 0, action: '' });
  }

  render() {
    const { number } = this.state;

    return (
      <div className="calculator">
        <CalculatorDisplay>{ number }</CalculatorDisplay>
        <div className="calculator-row">
          <ActionButton className="flex3 clear-button" onClick={() => this.clear()}> clear</ActionButton>
          <ActionButton className="red">&divide;</ActionButton>
        </div>
        <div className="calculator-row">
          <NumberButton onClick={() => this.appendToNumber(7)}>7</NumberButton>
          <NumberButton onClick={() => this.appendToNumber(8)}>8</NumberButton>
          <NumberButton onClick={() => this.appendToNumber(9)}>9</NumberButton>
          <ActionButton className="red">&times;</ActionButton>
        </div>
        <div className="calculator-row">
          <NumberButton onClick={() => this.appendToNumber(4)}>4</NumberButton>
          <NumberButton onClick={() => this.appendToNumber(5)}>5</NumberButton>
          <NumberButton onClick={() => this.appendToNumber(6)}>6</NumberButton>
          <ActionButton className="red">&minus;</ActionButton>
        </div>
        <div className="calculator-row">
          <NumberButton onClick={() => this.appendToNumber(1)}>1</NumberButton>
          <NumberButton onClick={() => this.appendToNumber(2)}>2</NumberButton>
          <NumberButton onClick={() => this.appendToNumber(3)}>3</NumberButton>
          <ActionButton className="red">+</ActionButton>
        </div>
        <div className="calculator-row">
          <NumberButton className="flex3" onClick={() => this.appendToNumber(0)}>0</NumberButton>
          <ActionButton className="red">=</ActionButton>
        </div>
      </div>
    );
  }

}
// };

export default App;
