import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Pricing from "./pages/Pricing";
import Task1 from "./pages/task1";
import Topic1 from "./pages/task1/topic1";
import Topic2 from "./pages/task1/topic2";
import Subtopic from "./pages/task1/subtopic";

import Team from "./pages/About/Team";
import Careers from "./pages/About/Careers";

import Basic from "./pages/Pricing/Basic";
import Corporate from "./pages/Pricing/Corporate";


export const routes = [
  {
    path: "/",
    label: "Home",
    component: Home,
    routes: [
      {
        path: "/about",
        label: "About",
        component: About,
        routes: [
          {
            path: "/our-team",
            label: "Our Team",
            component: Team
          },
          {
            path: "/careers",
            label: "Careers",
            component: Careers
          }
        ]
      },
      {
        path: "/users",
        label: "Users",
        component: Users
      },
      {
        path: "/pricing",
        label: "Pricing",
        component: Pricing,
        routes: [
          {
            path: "/basic",
            label: "Basic",
            component: Basic
          },
          {
            path: "/corporate",
            label: "Corporate",
            component: Corporate
          }
        ]
      },
      {
        path: "/task1",
        label: "Task1",
        component: Task1,
        routes: [
          {
            path: "/topic1",
            label: "Topic1",
            className: "drawer-menu-item",
            component: Topic1,
            routes: [
              {
                path: "/subtopic",
                label: "Subtopic",
                component: Subtopic
              },
              {
                path: "/subtopic2",
                label: "Subtopic2",
                component: Topic2
              }
            ]
          },
          {
            path: "/topic2",
            label: "Topic2",
            component: Topic2
          }
        ]
      }
    ]
  }
];
