import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Importing custom page components
import Index from '../pages/Index'
import SignIn from '../pages/SignIn'
import User from '../pages/User'
import Error from '../pages/Error'

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
		path: '/profile',
		element: <User />,
	},
	{
		path: '*',
		element: <Error />,
	},
])

export default function App() {
	return <RouterProvider router={router} />
}
