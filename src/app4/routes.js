import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Pricing from "./pages/Pricing";
import Topics from "./pages/topics";
import Topic1 from "./pages/topics/topic1";
import Topic2 from "./pages/topics/topic2";
import Subtopic from "./pages/topics/subtopic";

import Team from "./pages/About/Team";
import Careers from "./pages/About/Careers";

import Basic from "./pages/Pricing/Basic";
import Corporate from "./pages/Pricing/Corporate";
import Policy from "./pages/policy";


export const routes = [
  {
    path: "/",
    label: "Home",
    component: Home,
    homePage: [
      {
        path: "/convert-audio",
        label: "Audio File",
        component: Team
      },
      {
        path: "/convert-image",
        label: "Image File",
        component: Careers
      }
    ],
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
        component: Users,
        routes:[
          {
            path: "/user1",
            label: "User1",
            component: Users
          }
        ]
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
        path: "/topics",
        label: "Topics",
        id: "topics",
        component: Topics,
        routes: [
          {
            path: "/topic1",
            label: "Topic1",
            component: Topic1,
            routes: [
              {
                path: "/subtopic1",
                label: "Subtopic1",
                component: Subtopic
              }
            ]
          },
          {
            path: "/topic2",
            label: "Topic2",
            component: Topic2,
            routes: [
              {
                path: "/subtopic2",
                label: "Subtopic2",
                component: Topic2
              }
            ]
          }
        ]
      }
    ],
    topics: [
      {
        path: "/topic1",
        label: "Topic1",
        component: Topic1,
        routes: [
          {
            path: "/subtopic1",
            label: "Subtopic1",
            component: Subtopic
          }
        ]
      },
      {
        path: "/topic2",
        label: "Topic2",
        component: Topic2,
        routes: [
          {
            path: "/subtopic2",
            label: "Subtopic2",
            component: Topic2
          }
        ]
      }
    ],
    footer:[
      {
        path: "/terms",
        label: "Terms",
        component: Policy
      },
      {
        path: "/privacy",
        label: "Privacy",
        component: Policy
      }
    ]
  }
];

export const routes_topics = [
  {
    path: "/foo",
    label: "foo",
    component: Topics,
    routes: [
      {
        path: "/topic1",
        label: "Topic1",
        component: Topics,
        routes: [
          {
            path: "/subtopic1",
            label: "Subtopic1",
            component: Subtopic
          }
        ]
      },
      {
        path: "/topic2",
        label: "Topic2",
        component: Topics,
        routes: [
          {
            path: "/subtopic2",
            label: "Subtopic2",
            component: Subtopic
          }
        ]
      },
      {
        path: "/topic3",
        label: "Topic3",
        component: Topics,
        routes: [
          {
              path: "/subtopic3",
              label: "Subtopic3",
              component: Subtopic
          }
        ]
      }
    ]
  }
];

