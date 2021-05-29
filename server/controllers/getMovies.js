import Movies from "../database/models/movies";

export async function getMovies(req, res) {
  const movies = Movies.findAll({});
  res.json(movies);
}
