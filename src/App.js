import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import LoginForm from "./component/pages/Login";
import Sidebar from "./component/Sidebar";
import Transactions from "./component/Transactions";
import Schedules from "./component/Schedules";
import Users from "./component/Users";
import Settings from "./component/Settings";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: "/transactions",
    element: (
      <Layout>
        <Transactions />
      </Layout>
    ),
  },
  {
    path: "/schedules",
    element: (
      <Layout>
        <Schedules />
      </Layout>
    ),
  },
  {
    path: "/Users",
    element: (
      <Layout>
        <Users />
      </Layout>
    ),
  },
  {
    path: "/settings",
    element: (
      <Layout>
        <Settings />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
