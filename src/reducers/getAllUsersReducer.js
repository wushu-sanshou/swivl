const initialState = [];


const getAllUsersReducer = (state = initialState,action) => {
    if(action.type === 'GET_USERS') {
        return [...action.users];
    }

    return state;
}

export default getAllUsersReducer;