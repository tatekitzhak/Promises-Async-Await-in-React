import React, { useEffect } from "react";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import NestedMenu from "../navigation/NestedMenu";

function Home(props) {
  const route = props.route;
  const useHistor = useHistory();
  const useParam = useParams();
  const useLocatio = useLocation();
  const useRouteMatc = useRouteMatch();
  useEffect(() => {

  }, []);

  return (
    <div>
      <h1>Home</h1>
      {
        // console.log('Home:', useRouteMatc )
    }

      <NestedMenu route={props.route} id={'homeId'}>

      </NestedMenu>
      
      <img src="https://via.placeholder.com/640x480?text=Home" alt="Home" />
      <h1>Home</h1>
    </div>
  );
}

export default Home;
