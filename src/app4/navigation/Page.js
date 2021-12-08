import React, {Children} from "react";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import NestedMenu from "./NestedMenu";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "../pages/footer";

function Page(props){
  const useRouteMatc = useRouteMatch();
 const PageBody = props.route.component;

 /* const Footer = Children.map(props.children, child => (
   <div>{child}</div>
 )); */

  return (
    <>
      <NestedMenu route={props.route} id={'pageId'}>

      </NestedMenu>

      {props.route.parent && (<Breadcrumbs route={props.route}> </Breadcrumbs>)}

      <PageBody route={props.route} page={'Page'}>

      </PageBody>

      <Footer route={props.route}>
        <h1>Footer</h1>
      </Footer>

    </>
  );
};

export default Page;
