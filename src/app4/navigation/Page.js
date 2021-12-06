import React, {Children} from "react";
import NestedMenu from "./NestedMenu";
import Breadcrumbs from "./Breadcrumbs";

function Page(props){
 const PageBody = props.route.component;

 const Footer = Children.map(props.children, child => (
   <div>{child}</div>
 ));

  return (
    <>
      <NestedMenu route={props.route}>

      </NestedMenu>

      {props.route.parent && (<Breadcrumbs route={props.route}> </Breadcrumbs>)}

      <PageBody route={props.route} page={'Page'}>

      </PageBody>

    </>
  );
};

export default Page;
