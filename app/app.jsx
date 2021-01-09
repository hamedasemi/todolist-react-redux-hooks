import { StrictMode, useReducer } from 'react';
import { render } from 'react-dom';
import style from './app.css';
import reducer from './reducer';
import { Provider } from './context';
import { List } from './list/list';
import { Input } from './input/input';

const App = () => {
    const initialState = {
        temp: "",
        list: []
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return <StrictMode>
        <Provider value={{ state, dispatch }}>
            <List></List>
            <Input></Input>
        </Provider>
    </StrictMode>
};

render(<App />, document.querySelector('article'));