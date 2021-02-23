import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000) + 1;
    const isComplete = false;
    addTask({ id, description, isComplete });
    setDescription("");
  };

  const handleBtnClass = () => {
    return description !== ""
      ? "btn-add-task-enabled"
      : "btn-add-task-disabled";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="display-flex flex-direction-row justify-content-space-between"
    >
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Buy some beers"
        style={{ flex: "1" }}
        className="input-add-task"
      />
      <input
        type="submit"
        className={`btn-add-task ${handleBtnClass()}`}
        value="+"
        style={{ alignSelf: "center" }}
      />
    </form>
  );
};

export default AddTask;
