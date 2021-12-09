import React from "react";

function Topics(props) {
    return(
        <>
        <div>
          <h1>Topics</h1>
          <h1>
          Example06: Subscription
Context is the preferred way to share state among components, but what if we already have a shared state outside of React components. We can technically subscribe to such a shared state and update components when the shared state is updated. This pattern has limitations and React team provides a utility package: create-subscription.

Unfortunately, the utility package is not yet for React Hooks as of writing, so we do our best with hooks for now. Let’s try to reproduce the same functionality of Example05 without Context.

First, here’s a tiny custom hook to be used.
Example06: Subscription
Context is the preferred way to share state among components, but what if we already have a shared state outside of React components. We can technically subscribe to such a shared state and update components when the shared state is updated. This pattern has limitations and React team provides a utility package: create-subscription.

Unfortunately, the utility package is not yet for React Hooks as of writing, so we do our best with hooks for now. Let’s try to reproduce the same functionality of Example05 without Context.

First, here’s a tiny custom hook to be used.
Example06: Subscription
Context is the preferred way to share state among components, but what if we already have a shared state outside of React components. We can technically subscribe to such a shared state and update components when the shared state is updated. This pattern has limitations and React team provides a utility package: create-subscription.

Unfortunately, the utility package is not yet for React Hooks as of writing, so we do our best with hooks for now. Let’s try to reproduce the same functionality of Example05 without Context.

First, here’s a tiny custom hook to be used.
Example06: Subscription
Context is the preferred way to share state among components, but what if we already have a shared state outside of React components. We can technically subscribe to such a shared state and update components when the shared state is updated. This pattern has limitations and React team provides a utility package: create-subscription.

Unfortunately, the utility package is not yet for React Hooks as of writing, so we do our best with hooks for now. Let’s try to reproduce the same functionality of Example05 without Context.

First, here’s a tiny custom hook to be used.
          </h1>
          {console.log('Topics:', props)}

        </div>
        </>
      );  
} 

export default Topics;
