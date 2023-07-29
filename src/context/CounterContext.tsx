import { createContext } from "react";

interface ContextProps {
  counter: number;

  // method
  increment: () => void;
  reset: () => void;
  decrement: () => void;
}

export const CounterContext = createContext({} as ContextProps);
