import "./Home.css";
import ShowCard from "../../components/ShowCard/ShowCard";
import useGetAllShows from "../../hooks/useGetAllShows";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [loading, shows] = useGetAllShows();

  if (loading) {
    return <Loading></Loading>;
  }

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
