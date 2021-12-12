import React from "react";

function Users (props){
  const param = props.route.path;
  console.log('Users:',props.route.path)
  return (
    <div>
      <img src={`https://via.placeholder.com/640x480?text=${param}`} alt="Users" />
      {console.log('Users:', props)}
    </div>
  );
}

export default Users;
