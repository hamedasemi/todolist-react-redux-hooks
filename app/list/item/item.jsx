import { useContext } from "react";
import context from "../../context";

export const Item = (props) => {
    const { state, dispatch } = useContext(context);
    const removeHandler = () => {
        dispatch({ type: "REMOVE-ITEM", payload: props.index })
    }
    return <div style={{ display: "flex", alignItems: "center" }}>
        <h1>{props.item}</h1>
        <button onClick={removeHandler}>-</button>
    </div>
}