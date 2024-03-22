import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  category: "Trivialities",
  difficulty: "Easy",
  gameQuestions: [],
  correctAnswer: "",
  incorrectAnswers: [],
  questionDisplayed: 0,
  score: 0,
  scorePace: 100,
  seconds: 20,
  plusTenSecondsAvailable: true,
  doublePointsAvailable: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    updateCategory(state, action) {
      state.category = action.payload;
    },
    updateDifficulty(state, action) {
      state.difficulty = action.payload;
    },
    usePlusTenSeconds(state) {
      state.plusTenSecondsAvailable = false;
    },
    useeDoublePoints(state) {
      state.doublePointsAvailable = false;
      state.scorePace = 200;
    },
    updateCorrectAnswer(state, action) {
      state.correctAnswer = action.payload;
    },
    updateIncorrectAnswers(state, action) {
      state.incorrectAnswers = action.payload;
    },
    startTimer(state) {
      state.seconds = 20;
    },
    decreaseTimer(state) {
      state.seconds--;
    },
    increaseTimer(state) {
      state.seconds += 10;
      state.plusTenSecondsAvailable = false;
    },
    loadGameQuestions(state, action) {
      const gameQuestionsIndex = [];

      while (gameQuestionsIndex.length < 10) {
        const randomIndex = Math.floor(Math.random() * action.payload.length);
        if (!gameQuestionsIndex.includes(randomIndex)) {
          gameQuestionsIndex.push(randomIndex);
        }
      }

      const gameQuestions = [];

      for (let i = 0; i < gameQuestionsIndex.length; i++)
        gameQuestions[i] = action.payload[gameQuestionsIndex[i]];

      state.gameQuestions = gameQuestions;
    },
    checkAnswer(state, action) {
      if (action.payload === state.correctAnswer)
        state.score += state.scorePace;

      if (state.scorePace === 200) state.scorePace = 100;

      state.questionDisplayed++;
    },
    resetGame(state) {
      state.category = "Trivialities";
      state.difficulty = "Easy";
      state.gameQuestions = [];
      state.correctAnswer = "";
      state.incorrectAnswers = [];
      state.questionDisplayed = 0;
      state.score = 0;
      state.plusTenSecondsAvailable = true;
      state.doublePointsAvailable = true;
    },
  },
});

export const {
  updateName,
  updateDifficulty,
  updateCategory,
  updateNextQuestion,
  loadGameQuestions,
  checkAnswer,
  updateCorrectAnswer,
  startTimer,
  decreaseTimer,
  increaseTimer,
  usePlusTenSeconds,
  useeDoublePoints,
  updateIncorrectAnswers,
  resetGame,
} = userSlice.actions;
export default userSlice.reducer;
