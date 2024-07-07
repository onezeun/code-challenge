import { createBrowserRouter } from 'react-router-dom';
import Layout from 'components/Layout';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import Detail from 'pages/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: '/character/:characterId', element: <Detail /> }
    ],
    errorElement: <NotFound />
  }
]);

export default router;
