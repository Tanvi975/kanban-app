import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Board from './Board'
import Private from './Private'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/board"
        element={
          <Private>
            <Board />
          </Private>
        }
      />
    </Routes>
  )
}

export default App