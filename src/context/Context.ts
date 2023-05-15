import { createContext } from 'react';
import { initalState } from '../stores/reducer';
import { State, Action } from '../stores/types';

export const Context = createContext<{state: State, dispatch: React.Dispatch<Action>}>({
  state: initalState,
  dispatch: () => {}
});
