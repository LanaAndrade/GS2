import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Home from './routes/Home.jsx';
import Contato from './routes/Contato.jsx'
import Error from './routes/Error.jsx';
import Projeto from './routes/Projeto.jsx';
import HQs from './routes/HQs.jsx';
import Apresentacao from './routes/Apresentacao.jsx';
import AdicionarHq from './routes/AdicionarHq.jsx';

const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error />,

    children: [
      {path: '/', element: <Projeto />},
      {path: '/AdicionarHq', element: <AdicionarHq />},
      {path: '/HQs',element:<HQs/>},
      {path: '/Apresentacao', element: <Apresentacao />},
      {path: '/Contato', element: <Contato />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
