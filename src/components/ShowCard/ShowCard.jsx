import { Link } from "react-router-dom";
import "./ShowCard.css";
import { GrSchedulePlay } from "react-icons/gr";
import { FaLanguage } from "react-icons/fa";

const ShowCard = ({ show }) => {
  const { image, name, language, genres, schedule, status, rating } = show;
  return (
    <div className="show-card">
      <div className="show-card-image-container">
        <img src={image?.medium} alt="" />
      </div>
      <div className="show-card-details-container">
        <h2>{name}</h2>

        <div className="genre-container">
          {genres.map((genre) => (
            <p key={genre}>{genre}</p>
          ))}
        </div>

        <p className="schedule-container">
          <FaLanguage /> | {language}
        </p>

        <div>
          <p className="schedule-container">
            <GrSchedulePlay></GrSchedulePlay> | <span>{schedule?.time} </span>
            {schedule.days.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </p>
        </div>

        <p>Status | {status}</p>

        <p>{rating?.average}</p>
        <Link className="show-card-btn">Summery</Link>
      </div>
    </div>
  );
};

export default ShowCard;
