import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoPage = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-6 p-5 mt-13">
      <h1 className="text-xl font-bold text-purple-700 mb-2">Productivity Booster</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodoPage;
