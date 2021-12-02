import React from "react";
import NestedMenu from "./NestedMenu";
import Breadcrumbs from "./Breadcrumbs";

const Page = ({ route }) => {
  const PageBody = route.component;
  const Footer = route
  return (
    <>
      <NestedMenu route={route}>

      </NestedMenu>

      {route.parent && (<Breadcrumbs route={route}> </Breadcrumbs>)}
      {console.log('Page:',route)}

      <PageBody route={route} page={'Page'}>

      </PageBody>
      <h1>Footer</h1>
    </>
  );
};

export default Page;
