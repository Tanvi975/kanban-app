import { FiTrello } from 'react-icons/fi'
import { FiPlus } from 'react-icons/fi'
import { FiLogOut } from 'react-icons/fi'

function Header({ onLogout , onAdd}) {
  return (
    <div className="relative flex flex-wrap items-center justify-between gap-3 mb-6">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl bg-gray-800 text-white flex items-center justify-center">
          <FiTrello size={22} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Kanban board</h1>
          <p className="text-sm text-gray-500">Plan it, move it, finish it.</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button  onClick={onAdd} className="flex items-center gap-2 bg-gray-800 text-white rounded-full px-5 py-3 text-sm font-medium hover:bg-gray-600 transition">
          <FiPlus size={16} /> Add task
        </button>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 bg-white text-gray-800 border border-gray-300 rounded-full px-5 py-3 text-sm font-medium hover:bg-gray-100 transition"
        >
          <FiLogOut size={16} /> Logout
        </button>
      </div>
    </div>
  )
}

export default Header