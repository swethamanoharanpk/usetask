import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Sample from './pages/Sample'
import Hello from './pages/Hello'
import Hai from './pages/Hai'
import { Store } from './pages/Store'
import { First } from './pages/First'


function App() {

  const abc = createBrowserRouter([
    {path:'/',
      element : <Sample/>
    },
  {path: '/hello',
    element: <Hello/>

  },
{path: '/hai',
  element: <Hai/>
},
{path: '/first',
  element: <First/>
}
])
  return (
    <div>
    <Store>
    <RouterProvider router={abc}></RouterProvider>
    </Store>

    </div>
  )
}

export default App