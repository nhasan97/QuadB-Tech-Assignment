import { useEffect, useState } from "react";
import "./Home.css";
import ShowCard from "../../components/ShowCard/ShowCard";

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
      });
  }, []);

  return (
    <div className="home-container">
      <div>
        <h1 className="title">All Shows</h1>
      </div>

      <div className="show-card-container">
        {shows.map((show) => (
          <ShowCard key={show.show.id} show={show.show}></ShowCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
