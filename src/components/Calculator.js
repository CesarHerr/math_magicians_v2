import PropTypes from 'prop-types';
import { useState } from 'react';
import calculate from '../logic/calculate';

const allBtn = [
  'AC',
  '+/-',
  '%',
  '÷',
  7,
  8,
  9,
  'x',
  4,
  5,
  6,
  '-',
  1,
  2,
  3,
  '+',
  0,
  '.',
  '=',
];

function Display({ result }) {
  return <div className="display">{result}</div>;
}

function Buttons({ name, buttonsClasses, setCalculate }) {
  return (
    <button
      className={buttonsClasses(name)}
      type="button"
      onClick={setCalculate(name)}
    >
      {name}
    </button>
  );
}

function Calculator() {
  const [result, setResult] = useState(0);
  const buttonsClasses = (name) => {
    let btnClass = 'btn';
    if (name === '÷' || name === 'x' || name === '-' || name === '+' || name === '=') {
      btnClass = 'btn orange';
    } else if (name === 0) {
      btnClass = 'btn zero';
    }
    return btnClass;
  };

  const setCalculate = (name) => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    useState(calculate(obj, name));
  };

  return (
    <section className="calculatorContainer">
      <Display result={setResult} />
      <div className="buttons">
        {allBtn.map((name) => (
          <Buttons
            key={name}
            name={name}
            buttonsClasses={buttonsClasses}
            onClick={setCalculate}
          />
        ))}
      </div>
    </section>
  );
}

Buttons.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  buttonsClasses: PropTypes.func.isRequired,
  setCalculate: PropTypes.func,
};

Display.propTypes = {
  result: PropTypes.func.isRequired,
};

export default Calculator;
