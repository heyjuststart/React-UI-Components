import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
      <div className="calculator-row">
        <ActionButton className="flex3 clear-button">clear</ActionButton>
        <ActionButton className="red">&divide;</ActionButton>
      </div>
      <div className="calculator-row">
        <NumberButton>7</NumberButton>
        <NumberButton>8</NumberButton>
        <NumberButton>9</NumberButton>
        <ActionButton className="red">&times;</ActionButton>
      </div>
      <div className="calculator-row">
        <NumberButton>4</NumberButton>
        <NumberButton>5</NumberButton>
        <NumberButton>6</NumberButton>
        <ActionButton className="red">&minus;</ActionButton>
      </div>
      <div className="calculator-row">
        <NumberButton>1</NumberButton>
        <NumberButton>2</NumberButton>
        <NumberButton>3</NumberButton>
        <ActionButton className="red">+</ActionButton>
      </div>
      <div className="calculator-row">
        <NumberButton className="flex3">0</NumberButton>
        <ActionButton className="red">=</ActionButton>
      </div>
    </div>
  );
};

export default App;
