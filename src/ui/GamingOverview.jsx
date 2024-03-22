function GamingOverview() {
  return (
    <div className="flex flex-col items-center justify-around max-w-[300px] pt-[70px]">
      <img
        src="../../public/images/category-gaming.png"
        width="250px"
        alt="GAMING"
        className="transition duration-500 transform hover:-translate-y-3 hover:scale-125"
      ></img>
      <p className="border-2 border-teal-100 border-opacity-10 text-sm p-5 rounded-md">
        Gaming is a digital playground, where players explore, compete, and
        connect in virtual worlds.
      </p>
    </div>
  );
}

export default GamingOverview;
