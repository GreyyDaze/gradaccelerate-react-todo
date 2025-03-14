import DoodleOverlay from "./DoodleOverlay";
import { LucideTrash2, LucidePencil } from "lucide-react";

const TodoList = ({ tasks, editTask, deleteTask }) => {
  const formatDateAndDay = (timestamp) => {
    const date = new Date(timestamp);

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = monthNames[month];

    const weekday = date.toLocaleDateString("en-US", { weekday: "long" });

    // Return as an array: [formatted date, weekday]
    return [`${day} ${monthName}, ${year}`, weekday];
  };

  // sort tasks in descending order
  const sortedTasks = tasks.sort((a, b) => b.date - a.date);

  // group tasks by dates
  const groupedTasks = sortedTasks.reduce((acc, task) => {
    const [formattedDate, weekday] = formatDateAndDay(task.date);

    if (!acc[formattedDate]) {
      acc[formattedDate] = { day: weekday, tasks: [] };
    }

    acc[formattedDate].tasks.push(task);
    return acc;
  }, {});

  return (
    <section className="todo-list-container relative bg-purple-50 px-6 py-5 rounded-xl max-w-4xl w-full max-h-[24.3rem] overflow-y-auto">
      {/* Header */}
      <h2 className="text-lg font-bold text-purple-700 mb-4 z-20 sticky top-1">
        Tasks
      </h2>

      {Object.entries(groupedTasks).map(([date, { day, tasks }]) => (
        <div key={date} className="mb-6">
          {/* Date on left, Day on right */}
          <div className="flex justify-between text-xs text-gray-600 mb-2 font-semibold">
            <span>{date}</span>
            <span>{day}</span>
          </div>

          {/* Tasks Container */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tasks.map((task, index) => (
              <li key={task.id} className="bg-white p-4 rounded-lg shadow-md">
                <header className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold text-gray-800">
                    {index === 0 ? "Latest Task" : `Task ${index + 1}`}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      className="text-gray-400 hover:text-gray-500 cursor-pointer"
                      onClick={() => editTask(task)}
                    >
                      <LucidePencil size={16} />
                    </button>
                    <button
                      className="text-red-400 hover:text-red-500 cursor-pointer"
                      onClick={() => deleteTask(task.id)}
                    >
                      <LucideTrash2 size={16} />
                    </button>
                  </div>
                </header>
                <p className="text-xs text-gray-600">{task.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {tasks && tasks?.length === 0 && (
        <section className="todo-list-container bg-purple-50 px-6 py-5 rounded-xl max-w-4xl w-full text-center">
          <p className="text-gray-400 text-sm">No tasks available</p>
        </section>
      )}

      {/* Doodle Overlay */}
      <DoodleOverlay />
    </section>
  );
};

export default TodoList;
