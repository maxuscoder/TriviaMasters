function PoliticsOverview() {
  return (
    <div className="flex flex-col items-center justify-around max-w-[300px] ">
      <img
        src="../../public/images/category-vehicles.png"
        width="250px"
        alt="VEHICLES"
        className="transition duration-500 transform hover:-translate-y-3 hover:scale-125"
      ></img>
      <p className="border-2 border-teal-100 border-opacity-10 text-sm p-5 rounded-md">
        From sleek cars to mighty ships, explore a world of innovation and
        adventure with these mechanical marvels.
      </p>
    </div>
  );
}

export default PoliticsOverview;
