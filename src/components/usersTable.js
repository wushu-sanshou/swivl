import React, { Component } from 'react';
import UserComponent from './userComponent';
import { connect } from 'react-redux';
import { getAllUsersQuery } from '../actions/actions';
import Preloader from './preloader';

class UsersTable extends Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount() {
        this.props.getAllUsers();
    }


    render() {
        const {users,isFetching} = this.props.usersState;
        const user = users.map((singleUser, index) => {
            return (
                <UserComponent userInfo={{...singleUser}} index={index+1} key={singleUser.id} />
            )
        });

        return(
            <div>
                {isFetching?<Preloader/>:''}
                <div className="userTable">
                  {user}
                </div>
            </div>
        );
      }

}

const mapStateToProps = (state)=>({
   usersState: {...state.getAllUsersReducer}
});

const mapDispatchToProps = (dispatch) => ({
    getAllUsers: (page,since) => dispatch(getAllUsersQuery(page,since))
});

export default connect(mapStateToProps,mapDispatchToProps)(UsersTable);
