import React, { useState, useCallback, useRef, useReducer, useMemo } from "react";

const result = (state, action) => {
  let n1 = Number(action.number1);
  let n2 = Number(action.number2);
  switch (action.operator) {
    case "+": 
      return state = n1+n2;
    case "-": 
      return state = n1-n2;
    case "*": 
      return state = n1*n2;
    case "/": 
      return state = n1/n2;
    default:
      break;
  }
};

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operator, setOperator] = useState("+");
  const operators = useRef();
  const json = { number1, number2, operator };

  const onNumber1 = useCallback((e) => {
      setNumber1(e.currentTarget.value);
    }, []);

  const onNumber2 = useCallback((e) => {
      setNumber2(e.currentTarget.value);
    }, []);

  const opValue = useCallback((e) => {
    const op = e.currentTarget;
    const oper = op[op.selectedIndex].value;
    setOperator(oper);
  }, []);

  const [calc, setCalc] = useReducer(result, 0);
  const onClick = useCallback(() => {
    setCalc(json);
  },);

  const asdsad = useMemo(() => {

  });

  console.log(number1,operator,number2);

  return (
    <div>
      <h1>Exam07_사칙연산</h1>
      <p>useReducer, useMemo, useCallback을 활용한 사칙연산</p>
      <hr />
      <input type="text" onChange={onNumber1} />
      <select ref={operators} onChange={opValue}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="text" onClick={onNumber2} />
      <button type="button" onClick={onClick}>
        결과확인
      </button>
      <hr />
      <div>
        <p>{number1}{operator}{number2}</p>
        <p>{calc}</p>
      </div>
    </div>
  );
}

export default App;
