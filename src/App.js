import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Quotes from './components/Quote';
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'quotes/:quoteId',
        element: <Quotes />,
      },
      {
        path: 'calculator/',
        element: <Calculator />,
      },
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
