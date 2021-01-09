import { useContext } from "react";
import context from "../context";
import { Item } from "./item/item";

export const List = () => {
    const { state, dispatch } = useContext(context);
    
    return state.list.map((item, index) => {
        return <Item key={index} index={index} item={item}></Item>
    })
}