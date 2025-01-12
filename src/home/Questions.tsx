import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { setAnswer } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import QuestionsController from "./QuestionsController";

export default function Questions() {
  const dispatch = useAppDispatch();
  const { question, currentAnswerIndex } = useAppSelector(
    (state) => state.quizs
  );
  const currentQuestion = question[currentAnswerIndex];
  console.log(currentQuestion);

  const handleAnswer = (answer: string) => {
    dispatch(setAnswer({ answerIndex: currentAnswerIndex, answer }));
  };

  return (
    <div className="flex justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          <CardDescription>
            question {currentAnswerIndex + 1} of {question.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            {currentQuestion.options.map((option, index) => (
              <Button
                onClick={() => handleAnswer(option)}
                key={index}
                size={"lg"}
                className="mr-4"
              >
                {option}
              </Button>
            ))}
          </div>
          <QuestionsController />
        </CardContent>
      </Card>
    </div>
  );
}
