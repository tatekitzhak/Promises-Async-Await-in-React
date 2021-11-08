import React, {useState, createContext} from 'react';
import DemoPage from '../js/components/pages/demo';

export const TaskComponentsContext = createContext();

export default function TaskComponentsProvider(props) {
    const [routes, setComponent] = useState([
        {
            path: "/",
            exact: true,
            component: <DemoPage data={'Home'}/>         
        },
        {
            path: '/about',
            component: <DemoPage data={'about'}/>
        },
        {
            path: '/users',
            component: <DemoPage data={'users'}/>
        },
        {
            path: '/login',
            component: <DemoPage data={'login'}/>
        }
    ]);
   return(
    <TaskComponentsContext.Provider value={[routes]}>
        {props.children}
    </TaskComponentsContext.Provider>
   );
}

