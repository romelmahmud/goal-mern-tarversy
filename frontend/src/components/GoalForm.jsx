import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

const GoalForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
    setText("");
  };
  return (
    <section className="form">
      <form onSubmit={formSubmitHandler}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            value={text}
            id="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoalForm;
