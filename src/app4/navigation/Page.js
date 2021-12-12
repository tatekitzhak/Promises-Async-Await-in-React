import React, { Children, useRef } from "react";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import NestedMenu from "./NestedMenu";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "../pages/footer";

function Page(props) {
  const PageBody = props.route.component;

  return (
    <>
      <div >
        <NestedMenu route={props.route} pid={'pageId'} nestedMenu={'NestedMenu'}>

        </NestedMenu>

        {props.route.parent && (<Breadcrumbs route={props.route} breadcrumbs={'Breadcrumbs'}> </Breadcrumbs>)}
        
        <div className="pageBody">
          <PageBody route={props.route} page={'PageBody'}>

          </PageBody>
        </div>

        <Footer route={props.route} footer={'Footer'}>
          <h1>Footer</h1>
        </Footer>
      </div>
    </>
  );
};

export default Page;
