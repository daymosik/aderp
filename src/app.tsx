import Sidebar from './modules/sidebar/sidebar'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { NavigationPath } from './models/routes'
import Navbar from './modules/navbar/navbar'
import LoginView from './modules/login/login'

const router = createHashRouter([
  {
    path: NavigationPath.Home,
    element: <div>Home</div>,
  },
  {
    path: NavigationPath.Products,
    element: <div>Products</div>,
  },
  {
    path: NavigationPath.Orders,
    element: <div>Orders</div>,
  },
  {
    path: NavigationPath.Invoices,
    element: <div>Invoices</div>,
  },
  {
    path: NavigationPath.Results,
    element: <div>Results</div>,
  },
  {
    path: NavigationPath.Customers,
    element: <div>Customers</div>,
  },
  {
    path: NavigationPath.Login,
    element: <LoginView />,
  },
])

function App() {
  return (
    <div className="d-flex h-100">
      <Sidebar />

      <div id="wrapper-inside">
        <Navbar />
        <div className="main-container">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  )
}

export default App
