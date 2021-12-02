import React from "react";
import NestedMenu from "./NestedMenu";
import Breadcrumbs from "./Breadcrumbs";

const Page = (props) => {
 const PageBody = props.route.component;
 const Footer = props.children;
  return (
    <>
      <NestedMenu route={props.route}>

      </NestedMenu>

      {props.route.parent && (<Breadcrumbs route={props.route}> </Breadcrumbs>)}
      {console.log('Page:',props)}

      <PageBody route={props.route} page={'Page'}>

      </PageBody>

      {/* Footer */}
      {props.children}
    </>
  );
};

export default Page;
