const reducer = (state, action) => {
    switch (action.type) {
        case 'REMOVE-TODO':
            state.todoList.splice(action.payload, 1);
            return { ...state }
        case 'ADD-TODO':
            return { ...state, todoList: [...state.todoList, action.payload], todo: "" }
        case 'SET-TODO':
            return { ...state, todo: action.payload }
        default:
            return state;
    }

};

export default reducer;