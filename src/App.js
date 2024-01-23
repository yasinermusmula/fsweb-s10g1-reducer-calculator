import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

import {
  applyNumber,
  CHANGE_OPERATION,
  clearDisplay,
  clearMemory,
  changeMemory,
  applyMemory,
} from "./actions";
import reducer, { initialState } from "./reducers";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick = (e) => {
    dispatch(applyNumber(e.target.value));
  };

  const handleOperationChange = (e) => {
    dispatch({ type: CHANGE_OPERATION, payload: e.target.value });
  };

  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  };

  const handleClearMemory = () => {
    dispatch(clearMemory());
  };

  const handleChangeMemory = () => {
    dispatch(changeMemory());
  };

  const handleMemoryClick = () => {
    dispatch(applyMemory());
  };

  console.log(state);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleChangeMemory} />
              <CalcButton value={"MR"} onClick={handleMemoryClick} />
              <CalcButton value={"MC"} onClick={handleClearMemory} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleNumberClick} />
              <CalcButton value={2} onClick={handleNumberClick} />
              <CalcButton value={3} onClick={handleNumberClick} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleNumberClick} />
              <CalcButton value={5} onClick={handleNumberClick} />
              <CalcButton value={6} onClick={handleNumberClick} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleNumberClick} />
              <CalcButton value={8} onClick={handleNumberClick} />
              <CalcButton value={9} onClick={handleNumberClick} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperationChange} />
              <CalcButton value={"*"} onClick={handleOperationChange} />
              <CalcButton value={"-"} onClick={handleOperationChange} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearDisplay} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
