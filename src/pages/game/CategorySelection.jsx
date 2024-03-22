import { Form, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory, updateDifficulty } from "../user/userSlice";

function CategorySelection() {
  const { category, difficulty } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/game/${category}/${difficulty}`);
  }

  function handleChangeCategory(e) {
    dispatch(updateCategory(e.target.value));
  }

  function handleChangeDifficulty(e) {
    dispatch(updateDifficulty(e.target.value));
  }

  return (
    <Form
      onSubmit={handleSubmit}
      className="flex flex-col items-center sm:items-end sm:justify-center sm:gap-3 sm:h-full"
    >
      <div className="pt-5 text-center mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label>Category</label>
        <select
          id="selectCategory"
          className="text-black w-[170px] p-2.5 rounded-md ml-4 bg-teal-100"
          value={category}
          onChange={handleChangeCategory}
        >
          <option>Trivialities</option>
          <option>Science</option>
          <option>History</option>
          <option>Geography</option>
          <option>Music</option>
          <option>Animals</option>
          <option>Vehicles</option>
          <option>Gaming</option>
        </select>
      </div>

      <div className="text-center flex flex-col gap-2 sm:flex-row sm:items-center">
        <label>Difficulty</label>
        <div>
          <select
            id="selectDifficulty"
            className="text-black w-[170px] p-2.5 rounded-md ml-4 bg-teal-100"
            value={difficulty}
            onChange={handleChangeDifficulty}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
      </div>

      <div className="mt-10">
        <Button type="primary">Start Game</Button>
      </div>
    </Form>
  );
}
export default CategorySelection;
