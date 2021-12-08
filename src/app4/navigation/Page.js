import React, { Children, useRef } from "react";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import NestedMenu from "./NestedMenu";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "../pages/footer";

function Page(props) {
  const useRouteMatc = useRouteMatch();
  const page = useRef();
  const PageBody = props.route.component;

  /* const Footer = Children.map(props.children, child => (
    <div>{child}</div>
  )); */

  return (
    <>
      <div >
        <NestedMenu route={props.route} pid={'pageId'}>

        </NestedMenu>

        {props.route.parent && (<Breadcrumbs route={props.route}> </Breadcrumbs>)}
        <div className="pageBody">
          <PageBody route={props.route} page={'Page'}>

          </PageBody>
        </div>

        <Footer route={props.route}>
          <h1>Footer</h1>
        </Footer>
      </div>
    </>
  );
};

export default Page;
