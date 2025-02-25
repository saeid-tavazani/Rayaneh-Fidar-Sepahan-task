import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import Home from './page/Home';
import ProductDetails from './page/productDetails';
import Products from './page/products';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <ProductDetails /> },
      { path: 'blog', element: <Home /> },
      { path: 'faq', element: <Home /> },
      { path: 'contact-us', element: <Home /> },
    ],
  },
]);
