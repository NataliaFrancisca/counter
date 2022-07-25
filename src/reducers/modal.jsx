export const reducerModal = (state = false, action) => {
    switch(action.type){
        case 'modal/toggle':
            return !state;
        default:
            return state;
    }
}