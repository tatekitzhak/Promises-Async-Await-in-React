import React, {Children} from "react";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import NestedMenu from "./NestedMenu";
import Breadcrumbs from "./Breadcrumbs";

function Page(props){
  const useRouteMatc = useRouteMatch();
 const PageBody = props.route.component;

 const Footer = Children.map(props.children, child => (
   <div>{child}</div>
 ));

  return (
    <>
    {/* {console.log('Page:', useRouteMatc)} */}
      <NestedMenu route={props.route} id={'pageId'}>

      </NestedMenu>

      {props.route.parent && (<Breadcrumbs route={props.route}> </Breadcrumbs>)}

      <PageBody route={props.route} page={'Page'}>

      </PageBody>

    </>
  );
};

export default Page;
