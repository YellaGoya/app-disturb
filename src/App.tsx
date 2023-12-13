import { BrowserRouter, useRoutes } from 'react-router-dom';

import { Global } from '@/Global.ts';

import ViewGroup from '@/layouts/ViewGroup.tsx';
import Home from '@/components/Home.tsx';

const Routing = () => {
  const routes = useRoutes([
    {
      path: '/app-disturb',
      element: <Home />,
    },
  ]);

  return routes;
};

const App = () => {
  return (
    <>
      <Global />
      <BrowserRouter>
        <ViewGroup>
          <Routing />
        </ViewGroup>
      </BrowserRouter>
    </>
  );
};

export default App;
