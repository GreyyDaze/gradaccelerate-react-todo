import DoodleOverlay from "./DoodleOverlay";
import { LucideTrash2, LucidePencil } from "lucide-react";

// Static task data
const tasks = [
  {
    id: 1,
    date: "March 13, 2025",
    day: "Thursday",
    title: "Task 1",
    description: "Complete project documentation",
  },
  {
    id: 2,
    date: "March 13, 2025",
    day: "Thursday",
    title: "Task 2",
    description: "Review team feedback",
  },
  {
    id: 3,
    date: "March 13, 2025",
    day: "Thursday",
    title: "Task 3",
    description: "Prepare presentation slides",
  },
  {
    id: 4,
    date: "March 13, 2025",
    day: "Thursday",
    title: "Task 4",
    description: "Prepare presentation slides",
  },
  {
    id: 5,
    date: "March 13, 2025",
    day: "Thursday",
    title: "Task 5",
    description: "Prepare presentation slides",
  },
  {
    id: 6,
    date: "March 13, 2025",
    day: "Thursday",
    title: "Task 6",
    description: "Prepare presentation slides",
  },
  {
    id: 7,
    date: "March 13, 2025",
    day: "Thursday",
    title: "Task 7",
    description: "Prepare presentation slides",
  },
  {
    id: 8,
    date: "March 13, 2025",
    day: "Thursday",
    title: "Task 8",
    description: "Prepare presentation slides",
  },
  {
    id: 9,
    date: "March 13, 2025",
    day: "Thursday",
    title: "Task 9",
    description: "Prepare presentation slides",
  },
  {
    id: 10,
    date: "March 13, 2025",
    day: "Thursday",
    title: "Task 10",
    description: "Prepare presentation slides",
  },
  {
    id: 11,
    date: "March 13, 2025",
    day: "Thursday",
    title: "Task 11",
    description: "Prepare presentation slides",
  },
  {
    id: 12,
    date: "March 13, 2025",
    day: "Thursday",
    title: "Task 12",
    description: "Prepare presentation slides",
  },
  {
    id: 13,
    date: "March 13, 2025",
    day: "Thursday",
    title: "Task 13",
    description: "Prepare presentation slides",
  },
];

const TodoList = () => {
  const hasTasks = tasks.length > 0;

  return (
    <section className="todo-list-container relative bg-purple-50 px-6 py-5 rounded-xl max-w-4xl w-full max-h-[24.3rem] overflow-y-auto">
      {/* Background content (lowest layer) */}
      <div className="relative z-0">
        {/* Header */}
        <h2 className="text-lg font-bold text-purple-700 mb-4 relative z-20">
          Tasks
        </h2>

        {/* Date and Day (outside cards) */}
        {hasTasks && (
          <div className="flex justify-between text-xs text-gray-600 mb-4 relative z-20">
            <span>{tasks[0].date}</span>
            <span>{tasks[0].day}</span>
          </div>
        )}

        {/* Tasks Container */}
        <div className="pr-2 py-2 relative z-20">
          {hasTasks ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white p-4 rounded-lg shadow-md relative z-20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-semibold text-gray-800">
                      {task.title}
                    </h3>
                    <div className="flex gap-2">
                      <button className="text-gray-400 hover:text-gray-500">
                        <LucidePencil size={16} />
                      </button>
                      <button className="text-red-400 hover:text-red-500">
                        <LucideTrash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">{task.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 relative z-20">
              <p className="text-gray-500 text-lg">No tasks available</p>
            </div>
          )}
        </div>
      </div>

      {/* Doodle Overlay */}
      <DoodleOverlay />
    </section>
  );
};

export default TodoList;
