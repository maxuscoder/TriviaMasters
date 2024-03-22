import { useSelector } from "react-redux";
import CategorySelection from "./CategorySelection";
import CategoryOverview from "./CategoryOverview";

function Start() {
  const { username, category } = useSelector((state) => state.user);

  return (
    <div className="h-screen flex flex-col items-center justify-between py-[100px]">
      <h1 className="sm:text-[20px] md:text-[25px] lg:text-[30px] font-semibold xl:text-[40px]">
        Please choose your desired gameplay, {username || "Master"}
      </h1>
      <div className="pb-[20px] sm:pb-[80px] sm:flex sm:items-center sm:justify-center sm:gap-[30px] md:gap-[100px] lg:gap-[170px]">
        <CategoryOverview category={category} />
        <CategorySelection />
      </div>
    </div>
  );
}

export default Start;
