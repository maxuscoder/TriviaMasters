import { Outlet, useLocation } from "react-router-dom";
import ParticlesContainer from "./Particles";

function AppLayout() {
  const location = useLocation();
  const key = location.pathname;

  return (
    <div className="text-white grid h-screen grid-rows-[auto_1fr_auto]">
      <ParticlesContainer key={key} />
      <div className="z-10">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
