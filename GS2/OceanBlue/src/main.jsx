import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Contato from './routes/Contato.jsx'
import Error from './routes/Error.jsx';
import Projeto from './routes/Projeto.jsx';
import Apresentacao from './routes/Apresentacao.jsx';
import Login from './routes/Login.jsx';
import ListaSensor from './routes/ListaSensor.jsx';

const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error />,

    children: [
      {path: '/', element: <Projeto />},
      {path: '/Apresentacao', element: <Apresentacao />},
      {path: '/Contato', element: <Contato />},
      {path: '/Login', element: <Login />},
      {path: '/ListaSensor', element: <ListaSensor />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
