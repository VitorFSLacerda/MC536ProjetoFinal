import { createBrowserRouter, RouteObject } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Details from './pages/Details';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SubmitProject from './pages/SubmitProject';
import SubmitUpdate from './pages/SubmitUpdate';

const ROUTES: RouteObject[] = [
  {
    path: '/',
    Component: LandingPage,
  },
  {
    path: '/home',
    Component: Home,
  },
  {
    path: '/details/:id',
    Component: Details,
  },
  {
    path: '/sign-in',
    Component: SignIn,
  },
  {
    path: '/sign-up',
    Component: SignUp,
  },
  {
    path: '/submit-project',
    Component: SubmitProject,
  },
  {
    path: '/submit-update',
    Component: SubmitUpdate,
  },
];

export const router = createBrowserRouter(ROUTES);
