import { createBrowserRouter } from 'react-router-dom';
import { CreateConfig } from './creator/pages/CreateConfig';
import { CreatePreview } from './creator/pages/CreatePreview';
import { Home } from './pages/Home';

export const router = createBrowserRouter([
  // CREATOR FLOW
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/create',
    element: <CreateConfig onNext={(data) => console.log(data)} />,
  },
  {
    path: '/create/preview',
    element: <CreatePreview />,
  },

  // RECIPIENT FLOW
  //   {
  //     path: '/card/:id',
  //     element: <CardPage />,
  //   },
]);
