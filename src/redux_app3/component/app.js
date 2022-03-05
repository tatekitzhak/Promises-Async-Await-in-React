import React from 'react';
import { connect } from 'react-redux';


function App(props) {

  return(
    <>
      <div>  
          <h2>Hello redux {console.log('App:', props)}</h2>
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
export default connect(mapStateToProps)(App); 


