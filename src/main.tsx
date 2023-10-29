import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/AppPages/App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/Layout.tsx'
import LoginNext from './pages/Login/LoginPage.tsx'

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
	  },
	  {
		path: "/login",
		element: <LoginNext/>,	
	  },
	  {
		path: "/register",
        element: <h1>Register</h1>
	  }
	]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
	<RouterProvider router={router} />
  </React.StrictMode>,
)
