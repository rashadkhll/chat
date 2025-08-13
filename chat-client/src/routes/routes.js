import Layout from "../layout/Layout";
import Contacts from "../pages/contacts/Contacts";
import Conversations from "../pages/conversations/Conversations";
import Dashboard from "../pages/dashboard/Dashboard";
import Groups from "../pages/groups/Groups";
import HelpCenter from "../pages/help/HelpCenter";
import Inbox from "../pages/inbox/Inbox";
import Profile from "../pages/profile/Profile";
import Reports from "../pages/reports/Reports";
import Settings from "../pages/settings/Settings";

const routes = [
  {
    path: "/client",
    element: <Layout />,
    children: [
      { index: true, element: <Conversations /> },
      { path: "settings", element: <Settings /> },
      { path: "inbox", element: <Inbox /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "conversations", element: <Conversations /> },
      { path: "contacts", element: <Contacts /> },
      { path: "groups", element: <Groups /> },
      { path: "help-center", element: <HelpCenter /> },
      { path: "reports", element: <Reports /> },
      { path: "profile", element: <Profile /> },
    ],
  },
];

export default routes;
