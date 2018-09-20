import React, { Component } from 'react';
import UserComponent from './userComponent';
import { connect } from 'react-redux';
import { getAllUsersQuery } from '../actions/actions';

class UsersTable extends Component {
    constructor(props){
        super(props);
        this.state ={
            maxCount:100,
            per_page:100
            
        }
        this.pageHandler = this.pageHandler.bind(this);
    }
    componentDidMount() {
        const {per_page} = this.state;
        this.props.getAllUsers(per_page,0);
    }

    pageHandler(e) {
        const {per_page} = this.state;
        const page = parseInt(e.target.getAttribute('data-index'));
        const since = page*per_page;
    }

    render() {

        const {usersState} = this.props;
        const user = usersState.map((singleUser, index) => {
            return (
                <UserComponent userInfo={{...singleUser}} index={index+1} key={singleUser.id} />
            )
        });

        return(
            <div className="userTable">
              {user}
            </div>
        );
      }

}

const mapStateToProps = (state)=>({
   usersState: [...state.getAllUsersReducer]
});

const mapDispatchToProps = (dispatch) => ({
    getAllUsers: (page,since) => dispatch(getAllUsersQuery(page,since))
});

export default connect(mapStateToProps,mapDispatchToProps)(UsersTable);
