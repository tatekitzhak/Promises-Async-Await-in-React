import React, {useState, createContext}from 'react';

export const HeaderNavigationMenuContext = createContext();

export default function HeaderNavigationMenuProvider(props){
    const [menu, setMenu] = useState([
        {
            path: '/',
            title: 'Home',
        }, {
            path: '/contact-us',
            title: 'Contact',
        }, {
            path: '/task-1',
            title: 'task 1',
        }, {
            path: '/task-2',
            title: 'task 2',
        },
        {
            path: '/task-3',
            title: 'task 3',
        },
        {
            path: '/task-4',
            title: 'task 4',
        },
        {
            path: '/task-5',
            title: 'task 5',
        },
        {
            path: '/task-6',
            title: 'task 6',
        }
    ]);
    return(
        <HeaderNavigationMenuContext.Provider value={[menu]}>
            {props.children}
        </HeaderNavigationMenuContext.Provider>
    );
};

