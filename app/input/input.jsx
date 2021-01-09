import { useContext } from "react";
import context from "../context";

export const Input = () => {
    const { state, dispatch } = useContext(context);
    const changeHandler = (event) => {
        dispatch({ type: "SET-TEMP", payload: event.target.value })
    }
    const addHandler = (event) => {
        event.preventDefault()
        dispatch({ type: "ADD-ITEM", payload: state.temp })
    }
    return <form action="" onSubmit={addHandler}>
        <input type="text" value={state.temp} onChange={changeHandler} />
        <button>+</button>
    </form>
}



