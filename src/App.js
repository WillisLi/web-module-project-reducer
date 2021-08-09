import React from 'react';
import { useReducer } from 'react';
import { applyNumber, changeOperator, clearDisplay, setCurrentMemory, setMemory, zeroMemory } from './actions';
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers';

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const applyNumberClick = (num) => {
    dispatch(applyNumber(num));
  }

  const changeOperation = (op) => {
    dispatch(changeOperator(op))
  }

  const clearHandler = () => {
    dispatch(clearDisplay());
  }

  const setToCurrentMemory = () => {
    dispatch(setCurrentMemory())
  }

  const updateMemory = () => {
    dispatch(setMemory())
  }

  const resetMemory = () => {
    dispatch(zeroMemory());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick = {() => setToCurrentMemory()} value={"M+"}/>
              <CalcButton onClick = {() => updateMemory()} value={"MR"}/>
              <CalcButton onClick = {() => resetMemory()} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick = {() => applyNumberClick(1)} value={1}/>
              <CalcButton onClick = {() => applyNumberClick(2)} value={2}/>
              <CalcButton onClick = {() => applyNumberClick(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick = {() => applyNumberClick(4)} value={4}/>
              <CalcButton onClick = {() => applyNumberClick(5)} value={5}/>
              <CalcButton onClick = {() => applyNumberClick(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick = {() => applyNumberClick(7)} value={7}/>
              <CalcButton onClick = {() => applyNumberClick(8)} value={8}/>
              <CalcButton onClick = {() => applyNumberClick(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick = {() => changeOperation('+')} value={"+"}/>
              <CalcButton onClick = {() => changeOperation('*')} value={"*"}/>
              <CalcButton onClick = {() => changeOperation('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick = {() => clearHandler()} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
