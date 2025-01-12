import { quizData } from "@/home/quizData";
import { createSlice } from "@reduxjs/toolkit";

interface TQuiz {
  question: typeof quizData;
  currentAnswerIndex: number;
  usersAnswer: (string | null)[];
  isComplete: false;
}

const initialState: TQuiz = {
  question: quizData,
  currentAnswerIndex: 0,
  usersAnswer: Array(quizData.length).fill(null),
  isComplete: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { answerIndex, answer } = action.payload;
      state.usersAnswer[answerIndex] = answer;
    },
    nextQuestion: (state) => {
      if (state.currentAnswerIndex < state.question.length - 1) {
        state.currentAnswerIndex += 1;
      }
    },
    preQuestion: (state) => {
      if (state.currentAnswerIndex > 0) {
        state.currentAnswerIndex -= 1;
      }
    },
  },
});

export const { setAnswer, nextQuestion, preQuestion } = quizSlice.actions;
export default quizSlice.reducer;
