import Task from "./Task";
const TaskCompletedList = ({ tasks, onToggle, onDelete }) => {
  return (
    <ul className="todo-list completed-list">
      {tasks.map((task, index) => (
        <Task onDelete={onDelete} onToggle={onToggle} key={index} task={task} />
      ))}
    </ul>
  );
};

export default TaskCompletedList;
