import "bootstrap/dist/css/bootstrap.min.css";
import PasscodeScreen from "./components/PasscodeScreen";
import AccessGranted from "./components/AccessGranted";
import QuizPage from "./components/QuizPage";
import StoryPage from "./components/StoryPage";
import EndPage from "./components/EndPage";
import Model from "./components/Model";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router";
import { createContext, useState, useContext } from "react";

export const AppContext = createContext();

function App() {
  const [mode, setMode] = useState("story");
  const [storyIndex, setStoryIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  return (
    <>
      <AppContext.Provider
        value={{
          mode,
          setMode,
          storyIndex,
          setStoryIndex,
          quizIndex,
          setQuizIndex,
          isAnswerCorrect,
          setIsAnswerCorrect,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Model />} />
            <Route path="/passcode-required" element={<PasscodeScreen />} />
            <Route path="/access-granted" element={<AccessGranted />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/ending" element={<EndPage />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;

export const useAppContext = () => useContext(AppContext);
