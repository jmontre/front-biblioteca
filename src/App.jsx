import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home/index.jsx";
import { CategoryPage } from "./pages/Category/index.jsx";
import { ProductPage } from "./pages/Product/index.jsx";
import { LoginPage } from "./pages/Login/index.jsx";
import { RootPage } from "./pages/Root/index.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/category", element: <CategoryPage /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
