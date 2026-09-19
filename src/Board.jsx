import { useNavigate } from 'react-router-dom'
import { supabase } from './supabaseClient'

function Board() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <div>
      <h1>Kanban Board</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Board