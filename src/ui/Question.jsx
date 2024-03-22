import React, { useEffect, useState } from "react";
import QuestionEmoji from "./QuestionEmoji";
import QuestionAnswers from "./QuestionAnswers";
import { useParams } from "react-router-dom";

const Question = React.memo(
  ({ question, handleSelect, seconds, selectedOption, revealedAnswer }) => {
    let listClassName;

    const { difficulty } = useParams();

    let selectedListClassName =
      "rounded-xl text-black border-2 bg-teal-200 border-teal-600 p-3 sm:p-5 md:p-7 mb-8 md:w-[300px] lg:w-[400px] xl:w-[500px] hover:bg-teal-200 active:bg-teal-100 hover:cursor-pointer hover:text-black transition-all duration-300";

    switch (difficulty) {
      case "Easy":
        listClassName = `font-normal uppercase text-center rounded-xl border-2 border-[#44B020] p-3 sm:p-5 md:p-7 mb-8 md:w-[300px] lg:w-[400px] xl:w-[500px] hover:bg-[#44B020] hover:cursor-pointer hover:text-black transition-all duration-300`;
        selectedListClassName =
          "font-normal uppercase text-center rounded-xl text-black border-2 bg-[#3A961C] border-[#338118] p-3 sm:p-5 md:p-7 mb-8 md:w-[300px] lg:w-[400px] xl:w-[500px] hover:bg-[#41A121] hover:cursor-pointer hover:text-black transition-all duration-300";
        break;
      case "Medium":
        listClassName = `font-normal uppercase text-center rounded-xl border-2 border-[#F1C618] p-3 sm:p-5 md:p-7 mb-8 md:w-[300px] lg:w-[400px] xl:w-[500px] hover:bg-[#F1C618] hover:cursor-pointer hover:text-black transition-all duration-300`;
        selectedListClassName =
          "font-normal uppercase text-center rounded-xl text-black border-2 bg-[#F1C618] border-[#a3850f] p-3 sm:p-5 md:p-7 mb-8 md:w-[300px] lg:w-[400px] xl:w-[500px] hover:bg-[#d1ab13] hover:cursor-pointer hover:text-black transition-all duration-300";
        break;
      case "Hard":
        listClassName = `font-normal uppercase text-center rounded-xl border-2 border-[#E8831E] p-3 sm:p-5 md:p-7 mb-8 md:w-[300px] lg:w-[400px] xl:w-[500px] hover:bg-[#E8831E] hover:cursor-pointer hover:text-black transition-all duration-300`;
        selectedListClassName =
          "font-normal uppercase text-center rounded-xl text-black border-2 bg-[#D87B1F] border-[#B5681C] p-3 sm:p-5 md:p-7 mb-8 md:w-[300px] lg:w-[400px] xl:w-[500px] hover:bg-[#BF6E1D] hover:cursor-pointer hover:text-black transition-all duration-300";
        break;
      default:
        console.log("impossible");
    }

    const q = question.question;

    const [shuffledAnswers, setShuffledAnswers] = useState([]);

    useEffect(() => {
      const combinedAnswers = [
        ...question.incorrect_answers,
        question.correct_answer,
      ];
      const shuffled = shuffleArray(combinedAnswers);
      setShuffledAnswers(shuffled);
    }, [question]);

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    return (
      <div className="h-screen w-screen overflow-hidden flex flex-col items-center justify-start py-[100px] gap-[80px] md:gap-[75px] md:pb-[80px] md:pt-[140px] xl:gap-[85px]">
        <div className="w-2/3 font-bold sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[30px] uppercase xl:tracking-wide">
          <div className="flex items-center gap-6">
            <QuestionEmoji /> <p className="text-white">{q}</p>
          </div>
          <div className="w-full text-[20px] pt-10 flex items-center justify-between">
            <span className="text-gray-400 text-[16px] md:text-lg lg:text-xl">
              Correct answer: <br />
              {revealedAnswer === "" ? "_______________" : revealedAnswer}
            </span>
            <span className="text-[16px] text-right md:text-lg lg:text-xl">
              ⏱️ {seconds} {seconds !== 1 ? "seconds" : "second"} left
            </span>
          </div>
        </div>

        <QuestionAnswers
          shuffledAnswers={shuffledAnswers}
          handleSelect={handleSelect}
          selectedOption={selectedOption}
          listClassName={listClassName}
          selectedListClassName={selectedListClassName}
        />
      </div>
    );
  }
);

export default Question;
