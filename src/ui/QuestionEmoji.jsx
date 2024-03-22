import { useParams } from "react-router-dom";

function QuestionEmoji() {
  const { difficulty } = useParams();
  const diff = difficulty.toLowerCase();
  // console.log(diff);
  return (
    <img src={`../../public/images/${diff}_questions.png`} alt="icon"></img>
  );
}

export default QuestionEmoji;
