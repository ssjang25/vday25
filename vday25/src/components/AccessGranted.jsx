import "../styles/AccessGranted.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AccessGranted() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/story"); // Navigate after 20 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [navigate]);

  return (
    <div className="screen">
      <h1>ACCESS GRANTED</h1>
    </div>
  );
}

export default AccessGranted;
