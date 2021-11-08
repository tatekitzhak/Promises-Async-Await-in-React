import React, {useState, createContext}from 'react';

import Home from "../js/components/home" ;
import ContactUs from '../js/components/contact';
import MainTask1 from '../js/components/task_1/mainTask1';
import MainTask2 from '../js/components/task_2/mainTask2';
import MainTask3 from '../js/components/task_3/mainTask3';
import MainTask4 from '../js/components/task_4/mainTask4';
import MainTask5 from '../js/components/task_5/mainTask5';
import MainTask6 from '../js/components/task_6/mainTask6';
import PageNotFound from '../js/components/pages/pageNotFound';

export const FrontPagesComponentsContext = createContext();

export default function FrontPagesComponentsProvider(props) {
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
        },{
            Path: '/task-6',
            Component: MainTask6,
            Title: 'Task 6 page',
            AuthRequired: true
          },{
            Path: '*',
            Component: PageNotFound,
            Title: 'Task 6 page',
            AuthRequired: true
          }
    ]);
    return(
        <FrontPagesComponentsContext.Provider value={[component]}>
            {props.children}
        </FrontPagesComponentsContext.Provider>
    ); 
};

