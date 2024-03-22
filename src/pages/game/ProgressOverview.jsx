import { useDispatch, useSelector } from "react-redux";
import { increaseTimer, useeDoublePoints } from "../user/userSlice";

function ProgressOverview() {
  const { score, plusTenSecondsAvailable, doublePointsAvailable } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const spanClassName =
    "text-[30px] hover:cursor-pointer hover:scale-125 flex items-center justify-center transition-all duration-300";
  const disabledSpanClassName =
    "text-[30px] opacity-25 flex items-center justify-center";

  function handleTime() {
    if (plusTenSecondsAvailable) dispatch(increaseTimer());
  }

  function handleDouble() {
    if (doublePointsAvailable) dispatch(useeDoublePoints());
  }

  return (
    <div className="w-screen py-2 mt-[100px] text-left flex items-around border-t-2 border-gray-700">
      <p className="w-1/2 text-center flex items-center justify-center">
        Score: {score}
      </p>
      <div className="w-1/2 flex justify-center pr-[70px] gap-10">
        <span
          className={
            doublePointsAvailable ? spanClassName : disabledSpanClassName
          }
          onClick={handleDouble}
        >
          🪙<span className="text-sm">x2</span>
        </span>

        <span
          className={
            plusTenSecondsAvailable ? spanClassName : disabledSpanClassName
          }
          onClick={handleTime}
        >
          ⌛<span className="text-sm">+10s</span>
        </span>
      </div>
    </div>
  );
}

export default ProgressOverview;
