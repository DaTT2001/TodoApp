import { createContext } from 'react';
import { initalState } from '../store/reducer';
import { State, Action } from '../store/types';

export const Context = createContext<{state: State, dispatch: React.Dispatch<Action>}>({
    state: initalState,
    dispatch: () => {},
});

