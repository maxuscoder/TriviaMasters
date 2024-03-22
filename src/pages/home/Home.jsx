import Button from "../../ui/Button";
import ParticlesContainer from "../Particles";
import CreateUser from "../user/CreateUser";
import { useSelector } from "react-redux";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="h-screen flex flex-col items-center justify-start gap-[25px]">
      <ParticlesContainer />
      <img
        src="../../../public/images/home_icon_1.svg"
        width="250px"
        alt="SVG"
      />
      <h1 className="md:text-[60px] uppercase tracking-widest font-bold">
        Trivia 🎲 Masters
      </h1>
      <h2 className="text-teal-100 mb-10 text-[30px] uppercase tracking-widest font-bold">
        Unleash your knowledge
      </h2>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/start" type="primary">
          Go back to game, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
