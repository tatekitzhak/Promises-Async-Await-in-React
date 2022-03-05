import React from 'react';
import { connect } from 'react-redux';

function UserContainer(props) {

    return (
        <>
            <div>
                <h2>Hello User{console.log('UserContainer:', props)}</h2>
            </div>
        </>
    )
}

function mapStateToProps(state, ownProps) {
    const userState = ownProps.user
        ? state
        : state

        return {
            user: userState
        }
}
export default connect(mapStateToProps)(UserContainer); 
/* export default UserContainer;
 */
