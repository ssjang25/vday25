import { Row, Container, Col } from "react-bootstrap";
import "../styles/QuizPage.css";
import { useAppContext } from "../App";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import error from "../assets/tryagain.png";

function QuizPage() {
  const navigate = useNavigate();
  const { quizIndex, setQuizIndex, setMode } = useAppContext();
  const questions = [
    {
      question: "Where did you and Sarah go on your first date?",
      answers: ["Golf On the Village Green", "Party City", "McDonalds"],
      correct: "A",
    },
    {
      question: "Jenny is the wife of which of Sarah's cousins?",
      answers: ["Danny", "Ayden", "Sammy"],
      correct: "C",
    },
    {
      question: "Which of the things you've baked is Sarah's favorite so far?",
      answers: ["Red Velvet Brownies", "Carrot Cake", "Strawberry Cheesecake"],
      correct: "A",
    },
    {
      question:
        "How many surveys did you and Sarah send to each other in the early dating stage?",
      answers: ["2", "3", "4"],
      correct: "B",
    },
    {
      question: "Will you be my Valentine?",
      answers: ["YES!", "Absolutely not.", "Can I think about it?"],
      correct: "A",
    },
  ];

  const showSwal = () => {
    withReactContent(Swal).fire({
      imageUrl: error,
      imageWidth: 200,
      imageHeight: 200,
      backdrop: `rgba(123,0,0,0.4)`,
      background: "#917b62",
      confirmButtonColor: "#ffa600",
    });
  };

  const checkAnswer = (e) => {
    if (e === questions[quizIndex].correct && quizIndex !== 4) {
      setQuizIndex((prev) => prev + 1);
      setMode("story");
      navigate("/story");
    } else if (e === questions[quizIndex].correct && quizIndex === 4) {
      navigate("/ending");
    } else {
      showSwal();
    }
  };

  return (
    <>
      <Container className="question-screen">
        <Container className="question-container">
          <Row className="question-box">
            <Col className="question-number">{quizIndex + 1}</Col>
            <Col className={`question question-${quizIndex}`}>
              <div className="question-text">
                {questions[quizIndex].question}
              </div>
            </Col>
          </Row>
          <Row className="answers">
            <Row className="answer-button-div">
              <button
                className="answer-button"
                id="A"
                onClick={(e) => checkAnswer(e.target.id)}
              >
                <div className="answer-letter">A</div>
                {questions[quizIndex].answers[0]}
              </button>
            </Row>
            <Row className="answer-button-div">
              <button
                className="answer-button"
                id="B"
                onClick={(e) => checkAnswer(e.target.id)}
              >
                <div className="answer-letter">B</div>
                {questions[quizIndex].answers[1]}
              </button>
            </Row>
            <Row className="answer-button-div">
              <button
                className="answer-button"
                id="C"
                onClick={(e) => checkAnswer(e.target.id)}
              >
                <div className="answer-letter">C</div>
                {questions[quizIndex].answers[2]}
              </button>
            </Row>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default QuizPage;
