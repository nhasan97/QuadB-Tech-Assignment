import { useNavigate } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="error-container">
      <p className="error-text">Error status 404 | Page not found</p>
      <button className="book-ticket-btn" onClick={handleGoBack}>
        Go to Home
      </button>
    </div>
  );
};

export default Error;
