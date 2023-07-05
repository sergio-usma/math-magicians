import { useState } from 'react';

function Calculator() {
  const [result] = useState('');

  const handleClick = () => {

  };

  return (
    <div className="container">
      <form>
        <input className="display output" type="text" value={result} placeholder="0" />
      </form>

      <div className="buttons">
        <button type="button" onClick={handleClick}>AC</button>
        <button type="button" onClick={handleClick}>+/-</button>
        <button type="button" onClick={handleClick}>%</button>
        <button className="div op" type="button" onClick={handleClick}>&divide;</button>
        <button type="button" onClick={handleClick}>7</button>
        <button type="button" onClick={handleClick}>8</button>
        <button type="button" onClick={handleClick}>9</button>
        <button className="mul op" type="button" onClick={handleClick}>&times;</button>
        <button type="button" onClick={handleClick}>4</button>
        <button type="button" onClick={handleClick}>5</button>
        <button type="button" onClick={handleClick}>6</button>
        <button className="min op" type="button" onClick={handleClick}>-</button>
        <button type="button" onClick={handleClick}>1</button>
        <button type="button" onClick={handleClick}>2</button>
        <button type="button" onClick={handleClick}>3</button>
        <button className="plu op" type="button" onClick={handleClick}>+</button>
        <button className="span-two" type="button" onClick={handleClick}>0</button>
        <button type="button" onClick={handleClick}>.</button>
        <button className="equ op" type="button" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
