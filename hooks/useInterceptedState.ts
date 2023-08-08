import { SetStateAction, useState } from "react";

type BeforeSetStateCallback<StateType> = (prevState: StateType) => StateType;
type SetStateType<StateType> = BeforeSetStateCallback<StateType> | StateType;

/**
 * Intercept state changes and call a callback function asynchronously before updating the state.
 * 
 * @param initialState 
 * @param callback 
 * @returns 
 */ 
export default function useInterceptedState<StateType>(initialState: StateType, callback: (args: StateType) => void) {
  const [state, setState] = useState<StateType>(initialState);

  const intercept = (_newState: SetStateType<StateType>) => {
    const newState = (typeof _newState === 'function' 
      ? (_newState as BeforeSetStateCallback<StateType>)(state) 
      : _newState) as StateType;
    setTimeout(() => {
      callback(newState);
    }, 0);
    setState(newState);
  }

  return [
    state, 
    intercept
  ] as const;
}