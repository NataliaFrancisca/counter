const STORAGE_KEY = 'SCORE_STORAGE';

export const scoreService = {
    save(matchScore){
        const previous = this.get();
        const updated = [...previous, matchScore];

        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    },

    get(){
        const storage = sessionStorage.getItem(STORAGE_KEY);

        if(storage){
            return JSON.parse(storage);
        }
    },

    init(){
        const storage = sessionStorage.getItem(STORAGE_KEY);

        if(!storage){
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        }
    }
}