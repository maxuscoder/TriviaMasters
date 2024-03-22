function MusicOverview() {
  return (
    <div className="flex flex-col items-center justify-around max-w-[300px] ">
      <img
        src="../../public/images/category-music.png"
        width="250px"
        alt="MUSIC"
        className="transition duration-500 transform hover:-translate-y-3 hover:scale-125"
      ></img>
      <p className="border-2 border-teal-100 border-opacity-10 text-sm p-5 rounded-md">
        Music is a universal language, weaving emotions and rhythms to evoke
        feelings and connect people across cultures and time.
      </p>
    </div>
  );
}

export default MusicOverview;
