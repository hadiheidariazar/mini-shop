import { useRoutes } from 'react-router-dom'
import routes from './routes'
import ContextCartProvider from './Context/ContextCart'

export default function App() {

  const router = useRoutes(routes)

  return (
    <>
      <ContextCartProvider>
        {router}
      </ContextCartProvider>
    </>
  )
}