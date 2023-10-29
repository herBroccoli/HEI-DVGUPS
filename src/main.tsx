import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/AppPages/App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/Layout.tsx'

const router = createBrowserRouter([
  {
	path: '/',
	element: <Layout />,
	children: [
	  {
		path: '/',
		element: <App />
	  },
	  {
		path: '/about',
		element: <h1>About</h1>
	  }
	]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
	<RouterProvider router={router} />
  </React.StrictMode>,
)
