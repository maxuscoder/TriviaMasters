function GeographyOverview() {
  return (
    <div className="flex flex-col items-center justify-around max-w-[300px]">
      <img
        src="../../public/images/category-geography.png"
        width="170px"
        alt="GEOGRAPHY"
        className="transition duration-500 transform hover:-translate-y-3 hover:scale-125"
      ></img>
      <p className="border-2 border-teal-100 border-opacity-10 text-sm mt-5 p-5 rounded-md">
        Geography is like exploring Earth's puzzle, connecting landscapes and
        cultures to understand our world's intricate web of interactions.
      </p>
    </div>
  );
}

export default GeographyOverview;
