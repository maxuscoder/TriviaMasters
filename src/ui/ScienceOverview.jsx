function ScienceOverview() {
  return (
    <div className="flex flex-col items-center justify-around max-w-[300px]">
      <img
        src="../../public/images/category-science.png"
        width="250px"
        alt="SCIENCE"
        className="transition duration-500 transform hover:-translate-y-3 hover:scale-125"
      ></img>

      <p className="border-2 border-teal-100 border-opacity-10 text-sm p-5 rounded-md">
        Science is like a super cool detective, figuring out how everything in
        the Universe works, therefore settling the objective truth.
      </p>
    </div>
  );
}

export default ScienceOverview;
