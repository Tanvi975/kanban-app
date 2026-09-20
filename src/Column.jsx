import TaskCard from './TaskCard'
function Column({ name, dot, tasks, onDelete, onEdit  }) {
    return (
      <div className="bg-white rounded-3xl border border-gray-200 p-4 min-h-64">
        <div className="flex items-center justify-between mb-3">

          <span className="flex items-center gap-2 text-sm font-medium text-gray-800">
            <span className={`w-3 h-3 rounded-full ${dot}`}></span>
            {name}
          </span>
          <span className="text-xs bg-gray-100 text-gray-600 rounded-full px-2 py-0.5 ">{tasks.length}</span>
        </div>
        <div className="flex flex-col gap-2.5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={onDelete} onEdit={onEdit}/>
        ))}
      </div>
      </div>
    )
  }
  
  export default Column