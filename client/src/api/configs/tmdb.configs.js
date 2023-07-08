const mediaType = {
  movie: "movie",
  tv: "tv",
};

const mediaCategory = {
  popular: "popular",
  top_rated: "top_rated",
};

const backdropPath = (imgEndpoints) =>
  `http://image.tmdb.org/t/p/originals${imgEndpoints}`;

const posterPath = (imgEndpoints) =>
  `http://image.tmdb.org/t/p/w500${imgEndpoints}`;

const youtubePath = (videoId) =>
  `http://www.youtube.com/embeded/${videoId}?controls=0`;

const tmdbConfigs = {
  mediaType,
  mediaCategory,
  backdropPath,
  posterPath,
  youtubePath,
};

export default tmdbConfigs;
