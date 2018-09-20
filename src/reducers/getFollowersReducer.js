const initialState = [];


const getFollowersReducer = (state = initialState,action) => {

    switch(action.type){
        case 'GET_FOLLOWERS':
            return [...action.followers];
        
        case 'CLEAR_FOLLOWERS':
            return [];

        default:
            return state;
    }
};

export default getFollowersReducer;