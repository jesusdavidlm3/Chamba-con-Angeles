import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppContextProvider from "./context/AppContextProvider"
import "./style.scss"
import Root from './pages/Root'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Login from './pages/Login'

  const router = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [{
      path: "/login",
      element: <Login />
    },{
      path: "home",
      element: <Home />
    }]
  }])

createRoot(document.getElementById('root')!).render(
    <AppContextProvider>
      <RouterProvider router={router}/>
    </AppContextProvider>
)
