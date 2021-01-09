import { Fragment, useContext } from "react";
import context from "../context";

export const Todo = () => {
    const { state, dispatch } = useContext(context);
    const removeHandler = (index) => {
        dispatch({type: "REMOVE-TODO", payload: index})
    }
    return state.todoList.map((todo, index) => {
        return <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <h1>{todo}</h1>
            <button onClick={removeHandler.bind(this, index)}>-</button>
        </div>
    })
}