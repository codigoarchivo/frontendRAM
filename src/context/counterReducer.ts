import { CounterState } from "./";

type ContadorActionType =
  | { type: "[Counter] - Increment" }
  | { type: "[Counter] - Reset" }
  | { type: "[Counter] - Decrement" };

export const counterReducer = (
  state: CounterState,
  action: ContadorActionType
): CounterState => {
  switch (action.type) {
    case "[Counter] - Increment":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "[Counter] - Reset":
      return {
        counter: 1
      };
    case "[Counter] - Decrement":
      return {
        ...state,
        counter: state.counter > 1 ? state.counter - 1 : 1
      };
    default:
      return state;
  }
};
