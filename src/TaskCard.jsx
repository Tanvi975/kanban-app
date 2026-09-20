import { FiEdit2 } from 'react-icons/fi'
import { FiTrash2 } from 'react-icons/fi'

const labelStyle = {
  'To do': 'bg-gray-200 text-gray-700',
  'In progress': 'bg-orange-100 text-orange-800',
  'Done': 'bg-green-100 text-green-800',
}

function TaskCard({ task }) {
  return (
    <div className="bg-gray-100 rounded-2xl p-3">
      <h3 className="text-sm font-medium text-gray-800">{task.title}</h3>
      <p className="text-sm text-gray-500 mt-1 mb-3">{task.description}</p>

      <div className="flex items-center justify-between">
        <span className={`text-xs rounded-full px-2 py-0.5 ${labelStyle[task.label]}`}>
          {task.label}
        </span>
        <div className="flex gap-2 text-gray-400">
          <FiEdit2 size={15} />
          <FiTrash2 size={15} />
        </div>
      </div>
    </div>
  )
}

export default TaskCard