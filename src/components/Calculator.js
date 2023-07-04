import PropTypes from 'prop-types';
import { useState } from 'react';
import calculate from '../logic/calculate';

const allBtn = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

function Display({ result }) {
  return <div className="display">{result}</div>;
}

function Buttons({ name, buttonsClasses, onClick }) {
  return (
    <button
      className={buttonsClasses(name)}
      type="button"
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}

function Calculator() {
  const [print, setPrint] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const buttonsClasses = (name) => {
    let btnClass = 'btn';
    if (name === '÷' || name === 'x' || name === '-' || name === '+' || name === '=') {
      btnClass = 'btn orange';
    } else if (name === '0') {
      btnClass = 'btn zero';
    }
    return btnClass;
  };

  const setCalculate = (name) => setPrint(calculate(print, name));

  return (
    <section className="calculatorContainer">
      <Display result={print.total || print.next || 0} />
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
  name: PropTypes.PropTypes.string.isRequired,
  buttonsClasses: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

Display.propTypes = {
  result: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Calculator;
