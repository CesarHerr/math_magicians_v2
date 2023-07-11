import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Quotes from './components/Quote';
import Root from './routes/root';
import ErrorPage from './routes/error-page';

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
