import React, { useEffect } from "react";
import NestedMenu from "../navigation/NestedMenu";

function Home(props) {
  const route = props.route;
  useEffect(() => {

  }, []);

  return (
    <div>
      <h1>Home</h1>
      {/* {console.log('Home:', route)} */}
      <NestedMenu route={props.route}>

      </NestedMenu>
      <img src="https://via.placeholder.com/640x480?text=Home" alt="Home" />
      <h1>Home</h1>
    </div>
  );
}

export default Home;
