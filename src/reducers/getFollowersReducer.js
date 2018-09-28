const initialState = {
    followers:[],
    isFetchingFollowers:true
};


const getFollowersReducer = (state = initialState,action) => {

    switch(action.type) {
        case 'GET_FOLLOWERS':
            return {
                ...state,
                followers: [...action.followers],
                isFetchingFollowers:false
            };

        
        case 'CLEAR_FOLLOWERS':
            return {
            ...state,
            followers: [],
            isFetchingFollowers:true
        };

        default:
            return state;
    }
};

export default getFollowersReducer;