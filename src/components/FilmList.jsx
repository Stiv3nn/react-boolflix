import FilmCard from "./FilmCard";

function FilmList({ movies, imageBaseUrl }) {
  return (
    <div className="film-list">
      {movies.map((movie) => (
        <FilmCard key={movie.id} movie={movie} imageBaseUrl={imageBaseUrl} />
      ))}
    </div>
  );
}

export default FilmList;
