import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/EndPage.css";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

function EndPage() {
  const { width, height } = useWindowSize();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Confetti width={width} height={height} />
      <Container className="end-container">
        <div className="end-title">
          YAY! YOU ARE OFFICIALLY MY VALENTINE! Thanks.
        </div>
        <div className="end-button">
          <button className="startover-button" onClick={handleClick}>
            Start Over
          </button>
        </div>
      </Container>
    </>
  );
}

export default EndPage;
