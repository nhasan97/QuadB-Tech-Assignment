import { Link } from "react-router-dom";
import "./ShowCard.css";

const ShowCard = ({ show }) => {
  const { image, name, type, language, genres, schedule, status, rating } =
    show;
  return (
    <div className="show-card">
      <div className="show-card-image-container">
        <img src={image?.medium} alt="" />
      </div>
      <div className="show-card-details-container">
        <h2>{name}</h2>

        <p>Type | {type}</p>

        <p>Language | {language}</p>

        <div className="genre-container">
          {genres.map((genre) => (
            <p key={genre}>{genre}</p>
          ))}
        </div>

        <div className="schedule-container">
          <p>
            Schedule | <span>{schedule?.time} </span>
            {schedule.days.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </p>
        </div>

        <p>{status}</p>

        <p>{rating?.average}</p>
        <Link className="show-card-btn">Summery</Link>
      </div>
    </div>
  );
};

export default ShowCard;
