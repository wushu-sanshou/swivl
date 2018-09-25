export const getAllUsers = (users) => {
    return {
        type: 'GET_USERS',
        users
    }
};

export const getAllUsersQuery = () => {

    return async(dispatch) => {
        const req = await fetch(`https://api.github.com/users?per_page=20`);
        const json = await req.json();
        dispatch(getAllUsers(json));
    }
};

export const getSingleUser = (user) => {
    return {
        type: 'GET_SINGLE_USER',
        user
    }
};

export const getSingleUserQuery = (username) => {
    return async (dispatch) =>{
      const req = await fetch(`https://api.github.com/users/${username}`);
          const json = await req.json();
        dispatch(getSingleUser(json));
        dispatch(getFollowersQuery(json.followers_url));
    }
};

export const getFollowers = (followers) => {
    return {
        type: 'GET_FOLLOWERS',
        followers
    }
};

export const getFollowersQuery = (followersUrl) => {
    return async (dispatch) =>{
        const req =  await fetch(`${followersUrl}`);
        const json = await req.json();
        dispatch(getFollowers(json));

    }
};

export const clearUser = () => {
    return {
        type:'CLEAR_USER'
    }
};

export const clearFollowers = () => {
    return {
        type:'CLEAR_FOLLOWERS'
    }
};
