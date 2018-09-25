import React from 'react';
import {Link} from 'react-router-dom';



const UserComponent = (props) => {

const {login, avatar_url, html_url} = props.userInfo;
const link = `user/${login}`;

const imageLoadHandler = (e) => {
e.target.style.opacity = 1;
};


    return(
        <div className="userWrapper">
            <div className="index">
                 {props.index}
            </div>  
            <div className="avatar">
               <img src={avatar_url} alt="" onLoad={imageLoadHandler} style={{opacity:0}}/>
            </div>
            <div className="userInfo">
                <div className="login">
                 <b>Login:</b>
                  <span className="blueText"> {login} </span>
                </div>
                <div className="htmlUrl">
                    <b>User url:</b>
                    <span className="blueText"> <a href={html_url}>{html_url}</a> </span>
                </div>
            </div>
            <Link to={link}>
                <div className="more">
                More
                </div>
            </Link>
        </div>
    )
};

export default UserComponent;