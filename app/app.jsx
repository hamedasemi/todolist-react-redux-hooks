import { StrictMode, useReducer } from 'react';
import { render } from 'react-dom';
import style from './app.css';
import reducer from './reducer';
import { Provider } from './context';
import { List } from './list/list';
const App = () => {
    const initialState = {
        temp: "",
        list: []
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const changeHandler = (event) => {
        dispatch({ type: "SET-TEMP", payload: event.target.value })
    }
    const addHandler = (event) => {
        event.preventDefault()
        dispatch({ type: "ADD-ITEM", payload: state.temp })
    }
    return <StrictMode>
        <Provider value={{ state, dispatch }}>
            <List></List>
            <form action="" onSubmit={addHandler}>
                <input type="text" value={state.temp} onChange={changeHandler} />
                <button>+</button>
            </form>
        </Provider>
    </StrictMode>
};

render(<App />, document.querySelector('article'));