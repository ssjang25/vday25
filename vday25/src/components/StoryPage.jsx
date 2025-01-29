import { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { useAppContext } from "../App";
import { useNavigate } from "react-router-dom";
import "../styles/StoryPage.css";

function StoryPage() {
  const navigate = useNavigate();
  const { storyIndex, setStoryIndex, setMode } = useAppContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = [
    [
      "Ah, you must be Jon! I've heard a lot about you. Welcome to home base.",
      "You seem nice, but I have my doubts. I have to test you to make sure you're the real Jon.",
      "If you're interested in playing, click continue!",
    ],
    [
      "Congrats on making it to first base! Question 1 was supposed to be easy.",
      "We're still not convinced you're the real Jon though... So don't get too excited.",
      "Continue to see if you can make it to second base!",
    ],
    ["MEEEEEEEOOOOOOORRRRRRRWWWW *fat person noises*", "MEOW MEOW MEOW meow meow MEOWWW"],
    [
      "Holy mackerel! You're almost there!! Unbelievable... You must be the real Jon..",
      "She did tell me you're a baseball superstar like me!",
    ],
    [
      "HOME RUN!!! GOOD JOB BUDDY! I believed in you this entire time.",
      "OK Jon, before you go, Sarah has one last question for you...",
    ],
  ];

  useEffect(() => {
    if (currentIndex < messages[storyIndex].length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 9000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const handleClick = () => {
    setMode("quiz");
    navigate("/quiz");
    setStoryIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <Container className={`story-container field-${storyIndex}`}>
      <Row className="dialogue-box">
        <Col></Col>
        <Col>
          <div className="dialogue-text">
            {
              <Typewriter
                key={currentIndex}
                options={{
                  cursor: " ",
                  delay: 60,
                  deleteSpeed: 400,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(messages[storyIndex][currentIndex])
                    .start();
                }}
              />
            }
          </div>
          <div className="dialogue-button">
            {currentIndex === messages[storyIndex].length - 1 && (
              <button onClick={() => handleClick()}>Continue</button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default StoryPage;
