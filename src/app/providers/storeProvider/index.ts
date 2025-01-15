import { configureStore } from "@reduxjs/toolkit";

type State = {
  counter: number;
};

type IncrementAction = {
  type: "INCREMENT";
};

type DecrementAction = {
  type: "DECREMENT";
};

type Action = IncrementAction | DecrementAction;

const initialState: State = {
  counter: 0,
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      if (state.counter === 0) {
        return state;
      }

      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer,
});

export type StoreType = typeof store;
export type TypedDispatch = StoreType["dispatch"];
export type RootStateType = ReturnType<StoreType["getState"]>;
