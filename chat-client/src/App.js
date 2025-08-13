import routes from "./routes/routes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
