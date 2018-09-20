const initialState = {};


const getSingleUserReducer = (state = initialState,action) => {
    
    switch(action.type){
        case 'GET_SINGLE_USER': 
            return {
                ...action.user
            }

        case 'CLEAR_USER':
            return {}
        
        default:
            return state;
    }
    
};

export default getSingleUserReducer;