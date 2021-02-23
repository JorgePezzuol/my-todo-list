import Task from "./Task";
const TaskCompletedList = ({ tasks, onToggle }) => {
  return (
    <>
      <ul className="todo-list completed-list">
        {tasks.map((task, index) => (
          <Task onToggle={onToggle} key={index} task={task} />
        ))}
      </ul>
    </>
  );
};

export default TaskCompletedList;
