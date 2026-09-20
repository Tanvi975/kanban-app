import { FiEdit2 } from 'react-icons/fi'
import { FiTrash2 } from 'react-icons/fi'
import { useRef, useState } from 'react'

const labelStyle = {
  'To do': 'bg-gray-200 text-gray-700',
  'In progress': 'bg-orange-100 text-orange-800',
  'Done': 'bg-green-100 text-green-800',
}

function TaskCard({ task, onDelete, onEdit, onMove   }) {

  const [dragging, setDragging] = useState(false)
  const targetColumn = useRef(null)
  
  const handlePointerDown = (e) => {
    if (e.target.closest('button')) return
    e.currentTarget.setPointerCapture(e.pointerId)
    targetColumn.current = null
    setDragging(true)
  }
  
  const handlePointerMove = (e) => {
    if (!dragging) return
    const el = document.elementFromPoint(e.clientX, e.clientY)
    const col = el && el.closest('[data-column]')
    if (col) targetColumn.current = col.dataset.column
  }
  
  const handlePointerUp = (e) => {
    if (!dragging) return
    if (targetColumn.current) onMove(task.id, targetColumn.current)
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
    setDragging(false)
  }
  return (
    <div
  onPointerDown={handlePointerDown}
  onPointerMove={handlePointerMove}
  onPointerUp={handlePointerUp}
  className={`bg-gray-100 rounded-2xl p-3.5 touch-none select-none cursor-grab ${dragging ? 'opacity-60' : ''}`}
>
<div className="flex items-start justify-between gap-2">
  <h3 className="text-sm font-medium text-gray-800 break-words">{task.title}</h3>

</div>
      <p className="text-sm text-gray-500 mt-1 mb-3 line-clamp-3 break-words">{task.description}</p>

      <div className="flex items-center justify-between">
        <span className={`text-xs rounded-full px-2 py-0.5 ${labelStyle[task.label]}`}>
          {task.label}
        </span>
        <div className="flex gap-2 text-gray-400">
        <button onClick={() => onEdit(task)} className="hover:text-slate-800 p-1.5 transition">
        <FiEdit2 size={15} />
        </button>
          <button onClick={() => onDelete(task.id)} className="hover:text-red-500 p-1.5 transition">
          <FiTrash2 size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskCard