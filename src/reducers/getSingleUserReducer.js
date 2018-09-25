const initialState = {
    user:{},
    isFetching:true
};


const getSingleUserReducer = (state = initialState,action) => {
    
    switch(action.type){
        case 'GET_SINGLE_USER': 
            return {
                ...state,
               user:{ ...action.user},
                isFetching:false
            };

        case 'CLEAR_USER':
            return {
                user:{},
                isFetching:true
            };
        
        default:
            return state;
    }
    
};

export default getSingleUserReducer;