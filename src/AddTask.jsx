import { useState } from 'react'

function AddTask({  task,onSave, onCancel }) {
  const [title, setTitle] = useState(task ? task.title : '')
  const [description, setDescription] = useState(task ? task.description : '')
  const [label, setLabel] = useState(task ? task.label : 'To do')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ title, description, label })
  }

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-200/70 backdrop-blur-sm p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white rounded-3xl p-6 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-slate-800">{task ? 'Edit task' : 'Add task'}</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full bg-gray-100 rounded-full px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-700"
        />
        <textarea
          placeholder="Description"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-gray-100 rounded-2xl px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-700"
        />
        <select
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="w-full bg-gray-100 rounded-full px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-700"
        >
          <option>To do</option>
          <option>In progress</option>
          <option>Done</option>
        </select>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-white text-gray-800 border border-gray-300 rounded-full py-3 text-sm font-medium hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 bg-gray-800 text-white rounded-full py-3 text-sm font-medium hover:bg-gray-700 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTask