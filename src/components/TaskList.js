import Task from "./Task";

const TaskList = ({ tasks, onToggle }) => {
  return (
    <>
      <ul className="todo-list pending-list">
        {tasks.map((task, index) => (
          <Task onToggle={onToggle} key={index} task={task} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
