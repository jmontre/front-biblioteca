import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import './App.css'

const routes = createBrowserRouter([

  { path: '/', element: <HomePage /> },

])

function App() {
  return <RouterProvider router={routes} />
}

export default App
