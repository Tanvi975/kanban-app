import { useNavigate } from 'react-router-dom'
import { supabase } from './supabaseClient'
import Header from './Header'
import Column from './Column'
import { useState, useEffect } from 'react'
import AddTask from './AddTask'

function Board() {
  const navigate = useNavigate()
  const [showForm, setShowForm] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }
  const handleAdd = (newTask) => {
    setTasks([...tasks, { id: Date.now(), ...newTask }])
    setShowForm(false)
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const handleUpdate = (updated) => {
    setTasks(tasks.map((t) => (t.id === editingTask.id ? { ...t, ...updated } : t)))
    setEditingTask(null)
  }

  const handleMove = (id, newLabel) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, label: newLabel } : t)))
  }

  const columns = [
    { name: 'To do', dot: 'bg-gray-500' },
    { name: 'In progress', dot: 'bg-orange-500' },
    { name: 'Done', dot: 'bg-green-500' },
    
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-100 p-4 md:p-8">
      <Header onLogout={handleLogout} onAdd={() => setShowForm(true)} />
      {showForm && <AddTask onSave={handleAdd} onCancel={() => setShowForm(false)} />}  
      {editingTask && (<AddTask task={editingTask} onSave={handleUpdate} onCancel={() => setEditingTask(null)} />)}

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
      {columns.map((col) => (
          <Column
            key={col.name}
            name={col.name}
            dot={col.dot}
            tasks={tasks.filter((t) => t.label === col.name)}
             onDelete={handleDelete}
             onEdit={setEditingTask}
             onMove={handleMove}
          />
        ))}
      </div>
    </div>
  )
}

export default Board