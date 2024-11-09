import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css"
import { RouterProvider } from 'react-router-dom'
import { route } from './Routes/routes'
import { WindowSizeProvider } from './context/WindowSizeContext'

createRoot(document.getElementById('root')!).render(

    
  <WindowSizeProvider> <StrictMode>
  <RouterProvider router={route}/>
</StrictMode>
</WindowSizeProvider>
 
)
