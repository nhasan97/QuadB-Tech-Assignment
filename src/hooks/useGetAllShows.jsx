import { useEffect, useState } from "react";

const useGetAllShows = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      });
  }, []);

  return [loading, shows];
};

export default useGetAllShows;
