export const reducerCountHome = (state = 0, action) => {
    switch(action.type){
        case 'increment/home':
            return state + 1;
        case 'decrement/home':
            return state - 1;
        case 'cleanScore/home':
            return state - state;
        default:
            return state;
    }
}

export const reducerCountVisitor = (state = 0, action) => {
    switch(action.type){
        case 'increment/visitor':
            return state + 1;
        case 'decrement/visitor':
            return state - 1;
        case 'cleanScore/visitor':
            return state - state;
        default:
            return state;
    }
}