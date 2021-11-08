import React, {useState, createContext} from 'react';

export const TaskComponentsContext = createContext();

export default function TaskComponentsProvider(props) {
    const [routes, setComponent] = useState([
        {
            path: "/",
            exact: true,
            sidebar: () => <div>home!</div>,
            main: () => <h2>Home</h2>
          },
          {
            path: "/bubblegum",
            sidebar: () => <div>bubblegum!</div>,
            main: () => <h2>Bubblegum</h2>
          },
          {
            path: "/shoelaces",
            sidebar: () => <div>shoelaces!</div>,
            main: () => <h2>Shoelaces</h2>
          }
    ]);
   return(
    <TaskComponentsContext.Provider value={[routes]}>
        {props.children}
    </TaskComponentsContext.Provider>
   );
}

