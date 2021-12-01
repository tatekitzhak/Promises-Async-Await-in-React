import React from "react";
import NestedMenu from "./NestedMenu";
import Breadcrumbs from "./Breadcrumbs";

const Page = ({ route }) => {
  const PageBody = route.component;
  return (
    <>
      <NestedMenu route={route}>

      </NestedMenu>

      {route.parent && (<Breadcrumbs route={route}> </Breadcrumbs>)}
      {console.log('Page:',route)}
      
      <PageBody>

      </PageBody>
    </>
  );
};

export default Page;
