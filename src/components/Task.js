const Task = ({ task, onToggle }) => {
  return (
    <>
      <li onClick={() => onToggle(task.id)}>
        <div className="task">
          <input
            type="checkbox"
            value={task.isComplete}
            checked={task.isComplete}
            onChange={() => onToggle(task.id)}
          />
          <span className="margin-left-10">{task.description}</span>
        </div>
      </li>
    </>
  );
};

export default Task;
