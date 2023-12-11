import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/* import App from './app/App'; */
import Index from '../pages/Index';
import SignIn from '../pages/SignIn';
import User from '../pages/User';

// Creating a browser router with defined routes and associated components
const router = createBrowserRouter([
	{
		path: '/',
		element: <Index />,
	},
  {
		path: '/login',
		element: <SignIn />,
	},
  {
		path: '/profil',
		element: <User />,
	},
])

export default function App() {
  return <RouterProvider router={router} />
}

