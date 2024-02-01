import { Link, useParams } from "react-router-dom";
import useGetParticularShow from "../../hooks/useGetParticularShow";
import Loading from "../../components/Loading/Loading";
import "./ShowSummery.css";
import imageNotFound from "../../assets/image-not-found-scaled-1150x647.png";

const ShowSummery = () => {
  const showId = useParams();
  console.log(showId.id);
  const [loading, matchedShow] = useGetParticularShow(showId.id);

  if (loading) {
    return <Loading></Loading>;
  } else {
    return (
      <div className="show-summery-container">
        <div className="show-summery-image-container">
          {matchedShow?.show?.image?.original ? (
            <img src={matchedShow?.show?.image?.original} alt="" />
          ) : (
            <img src={imageNotFound} alt="" />
          )}
        </div>
        <div className="summery-holder">
          <h1>{matchedShow?.show?.name}</h1>
          <p className="summery">Summery | {matchedShow?.show?.summary}</p>
          <Link className="book-ticket-btn" to={`/show-summery`}>
            Book Ticket
          </Link>
        </div>
      </div>
    );
  }
};

export default ShowSummery;
