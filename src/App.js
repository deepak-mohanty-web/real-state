
import Home from './pages/HomePage/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListPage from './pages/ListPage/ListPage'
import Layout from './pages/LayOut/Layout'
import Singlepage from './pages/SinglePage/Singlepage'
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",

      element: <Layout />,
      children: [
        {
          path: "/",
          element: (<Home />)
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <Singlepage />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
