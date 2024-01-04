import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

// Import the Redux store created in './app/store'
import store from './app/store'

// Import the main App component
import App from './app/App'

// Import the default styles for the application
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* Use the Provider component to provide the Redux store to the entire application */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
