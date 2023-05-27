import { useContext } from "react";
import { QuizContext } from "../contexts/Quiz";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  return (
    <div className="bg-indigo-400 py-2 text-white font-semibold">
      <div className="">{currentQuestion.question}</div>
    </div>
  );
};

export default Question;
