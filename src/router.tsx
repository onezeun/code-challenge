import { createBrowserRouter } from 'react-router-dom';
import Root from 'Root';
import Home from 'pages/Home';
import About from 'pages/About';
import Author from 'pages/Author';
import NotFound from 'pages/NotFound';
import Book from 'pages/Book';
import Chapters from 'pages/Chapters';
import Character from 'pages/Character';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      {
        path: '/author/:name',
        element: <Author />,
        children: [
          {
            path: ':book',
            element: <Book />,
            children: [
              { path: 'chapters', element: <Chapters /> },
              { path: 'characters', element: <Character /> }
            ]
          }
        ]
      }
    ],
    errorElement: <NotFound />
  }
]);

export default router;
