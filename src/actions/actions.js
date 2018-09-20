export const getAllUsers = (users) => {
    return {
        type: 'GET_USERS',
        users
    }
};

export const getAllUsersQuery = (page,since) => {
    return (dispatch) =>{
        fetch(`https://api.github.com/users?per_page=${page}&since=${since}`)
        .then(res => res.json())
        .then(json => {
            dispatch(getAllUsers(json));
        });
    }
};

export const getSingleUser = (user) => {
    return {
        type: 'GET_SINGLE_USER',
        user
    }
};

export const getSingleUserQuery = (username) => {
    return (dispatch) =>{
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(json => {
                dispatch(getSingleUser(json));
               return json.followers_url;
            })
            .then( followers => dispatch(getFollowersQuery(followers)));
    }
};

export const getFollowers = (followers) => {
    return {
        type: 'GET_FOLLOWERS',
        followers
    }
};

export const getFollowersQuery = (followersUrl) => {
    return (dispatch) =>{
        fetch(`${followersUrl}`)
            .then(res => res.json())
            .then(json => dispatch(getFollowers(json)));
    }
};

export const clearUser = () => {
    return {
        type:'CLEAR_USER'
    }
}

export const clearFollowers = () => {
    return {
        type:'CLEAR_FOLLOWERS'
    }
}