import Layout from "../layout/Layout";
import Conversations from "../pages/conversations/Conversations";
import Dashboard from "../pages/dashboard/Dashboard";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Conversations /> }],
  },
];

export default routes;
