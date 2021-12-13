import React from "react";

function Topics(props) {
  return (
    <>
      <div>{console.log('Topics:', props.route)}
        <h1>{props.route.label}:</h1>
        <ul className="navbar-nav ml-auto">
          <li><a className="undefined" href="/about">{props.route.routes[0].label}</a></li>
          <li><a className="undefined" href="/users">Topic 2</a></li>
          <li><a className="undefined" href="/pricing">Topic 3</a></li>
          <li><a className="undefined " href="/topics">Topic 4</a></li>
        </ul>
        <p>
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
          </p>

      </div>
    </>
  );
}

export default Topics;
