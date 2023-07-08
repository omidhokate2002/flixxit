// const baseUrl = process.env.TMDB_BASE_URL;
// const key = process.env.TMDB_KEY;

// const getUrl = (endpoint, params) => {
//   const qs = new URLSearchParams(params);
//   return `${baseUrl}${endpoint}?api_key=${key}&${qs} `;
// };

// export default { getUrl };

const baseUrl = process.env.TMDB_BASE_URL;
const key = process.env.TMDB_KEY;

const getUrl = (endpoint, params) => {
  const qs = new URLSearchParams(params);
  qs.append("api_key", key);
  return `${baseUrl}${endpoint}?${qs.toString()}`;
};

export default { getUrl };
