import { useLoaderData, useNavigate } from "react-router-dom";
import { getQuestions } from "../../services/apiQuestions";
import ProgressOverview from "./ProgressOverview";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Question from "../../ui/Question";
import {
  loadGameQuestions,
  checkAnswer,
  startTimer,
  decreaseTimer,
  updateCorrectAnswer,
} from "../user/userSlice";
import Button from "../../ui/Button";

function Game() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);

  const [gameQuestions, setGameQuestions] = useState([]);
  const { questionDisplayed, seconds } = useSelector((state) => state.user);
  const bulkQuestions = useLoaderData();
  const [revealedAnswer, setRevealAnswer] = useState("");

  useEffect(() => {
    dispatch(loadGameQuestions(bulkQuestions));
  }, [dispatch, bulkQuestions]);

  useEffect(() => {
    dispatch(startTimer());
  }, [questionDisplayed, dispatch]);

  useEffect(() => {
    if (questionDisplayed <= 9 && seconds > 0) {
      const timer = setInterval(() => {
        dispatch(decreaseTimer());
      }, 1000);

      return () => clearInterval(timer);
    } else if (seconds === 0) {
      dispatch(checkAnswer(selectedOption));
      setSelectedOption(null);
      dispatch(startTimer());
    } else if (questionDisplayed > 9) {
      navigate("/end");
    }
  }, [dispatch, questionDisplayed, seconds, selectedOption, navigate]);

  useEffect(() => {
    setGameQuestions(bulkQuestions);
  }, [bulkQuestions]);

  const gameQuestionActive = gameQuestions[questionDisplayed];

  useEffect(() => {
    if (gameQuestionActive) {
      dispatch(updateCorrectAnswer(gameQuestionActive.correct_answer));
    }
  }, [dispatch, gameQuestionActive]);

  function handleSelect(option) {
    setSelectedOption(option);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (selectedOption) {
      setRevealAnswer(gameQuestionActive.correct_answer);
    }
    setTimeout(function () {
      if (selectedOption !== null) {
        dispatch(checkAnswer(selectedOption));
        setRevealAnswer("");
        setSelectedOption(null);
      }
    }, 3000);
  }

  if (!gameQuestionActive) return null;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center h-screen justify-center"
    >
      <Question
        question={gameQuestionActive}
        handleSelect={handleSelect}
        seconds={seconds}
        selectedOption={selectedOption}
        revealedAnswer={revealedAnswer}
      />
      <Button type="answer">Answer!</Button>
      <ProgressOverview />
    </form>
  );
}

export async function loader({ params }) {
  const { category, difficulty } = params;
  const questions = await getQuestions(category, difficulty);
  return questions;
}

export default Game;
