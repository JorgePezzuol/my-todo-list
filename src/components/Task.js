const Task = ({ task, onToggle, onDelete }) => {
  return (
    <>
      <li onDoubleClick={() => onToggle(task.id)}>
        <div className="task">
          <input
            type="checkbox"
            value={task.isComplete}
            checked={task.isComplete}
            onChange={() => onToggle(task.id)}
          />
          <span className="margin-left-10" style={{flex: 1}}>{task.description}</span>
          {task.isComplete && (
            <a onClick={() => onDelete(task.id)} className="padding-right-15 color-red">X</a>
          )}
        </div>
      </li>
    </>
  );
};

export default Task;
