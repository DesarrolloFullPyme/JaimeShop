import { useState } from 'react'
import Login from '../components/Login'
import './App.css'

function App() {
  const [loggedIn, setLoggedIn ] = useState(false)

  return (
    <>
     <div>
      {loggedIn ? (
        <h1>Bienvenido al panel administrativo</h1>
      ) : (
        <Login onLogin={() => setLoggedIn(true)}/>
      )}
     </div>
    </>
  )
}

export default App
