import { Link } from "react-router-dom";
import "./ShowCard.css";
import { GrSchedulePlay } from "react-icons/gr";
import { FaLanguage } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import imageNotFound from "../../assets/image-not-found-scaled-1150x647.png";

const ShowCard = ({ show }) => {
  const { image, name, language, genres, schedule, status, rating } = show;
  return (
    <div className="show-card">
      <div className="show-card-image-container">
        {image?.medium ? (
          <img src={image?.medium} alt="" />
        ) : (
          <img src={imageNotFound} alt="" />
        )}
      </div>

      <div className="show-card-details-container">
        {name ? <h2>{name}</h2> : <h2>No name found</h2>}

        {genres.length > 0 ? (
          <div className="genre-container">
            {genres.map((genre) => (
              <p key={genre} className="badge">
                {genre}
              </p>
            ))}
          </div>
        ) : (
          ""
        )}

        {language ? (
          <p className="schedule-container">
            <FaLanguage /> | {language}
          </p>
        ) : (
          <p className="schedule-container">
            <FaLanguage /> | No language found
          </p>
        )}

        <div>
          {schedule?.time && schedule.days.length > 0 ? (
            <p className="schedule-container">
              <GrSchedulePlay></GrSchedulePlay> | <span>{schedule?.time} </span>
              {schedule.days.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </p>
          ) : (
            <p className="schedule-container">
              <GrSchedulePlay></GrSchedulePlay> | <span>No time found</span>
            </p>
          )}
        </div>

        {status ? <p>Status | {status}</p> : <p>Status | No status found</p>}

        <div className="schedule-container">
          <Rating style={{ maxWidth: 100 }} value={rating?.average} readOnly />
          <p>{rating?.average}</p>
        </div>

        <Link className="show-card-btn">Summery</Link>
      </div>
    </div>
  );
};

export default ShowCard;
