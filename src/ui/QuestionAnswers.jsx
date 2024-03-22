import React from "react";

const QuestionAnswers = ({
  shuffledAnswers,
  handleSelect,
  selectedOption,
  listClassName,
  selectedListClassName,
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 w-4/5 font-bold text-sm sm:text-md lg:text-lg`}
    >
      {shuffledAnswers.map((option, index) => (
        <ul
          key={index}
          className="lg:flex lg:flex-col lg:items-center lg:justify-start"
        >
          <li
            onClick={() => handleSelect(option)}
            className={
              selectedOption === option ? selectedListClassName : listClassName
            }
          >
            {option}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default QuestionAnswers;
