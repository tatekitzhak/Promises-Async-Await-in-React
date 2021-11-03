import React, {useContext, useState} from 'react';


export const SidebarNavigationMenuContext = React.createContext({});

export function SidebarNavigationMenuProvider(props){
    const [topics, topicsSet] = useState([
        {categorie:"Item-1"},
        {categorie:"Item-2"},
        {categorie:"Item-3"},
        {categorie:"Item-4"},
        {categorie:"Item-5"},
        {categorie:"Item-6"},
        {categorie:"Item-7"}
    ]);
    return(
        <>
            <SidebarNavigationMenuContext.Provider value={[topics]}>
                {props.children}
            </SidebarNavigationMenuContext.Provider>
        </>
    );
};