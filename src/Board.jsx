import { useNavigate } from 'react-router-dom'
import { supabase } from './supabaseClient'
import Header from './Header'
import Column from './Column'
import { useState } from 'react'

function Board() {
  const navigate = useNavigate()
  const [showForm, setShowForm] = useState(false)

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Add drag and drop', description: 'Use a library so it works on phones too.', label: 'To do' },
    { id: 2, title: 'Build board UI', description: 'Three columns with task cards.', label: 'In progress' },
    { id: 3, title: 'Supabase login', description: 'Signup, login and logout working.', label: 'Done' },
  ])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }
  const columns = [
    { name: 'To do', dot: 'bg-gray-500' },
    { name: 'In progress', dot: 'bg-orange-500' },
    { name: 'Done', dot: 'bg-green-500' },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-100 p-4 md:p-8">
      <Header onLogout={handleLogout} onAdd={() => setShowForm(true)} />
      {showForm && <p className="relative mb-4 text-slate-800">Form will come here</p>}   

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
      {columns.map((col) => (
          <Column
            key={col.name}
            name={col.name}
            dot={col.dot}
            tasks={tasks.filter((t) => t.label === col.name)}
          />
        ))}
      </div>
    </div>
  )
}

export default Board