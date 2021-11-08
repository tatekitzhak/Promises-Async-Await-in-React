import React, {useState, createContext} from 'react';

export const TaskComponentsContext = createContext();

export default function TaskComponentsProvider(props) {
    const [routes, setComponent] = useState([
        {
            path: "/",
            exact: true,
            component: () => <h2>Home</h2>
          },
          {
            path: '/about',
            component: () => <h2>About</h2>
          },
          {
            path: '/users',
            component: () => <h2>Users</h2>
          },
          {
            path: '/login',
            component: () => <h2>Login</h2>
          }
    ]);
   return(
    <TaskComponentsContext.Provider value={[routes]}>
        {props.children}
    </TaskComponentsContext.Provider>
   );
}

