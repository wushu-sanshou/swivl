const initialState = {
    isFetching:true,
    users:[]
};


const getAllUsersReducer = (state = initialState,action) => {
    if(action.type === 'GET_USERS') {
        return {
            ...state,
            isFetching:false,
            users:[...action.users]
        };
    }

    return state;
};

export default getAllUsersReducer;