import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/* import App from './app/App'; */
import Index from './pages/Index';
import SignIn from './pages/SignIn';
import User from './pages/User';

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

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
