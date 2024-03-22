function HistoryOverview() {
  return (
    <div className="flex flex-col items-center justify-around max-w-[300px] ">
      <img
        src="../../public/images/category-history.png"
        width="250px"
        alt="HISTORY"
        className="transition duration-500 transform hover:-translate-y-3 hover:scale-125"
      ></img>
      <p className="border-2 border-teal-100 border-opacity-10 text-sm p-5 rounded-md">
        History is like a time-traveling detective, piecing together the past to
        shed light on the present and shape the future.
      </p>
    </div>
  );
}

export default HistoryOverview;
