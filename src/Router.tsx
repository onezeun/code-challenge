import { createBrowserRouter } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import App from 'App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: '/character/:characterId', element: <Detail /> }
    ],
    errorElement: <NotFound />
  }
]);

export default router;
