import React, {Children} from "react";
import NestedMenu from "./NestedMenu";
import Breadcrumbs from "./Breadcrumbs";

const Page = (props) => {
 const PageBody = props.route.component;

 const Footer = Children.map(props.children, child => (
   <div>{child}</div>
 ));

  return (
    <>
      <NestedMenu route={props.route}>

      </NestedMenu>

      {props.route.parent && (<Breadcrumbs route={props.route}> </Breadcrumbs>)}
      {console.log('Page:',props.children.props.route.parent.routes)}

      <PageBody route={props.route} page={'Page'}>

      </PageBody>

      {/* Footer */}
      <h1>Footer children count: {Children.count(props.children)}</h1>
      {Footer}
    </>
  );
};

export default Page;
