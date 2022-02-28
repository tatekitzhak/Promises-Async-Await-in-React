import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UserList extends Component {

    createListItems(){
        return this.props.users.map(function(user){
            return(
                <li key={user.id}>
                    {`Full name: ${user.name}. Email: ${user.email}`}
                </li>
            )
        });
    }

    render() {
        return (
            <>
                <ul>
                    {this.createListItems()}
                </ul>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserList);