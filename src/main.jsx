import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Allesplace from './components/Allesplace';
import Screen1 from './components/Screen1';
import './index.css'; // Import Tailwind CSS


const router = createBrowserRouter([
  {
    path: '/',
    element: <Screen1 />,
  },
  {
    path: '/layout/*',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'place/1',
        element: <Allesplace />,
      },
    ],
  },
]);


// const router = createBrowserRouter([
//   {
//     path: '/root',
//     element: <div>Root</div>, // Root component or any other component
//     children: [
//       {
//         path: '/explore',
//         element: <Screen1 />,
//       },
//       {
//         path: '/layout',
//         element: <Layout />,
//         children: [
//           {
//             path: '/Home',
//             element: <Home />,
//           },
//           {
//             path: '/place/1',
//             element: <Allesplace />,
//           },
//         ],
//       },
//     ],
//   },
// ]);


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Screen1 />,
//     children: [
//       {
//         path: '/Home',
//         element: <Home />,
//       },
      
//       {
//         path: '/place/1',
//         element: <Allesplace />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
