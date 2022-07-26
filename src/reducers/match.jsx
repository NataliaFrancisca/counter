export const reducerMatchs = (state = [], action) => {
    switch(action.type){
        case 'matchs/setMatchs':
            return [...state, action.payload];
        case 'matchs/getMatchs':
            return state;
        case 'matchs/deleteMatchs':
            return state.slice(0);
        default:
            return state;
    }
}