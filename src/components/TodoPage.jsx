import { useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoPage = () => {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [task, setTask] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef(null);
  const [prevTask, setPrevTask] = useState(null);

  const addTask = (task) => {
    setTaskList((prevTasks) => [...prevTasks, task]);
    localStorage.setItem("tasks", JSON.stringify([...taskList, task]));
  };

  const editTask = (task) => {
    inputRef.current.focus();
    setTask(task.description);
    setPrevTask(task);
    setIsEdit((prev) => !prev);
  };

  const updateTask = (task) => {
    const editedTasks = taskList.map((t) => {
      if (t.id === prevTask.id) {
        return {
          ...t,
          description: task,
        };
      }
      return t;
    });
    console.log(editedTasks, "editedTasks");
    setTaskList(editedTasks);
    localStorage.setItem("tasks", JSON.stringify(editedTasks));
  };

  const deleteTask = (taskId) => {
    const filteredTasks = taskList.filter((t) => t.id !== taskId);
    setTaskList(filteredTasks);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  };

  return (
    <main className="flex items-center justify-center flex-col gap-6 p-5 mt-13">
      <h1 className="text-xl font-bold text-purple-700 mb-2">
        Productivity Booster
      </h1>
      <TodoInput
        task={task}
        setTask={setTask}
        addTask={addTask}
        inputRef={inputRef}
        isEdit={isEdit}
        updateTask={updateTask}
      />
      <TodoList tasks={taskList} editTask={editTask} deleteTask={deleteTask} />
    </main>
  );
};

export default TodoPage;
