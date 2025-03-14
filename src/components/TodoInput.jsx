import { LucideStar, LucideSparkles } from "lucide-react";

const getRandomPosition = (position) => {
  if (position === "top-right") {
    return {
      top: "-9px",
      right: "-10px",
      opacity: 0.4,
    };
  } else if (position === "bottom-center") {
    return {
      left: "50%",
      bottom: "5px",
      transform: "translateX(-50%)",
      opacity: 0.4,
    };
  }
  return {};
};

const TodoInput = () => {
  return (
    <div className="relative bg-purple-50 px-6 py-5 rounded-xl max-w-md w-full overflow-hidden">
      {/* Doodles */}
      <div
        className="absolute text-purple-400"
        style={getRandomPosition("top-right")}
      >
        <LucideStar size={28} strokeWidth={1.5} />
      </div>
      <div
        className="absolute text-purple-400"
        style={getRandomPosition("bottom-center")}
      >
        <LucideSparkles size={28} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <h2 className="text-base font-bold text-purple-700 mb-4">Add Task</h2>
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="flex-1 bg-white border-2 border-purple-500 outline-none py-1.5 px-1.5 text-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 shadow-md"
          placeholder="What needs to be done?"
        />
        <button className="rounded-full bg-yellow-500 text-white px-8 py-[0.5rem] hover:bg-yellow-600 transition font-medium">
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;