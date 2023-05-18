import React, { useReducer, useContext, useEffect } from 'react';
import { reducer, initalState } from '../stores/reducer';
import { getTodos } from '../services/api';
import { Context } from './Context';
import { setJobs, setLoading } from '../stores/actions';
import { Action, State } from '../stores/types';

interface Props {
    children: React.ReactNode
}

function Provider ({ children }: Props): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initalState);
  useEffect(() => {
    async function fetchData (): Promise<void> {
      try {
        dispatch(setLoading(true));
        await new Promise((resolve) => setTimeout(resolve, 500));
        const response = await getTodos();
        dispatch(setJobs(response));
        dispatch(setLoading(false));
      } catch (error) {
        throw new Error('Không tìm thấy dữ liệu');
      }
    }
    void fetchData();
  }, []);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
}
export const useTodo = (): { state: State, dispatch: React.Dispatch<Action> } => useContext(Context);
export default Provider;
