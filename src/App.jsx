import { createBrowserRouter, RouterProvider } from "react-router-dom";

//  Components
import Layout from "./Hoc/Layout/Layout";

import { Home, Services, About, Portfolio, Contact, NoMatch } from "./Routes";

// Styles
import styles from "./styles/App/App.module.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
]);

const App = () => {
  return (
    <div className={styles.Container}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
