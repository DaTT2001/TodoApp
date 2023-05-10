import { Context } from "./Context";
import {useReducer, useContext, useEffect} from 'react'
import { reducer, initalState } from "../store/reducer";
import { getTodos } from "../services/api";
import { setJobs } from "../store/actions";

interface Props {
    children: React.ReactNode;
}

function Provider({ children }: Props) {
    const [state, dispatch] = useReducer(reducer, initalState);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getTodos();
                dispatch(setJobs(response));
              } catch (error) {
                console.error(error);
              }
        }

        fetchData()
    }, [])
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}
export const useTodo = () => useContext(Context);
export default Provider
