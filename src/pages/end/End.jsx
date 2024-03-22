import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { resetGame } from "../user/userSlice";
import { useNavigate } from "react-router-dom";

function End() {
  const { score } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let message, emoji, source, imgClass;

  if (score < 301) {
    message =
      "Well, that was... a valiant effort. Keep practicing, you'll get there... maybe.";
    emoji = "🤡";
    source = "/public/images/D_grade.png";
    imgClass = "hover:rotate-180 transition-all duration-700";
  } else if (score < 501) {
    message =
      "Not too bad! You've graduated from 'total disaster' to 'mild disappointment.' Keep striving for mediocrity!";
    emoji = "🤪";
    source = "/public/images/C_grade.png";
    imgClass = "hover:scale-75 transition-all duration-1000";
  } else if (score < 851) {
    message =
      "Impressive! You're officially in the 'kind of okay' category. Keep up the satisfactory work!";
    emoji = "🫂";
    source = "/public/images/B_grade.png";
    imgClass = "hover:scale-125 transition-all duration-1000";
  } else {
    message =
      "Wow, someone's been hitting the books! You're dangerously close to becoming a real-life know-it-all. Watch out, world!";
    emoji = "🥇";
    source = "/public/images/A_grade.png";
    imgClass = "hover:-rotate-180 transition-all duration-700";
  }

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col items-center h-full justify-between py-[100px]">
        <h2 className="sm:w-[600px] text-[25px] font-bold text-center tracking-wide">
          {emoji} {`-> `}
          {message}
        </h2>
        <img src={source} alt="end-pic" width="400px" className={imgClass} />
        <div className="flex flex-col items-center space-y-6">
          <span className="uppercase text-[30px]">Your score: {score}</span>
          <Button
            type="rewind"
            onClick={() => {
              dispatch(resetGame());
              navigate("/start");
            }}
          >
            📲 Play again!
          </Button>
        </div>
      </div>
      <footer className="w-full bg-stone-800 text-right text-sm text-stone-400 px-4 py-2">
        Copyright © 2024 Muntean Paul | Made for studying purposes.
      </footer>
    </div>
  );
}

export default End;
