const reducer = (state, action) => {
    switch (action.type) {
        case 'REMOVE-ITEM':
            state.list.splice(action.payload, 1);
            return { ...state }
        case 'ADD-ITEM':
            return { ...state, list: [...state.list, action.payload], temp: "" }
        case 'SET-TEMP':
            return { ...state, temp: action.payload }
        default:
            return state;
    }

};

export default reducer;