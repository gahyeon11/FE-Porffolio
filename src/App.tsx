import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from "./styles/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  const routerList = [
    {
      path: "/home",
      element: <Home />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ];

  const router = createBrowserRouter(
    routerList.map((item) => {
      return {
        ...item,
        element: (
          <Layout>
            {item.element}
          </Layout>
        ),
      };
    })
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
