import React, { useReducer, useContext, useEffect } from 'react';
import { todoReducer, Action, Context } from './TodoContext';
import { getTodos } from '../shared/api/api';
import { setJobs, setLoading } from './helpers';
import { ProviderProps, State } from '../shared/interfaces';
import { INITIAL_STATE } from '../shared/constants';

function TodoProvider ({ children }: ProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);
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
export default TodoProvider;
