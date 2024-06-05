export default function getMovieTitle(movie) {
  let name = ''
  let originalName = ''
  if (movie.name) {
    name = movie.name
    if (movie.name !== movie.original_name) {
      originalName = movie.original_name
    }
  } else {
    name = movie.title
    if (movie.title !== movie.original_title) {
      originalName = movie.original_title
    }
  }
  return originalName ? `${name} (${originalName})` : name
}
