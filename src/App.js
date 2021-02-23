import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskCompletedList from "./components/TaskCompletedList";
import Footer from "./components/Footer";
import notodo from "./empty.svg";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const onToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      setTasks(tasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    if (0 === getCompletedLen()) setShowCompleted(false);
  }, [tasks]);

  const getWeekDay = () => {
    return [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][new Date().getDay()];
  };

  const getCompletedLen = () => {
    return tasks.filter((task) => task.isComplete).length;
  };

  const getPendingLen = () => {
    return tasks.filter((task) => !task.isComplete).length;
  };

  return (
    <div className="container flex-direction-column">
      <h1>Daily To-Do List</h1>
      <div className="todo-wrapper flex-direction-column">
        <h2 className="date">
          {getWeekDay()} - {new Date().toLocaleDateString()}
        </h2>
        <TaskForm addTask={addTask} />

        {getPendingLen() === 0 && (
          <>
            <img
              className="width-65 align-self-center margin-top-20"
              src={notodo}
              alt="No ToDo"
            />
            <small className="align-self-center font-italic">
              No pending tasks
            </small>
          </>
        )}

        {getPendingLen() > 0 && (
          <span className="padding-5 margin-top-10 font-bold">
            You have {getPendingLen()} pending tasks
          </span>
        )}
        <TaskList
          onToggle={onToggle}
          tasks={tasks.filter((task) => !task.isComplete)}
        />
        {showCompleted && (
          <>
            {
              <span className="padding-5 margin-top-10 font-italic font-bold">
                Completed tasks: {getCompletedLen()}
              </span>
            }
            <TaskCompletedList
              onToggle={onToggle}
              onDelete={onDelete}
              tasks={tasks.filter((task) => task.isComplete)}
            />
          </>
        )}
        {getCompletedLen() > 0 && (
          <div className="text-align-center div-btn-config">
            <a
              className="cursor-pointer font-bolder"
              onClick={() => setShowCompleted(!showCompleted)}
            >
              {showCompleted ? "Hide Completed" : "Show Completed"}
            </a>
            <a
              className="cursor-pointer font-bolder"
              onClick={() => {
                setTasks([]);
                setShowCompleted(false);
              }}
            >
              Clear All
            </a>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
