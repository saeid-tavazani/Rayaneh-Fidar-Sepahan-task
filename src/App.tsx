import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import Home from './page/Home';
import ProductDetails from './page/ProductDetails';
import Products from './page/Products';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:id', element: <ProductDetails /> },
    ],
  },
]);
