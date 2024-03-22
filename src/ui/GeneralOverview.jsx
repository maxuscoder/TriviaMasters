function GeneralOverview() {
  return (
    <div className="flex flex-col items-center justify-around max-w-[300px]">
      <img
        src="../../public/images/category-general.png"
        width="250px"
        alt="GEOGRAPHY"
        className="transition duration-500 transform hover:-translate-y-3 hover:scale-125"
      ></img>
      <p className="border-2 border-teal-100 border-opacity-10 text-sm mt-5 p-5 rounded-md">
        General knowledge is the best out there. Who knows when you gonna need
        to save a friend bitten by a spider or so. Nerd equals hero.
      </p>
    </div>
  );
}

export default GeneralOverview;
