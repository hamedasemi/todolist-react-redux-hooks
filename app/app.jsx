import { StrictMode, useReducer } from 'react';
import { render } from 'react-dom';
import style from './app.css';
import reducer from './reducer';
import { Provider } from './context';
import { Todo } from './todo/todo';
const App = () => {
    const initialState = {
        todo: "",
        todoList: []
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const changeHandler = (event) => {
        dispatch({ type: "SET-TODO", payload: event.target.value })
    }
    const addHandler = (event) => {
        event.preventDefault()
        dispatch({ type: "ADD-TODO", payload: state.todo })
    }
    return <StrictMode>
        <Provider value={{ state, dispatch }}>
            <Todo></Todo>
            <form action="" onSubmit={addHandler}>
                <input type="text" value={state.todo} onChange={changeHandler} />
                <button>+</button>
            </form>
        </Provider>
    </StrictMode>
};

render(<App />, document.querySelector('article'));