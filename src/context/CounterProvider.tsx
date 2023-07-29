import { FC, useReducer, ReactNode } from "react";
import { counterReducer, CounterContext } from "./";

export interface CounterState {
  counter: number;
}

interface Props {
  children: ReactNode;
}

const COUNTER_INITIAL_STATE: CounterState = {
  counter: 1
};

export const CounterProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, COUNTER_INITIAL_STATE);

  const increment = () => {
    dispatch({ type: "[Counter] - Increment" });
  };

  const reset = () => {
    dispatch({ type: "[Counter] - Reset" });
  };

  const decrement = () => {
    dispatch({ type: "[Counter] - Decrement" });
  };

  return (
    <CounterContext.Provider
      value={{
        ...state,

        // method
        increment,
        reset,
        decrement
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
