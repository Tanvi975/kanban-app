import { FiEdit2 } from 'react-icons/fi'
import { FiTrash2 } from 'react-icons/fi'

const labelStyle = {
  'To do': 'bg-gray-200 text-gray-700',
  'In progress': 'bg-orange-100 text-orange-800',
  'Done': 'bg-green-100 text-green-800',
}

function TaskCard({ task, onDelete, onEdit  }) {
  return (
    <div className="bg-gray-100 rounded-2xl p-3">
      <h3 className="text-sm font-medium text-gray-800">{task.title}</h3>
      <p className="text-sm text-gray-500 mt-1 mb-3">{task.description}</p>

      <div className="flex items-center justify-between">
        <span className={`text-xs rounded-full px-2 py-0.5 ${labelStyle[task.label]}`}>
          {task.label}
        </span>
        <div className="flex gap-2 text-gray-400">
        <button onClick={() => onEdit(task)} className="hover:text-slate-800 transition">
        <FiEdit2 size={15} />
        </button>
          <button onClick={() => onDelete(task.id)} className="hover:text-red-500 transition">
          <FiTrash2 size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskCard