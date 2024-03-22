function AnimalsOverview() {
  return (
    <div className="flex flex-col items-center justify-around max-w-[300px]">
      <img
        src="../../public/images/category-animals.png"
        width="250px"
        alt="ANIMALS"
        className="transition duration-500 transform hover:-translate-y-3 hover:scale-125"
      ></img>
      <p className="border-2 border-teal-100 border-opacity-10 text-sm p-5 rounded-md">
        Animals are nature's wonders, each with its unique role and behavior,
        contributing to the intricate tapestry of life on Earth.
      </p>
    </div>
  );
}

export default AnimalsOverview;
