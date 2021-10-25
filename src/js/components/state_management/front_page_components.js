import React, {useState, createContext}from 'react';

export const FrontPageComponentsContext = createContext();



export default function FrontPageComponents(props) {
    const [component, setComponent] = useState([
        {
            Path: '/',
            Component: Home,
            Title: 'Home page',
            AuthRequired: true
        },{
          Path: '/contact-us',
          Component: ContactUs,
          Title: 'Contact us page',
          AuthRequired: true
        },{
            Path: '/task-1',
            Component: MainTask1,
            Title: 'Task 1 page',
            AuthRequired: true
        },{
            Path: '/task-2',
            Component: MainTask2,
            Title: 'Task 2 page',
            AuthRequired: true
        },{
            Path: '/task-3',
            Component: MainTask3,
            Title: 'Task 3 page',
            AuthRequired: true
        },{
            Path: '/task-4',
            Component: MainTask4,
            Title: 'Task 4 page',
            AuthRequired: true
        },{
          Path: '/task-5',
          Component: MainTask5,
          Title: 'Task 5 page',
          AuthRequired: true
        }
    ]);
    return(
        <FrontPageComponentsContext.Provider>
            {props.children}
        </FrontPageComponentsContext.Provider>
    );
    
};

