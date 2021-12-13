import React, { useEffect } from "react";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import NestedMenu from "../navigation/NestedMenu";
import Breadcrumbs from "../navigation/Breadcrumbs";

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
      <div>{props.route && (<Breadcrumbs route={props.route}> </Breadcrumbs>)} {`${useLocatio.pathname}`}</div>

      <NestedMenu route={props.route} pid={'homeId'}>
        
      </NestedMenu>

      <NestedMenu route={props.route} pid={'topicsId'}>

      </NestedMenu>
      
      <img src={`https://via.placeholder.com/640x480?text=Home-${useLocatio.pathname}`} alt="Home" />
    </div>
  );
}

export default Home;
