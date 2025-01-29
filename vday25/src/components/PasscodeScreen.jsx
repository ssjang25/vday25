import { useState } from "react";
import { Row, Container } from "react-bootstrap";
import "../styles/PasscodeScreen.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import error from "../assets/tryagain.png";

function PasscodeScreen() {
  // need state to track code
  const [input, setInput] = useState("");
  // logic to check if code is correct
  const correctCode = "021425";
  const navigate = useNavigate();

  const handleClick = (num) => {
    setInput((prevInput) => prevInput + num);
  };

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

  const checkInput = (num) => {
    if (num === correctCode) {
      navigate("/access-granted");
    } else {
      setInput("");
      showSwal();
    }
  };

  return (
    <>
      <Container className="numpad-container">
        <Container className="numpad">
          <Container className="numpad-title">
            <Row id="numpad-header">ENTER CODE</Row>
            <Row id="numpad-answer-box">
              <div id="numpad-answer">{input}</div>
            </Row>
          </Container>
          <Container className="numpad-numbers">
            <Row>
              <button
                id="numpad-key"
                type="button"
                className="col"
                onClick={() => handleClick("1")}
              >
                1
              </button>
              <button
                id="numpad-key"
                type="button"
                className="col"
                onClick={() => handleClick("2")}
              >
                2
              </button>
              <button
                id="numpad-key"
                type="button"
                className="col"
                onClick={() => handleClick("3")}
              >
                3
              </button>
            </Row>
            <Row>
              <button
                id="numpad-key"
                type="button"
                className="col"
                onClick={() => handleClick("4")}
              >
                4
              </button>
              <button
                id="numpad-key"
                type="button"
                className="col"
                onClick={() => handleClick("5")}
              >
                5
              </button>
              <button
                id="numpad-key"
                type="button"
                className="col"
                onClick={() => handleClick("6")}
              >
                6
              </button>
            </Row>
            <Row>
              <button
                id="numpad-key"
                type="button"
                className="col"
                onClick={() => handleClick("7")}
              >
                7
              </button>
              <button
                id="numpad-key"
                type="button"
                className="col"
                onClick={() => handleClick("8")}
              >
                8
              </button>
              <button
                id="numpad-key"
                type="button"
                className="col"
                onClick={() => handleClick("9")}
              >
                9
              </button>
            </Row>
            <Row>
              <button
                type="button"
                className="col"
                id="numpad-clear"
                onClick={() => setInput("")}
              >
                ✖️
              </button>
              <button
                type="button"
                className="col"
                id="numpad-key"
                onClick={() => handleClick("0")}
              >
                0
              </button>
              <button
                type="button"
                className="col"
                id="numpad-check"
                onClick={() => checkInput(input)}
              >
                ✔️
              </button>
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default PasscodeScreen;
