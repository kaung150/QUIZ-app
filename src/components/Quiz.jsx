import { useContext } from "react";
import { QuizContext } from "../contexts/Quiz";
import Question from "./Question";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="text-center">
      {quizState.showResults && <div>Showing result</div>}
      {!quizState.showResults && (
        <>
          <div className=" bg-indigo-400 pt-6 py-2 text-white ">
            <span className="">Question</span>{" "}
            <span className="text-2xl font-semibold">
              {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
            </span>
          </div>

          <div className="mt-6 bg-indigo-50 pt-5">
            <Question />
            <button
              className="mt-3 bg-indigo-500 py-1 px-3 text-sm shadow-md rounded text-white"
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            >
              Next question
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
