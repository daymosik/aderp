import reactLogo from './assets/images/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './modules/sidebar/sidebar'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { NavigationPath } from './models/routes'

function Home() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  )
}

const router = createHashRouter([
  {
    path: NavigationPath.Home,
    element: <Home />,
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
])

function App() {
  return (
    <div className="d-flex h-100">
      <Sidebar />

      <div id="wrapper-inside">
        {/*<navbar-topbar></navbar-topbar>*/}
        <div className="main-container">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  )
}

export default App
