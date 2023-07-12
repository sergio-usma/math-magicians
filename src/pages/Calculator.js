import { useState } from 'react';
import calculate from '../logic/calculate';
import '../css/Calculator.css';

function Calculator() {
  const [result, setResult] = useState('');
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const buttonName = e.target.name;
    const newObj = calculate(obj, buttonName);
    if (buttonName === 'AC') {
      setObj({
        total: null,
        next: null,
        operation: null,
      });
      setResult('');
      return;
    }

    if (buttonName === '=') {
      setObj({
        total: newObj.total,
        next: newObj.next,
        operation: newObj.operation,
      });
      setResult(newObj.total);
    } else {
      setObj({
        total: newObj.total,
        next: newObj.next,
        operation: newObj.operation,
      });
      setResult(newObj.next);
    }
  };

  return (
    <div className="calc">
      <h1 className="calc__title">Let&apos;s do some math!</h1>
      <div className="calc__container">
        <form>
          <input className="display output" type="text" value={result} placeholder="0" />
        </form>

        <div className="buttons">
          <button name="AC" type="button" onClick={handleClick}>AC</button>
          <button name="+/-" type="button" onClick={handleClick}>+/-</button>
          <button name="%" type="button" onClick={handleClick}>%</button>
          <button name="÷" className="div op" type="button" onClick={handleClick}>&divide;</button>
          <button name="7" type="button" onClick={handleClick}>7</button>
          <button name="8" type="button" onClick={handleClick}>8</button>
          <button name="9" type="button" onClick={handleClick}>9</button>
          <button name="x" className="mul op" type="button" onClick={handleClick}>&times;</button>
          <button name="4" type="button" onClick={handleClick}>4</button>
          <button name="5" type="button" onClick={handleClick}>5</button>
          <button name="6" type="button" onClick={handleClick}>6</button>
          <button name="-" className="min op" type="button" onClick={handleClick}>-</button>
          <button name="1" type="button" onClick={handleClick}>1</button>
          <button name="2" type="button" onClick={handleClick}>2</button>
          <button name="3" type="button" onClick={handleClick}>3</button>
          <button name="+" className="plu op" type="button" onClick={handleClick}>+</button>
          <button name="0" className="span-two" type="button" onClick={handleClick}>0</button>
          <button name="." type="button" onClick={handleClick}>.</button>
          <button name="=" className="equ op" type="button" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
