import { Button } from "@/components/ui/button";
import { nextQuestion, preQuestion } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hooks";

export default function QuestionsController() {
  const dispatch = useAppDispatch();
  const hanldeNextQ = () => {
    dispatch(nextQuestion());
  };
  const hanldePreQ = () => {
    dispatch(preQuestion());
  };
  return (
    <div>
      <Button onClick={hanldePreQ}>previous</Button>
      <Button onClick={hanldeNextQ}>next</Button>
    </div>
  );
}
