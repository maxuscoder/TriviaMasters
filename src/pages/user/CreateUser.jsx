import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate("/start");
  }

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <p className="mb-4 text-white">
        Welcome, Master! Please start by typing your name:
      </p>
      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border-2 text-black font-semibold border-teal-400 px-2.5 py-1.5 mb-6 bg-teal-100 rounded-lg focus:outline-teal-400"
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start playing</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
