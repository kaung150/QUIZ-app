import { useContext } from "react";
import { QuizContext } from "../contexts/Quiz";
import Answer from "./Answer";
import { current } from "@reduxjs/toolkit";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  return (
    <div>
      <div className="bg-indigo-400 py-[40px] text-white font-semibold h-[130px] ">
        <p className="text-2xl px-3">{currentQuestion.question}</p>
      </div>

      <div className="mt-10">
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            key={index}
            index={index}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            onselectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
