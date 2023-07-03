import PropTypes from 'prop-types';

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
function Display() {
  return <div className="display">0</div>;
}

function Buttons({ name, buttonsClasses }) {
  return (
    <button className={buttonsClasses(name)} type="button">
      {name}
    </button>
  );
}

function Calculator() {
  const buttonsClasses = (name) => {
    let btnClass = 'btn';
    if (name === '÷' || name === 'x' || name === '-' || name === '+' || name === '=') {
      btnClass = 'btn orange';
    } else if (name === 0) {
      btnClass = 'btn zero';
    }
    return btnClass;
  };

  return (
    <section className="calculatorContainer">
      <Display />
      <div className="buttons">
        {allBtn.map((name) => (
          <Buttons key={name} name={name} buttonsClasses={buttonsClasses} />
        ))}
      </div>
    </section>
  );
}

Buttons.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  buttonsClasses: PropTypes.func.isRequired,
};

export default Calculator;
