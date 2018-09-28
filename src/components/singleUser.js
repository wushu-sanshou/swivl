import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleUserQuery, clearUser, clearFollowers } from '../actions/actions';
import {Link} from 'react-router-dom';
import Preloader from './preloader';

class SingleUser extends Component {
    constructor(props){
        super(props);

        this.imageLoadHandler = this.imageLoadHandler.bind(this);
    }

    imageLoadHandler(e){

        e.target.style.opacity=1;
        const picture = e.target.parentElement;
        picture.childNodes[0].setAttribute('srcset','');
    }
    
    componentDidMount() {
        const {username} = this.props.match.params;
        this.props.getUser(username);
    }
    
    componentWillUnmount(){        
       this.props.clearSingleUser();
       this.props.clearFollowers();
    }

    render() {
        const {avatar_url, name, followers, following, created_at, email, location, blog, bio, company} = this.props.userState.user;
        const {isFetching} = this.props.userState;
        const date = created_at?created_at.split('T')[0]:'';
        const followersArr = this.props.followersState.followers;
        const {isFetchingFollowers} = this.props.followersState;
        const follower = followersArr.map((item) => {
            return(
                <div className="followerExpose" key={item.id}>
                    <div>
                  <picture>
                  <source  srcSet="https://thumbs.gfycat.com/JointRevolvingAntelopegroundsquirrel-size_restricted.gif" media="(min-width: 50px)"/>
                    <img src={item.avatar_url} alt="" style={{opacity:0}} onLoad={this.imageLoadHandler}/>
                  </picture>
                    </div>
                    <div className="followerLogin">
                        {item.login}
                    </div>
                </div>
            )
        });

        return(
            <div>
                {isFetching||isFetchingFollowers? <Preloader/>:'' }
                <div className="singleUserWrapper">
                    <div className="singleUser">
                        <div className="userAvatar">
                            <img src={avatar_url} alt=""/>
                        </div>
                        <div className="userInfo">
                            <div className="username row">
                                <b>Name:</b>
                                <span className="blueText">{name?name:'N/A'}</span>
                            </div>
                            <div className="company row">
                                <b>Company:</b>
                                <span className="blueText">{company?<a href={company}>{company}</a>:'N/A'}</span>
                            </div>
                            <div className="created row">
                                <b>Created at:</b>
                                <span className="blueText">{date}</span>
                            </div>
                            <div className="email row">
                                <b>Email:</b>
                                <span className="blueText">{email?email:'N/A'}</span>
                            </div>
                            <div className="location row">
                                <b>Location:</b>
                                <span className="blueText">{location?location:'N/A'}</span>
                            </div>
                            <div className="followers row">
                                <b>Followers:</b>
                                <span className="blueText">{followers?followers:'N/A'}</span>
                            </div>
                            <div className="folloing row">
                                <b>Following:</b>
                                <span className="blueText">{following?following:'N/A'}</span>
                            </div>
                            <div className="blog row">
                                <b>Blog:</b>
                                <span className="blueText">{blog?<a href={blog}>{blog}</a>:'N/A'}</span>
                            </div>
                            <div className="bio row">
                                <b>Bio:</b>
                                <span className="blueText">{bio?bio:'N/A'}</span>
                            </div>
                        </div>
                    </div>
                    <div className="followersWrapper">
                        <div className="caption">
                            Followers
                        </div>
                        <div className="followersBlock">
                            {follower}
                        </div>
                    </div>
                    <Link to="/">
                        <div className="toMain">Main Page</div>
                    </Link>
                </div>
                </div>
        )
    }
}

const mapStateToProps = (state)=>({
    userState: {...state.getSingleUserReducer},
    followersState: {...state.getFollowersReducer}
});

const mapDispatchToProps = (dispatch) => ({
    getUser: (username) => dispatch(getSingleUserQuery(username)),
    clearSingleUser:() => dispatch(clearUser()),
    clearFollowers:() => dispatch(clearFollowers())
});


export default connect(mapStateToProps, mapDispatchToProps)(SingleUser);