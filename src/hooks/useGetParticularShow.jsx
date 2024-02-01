import useGetAllShows from "./useGetAllShows";

const useGetParticularShow = (id) => {
  const [loading, shows] = useGetAllShows();

  let matchedShow;
  if (!loading) {
    matchedShow = shows.find((show) => show.show.id === parseInt(id));
  }

  return [loading, matchedShow];
};

export default useGetParticularShow;
