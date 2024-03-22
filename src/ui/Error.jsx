import ParticlesContainer from "../pages/Particles";
import Button from "./Button";

function Error() {
  return (
    <div className="bg-[#101111] h-screen text-white flex flex-col items-center justify-center gap-7">
      <ParticlesContainer />
      <div className="z-10 flex flex-col items-center justify-center gap-7">
        <img
          src="../../public/images/error.png"
          width="500px"
          alt="error"
        ></img>
        <Button to="/" type="small">
          Go home
        </Button>
      </div>
    </div>
  );
}

export default Error;
