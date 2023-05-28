const Answer = ({
  answerText,
  index,
  onselectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;

  const correctAnswerClass = isCorrectAnswer ? "bg-green-500" : "";

  const wrongAnswerClass = isWrongAnswer ? "bg-red-500" : "";

  return (
    <button
      className="flex justify-start items-center w-full  gap-3 bg-indigo-100 p-3 border-b border-indigo-300"
      disabled={currentAnswer ? true : false}
      onClick={() => onselectAnswer(answerText)}
    >
      <div
        className={`text-4xl w-[50px] bg-indigo-500 text-white font-bold pb-1 disabled ${correctAnswerClass} ${wrongAnswerClass} $`}
      >
        {letterMapping[index]}
      </div>
      <div className="text-left text-lg">{answerText}</div>
    </button>
  );
};

export default Answer;
