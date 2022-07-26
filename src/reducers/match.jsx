export const reducerMatchs = (state = [], action) => {
    switch(action.type){
        case 'matchs/setMatchs':
            return [...state, action.payload];
        case 'matchs/getMatchs':
            return state;
        default:
            return state;
    }
}