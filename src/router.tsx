import { createBrowserRouter } from 'react-router-dom';
import { CreateConfig } from './creator/pages/CreateConfig';
import { CreatePreview } from './creator/pages/CreatePreview';
import { Home } from './pages/Home';
import { CardPage } from './recipient/pages/CardPage';

export const router = createBrowserRouter([
  // CREATOR FLOW
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/create',
    element: <CreateConfig />,
  },
  {
    path: '/create/preview',
    element: <CreatePreview />,
  },

  //RECIPIENT FLOW
  {
    path: '/card/:id',
    element: <CardPage />,
  },
]);
