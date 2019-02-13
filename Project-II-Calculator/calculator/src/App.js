import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const initialState = {
  total: 0,
  display: '0',
  comboMode: false
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.queuedAction = null;
  }

  appendToNumber(val) {
    const { display, comboMode } = this.state;
    if(display === '0') {
      this.setState({ ...this.state, display: val.toString() });
    } else if(!comboMode) {
      this.setState({ ...this.state, display: `${this.state.display}${val}` });
    } else {
      this.setState({ ...this.state, display: val.toString(), comboMode: false });
    }
  }

  doQueuedAction() {
    const { display, total } = this.state;
    if(display === '0') {
      this.clear();
    } else if(!this.queuedAction) {
      this.setState({ ...this.state, total: parseInt(display, 10), display: '' });
    } else {
      const result = this.queuedAction(total, parseInt(display, 10));
      this.setState({ ...this.state, total: result, display: result.toString(), comboMode: true });
      this.queuedAction = null;
    }
  }

  multiply() {
    this.doQueuedAction();
    // debugger
    this.queuedAction = ( total, display ) => total * parseInt(display, 10);
  }

  divide() {
    this.doQueuedAction();

    this.queuedAction = ( total, display ) => total / parseInt(display, 10);
  }

  add() {
    this.doQueuedAction();

    this.queuedAction = ( total, display ) => total + parseInt(display, 10);
  }

  subtract() {
    this.doQueuedAction();

    this.queuedAction = ( total, display ) => total - parseInt(display, 10);
  }

  equalClick() {
    this.doQueuedAction();
  }

  clear() {
    this.setState(initialState);
  }

  render() {
    const { display } = this.state;

    return (
      <div className="calculator">
        <CalculatorDisplay>{ display }</CalculatorDisplay>
        <div className="calculator-row">
          <ActionButton className="flex3 clear-button" onClick={() => this.clear()}>clear</ActionButton>
          <ActionButton className="red" onClick={() => this.divide()}>&divide;</ActionButton>
        </div>
        <div className="calculator-row">
          <NumberButton onClick={() => this.appendToNumber(7)}>7</NumberButton>
          <NumberButton onClick={() => this.appendToNumber(8)}>8</NumberButton>
          <NumberButton onClick={() => this.appendToNumber(9)}>9</NumberButton>
          <ActionButton className="red" onClick={() => this.multiply()}>&times;</ActionButton>
        </div>
        <div className="calculator-row">
          <NumberButton onClick={() => this.appendToNumber(4)}>4</NumberButton>
          <NumberButton onClick={() => this.appendToNumber(5)}>5</NumberButton>
          <NumberButton onClick={() => this.appendToNumber(6)}>6</NumberButton>
          <ActionButton className="red" onClick={() => this.subtract()}>&minus;</ActionButton>
        </div>
        <div className="calculator-row">
          <NumberButton onClick={() => this.appendToNumber(1)}>1</NumberButton>
          <NumberButton onClick={() => this.appendToNumber(2)}>2</NumberButton>
          <NumberButton onClick={() => this.appendToNumber(3)}>3</NumberButton>
          <ActionButton className="red" onClick={() => this.add()}>+</ActionButton>
        </div>
        <div className="calculator-row">
          <NumberButton className="flex3" onClick={() => this.appendToNumber(0)}>0</NumberButton>
          <ActionButton className="red" onClick={() => this.equalClick()}>=</ActionButton>
        </div>
      </div>
    );
  }

}

export default App;
