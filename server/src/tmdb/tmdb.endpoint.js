import tmdbConfig from "./tmdb.config.js";

const tmdbEndpoints = {
  mediaList: ({ mediaType, mediaCategory, page }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaCategory}`, page),
  mediaDetail: ({ mediaType, mediaId }) =>
    tmdbConfig.getUrl(`${mediaType}${mediaId}`),
  mediaGenres: ({ mediaType }) => tmdbConfig.getUrl(`genre/${mediaType}/list`),
  mediaCreadits: ({ mediaType, mediaId }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/credits`),
  mediaVideos: ({ mediaType, mediaId }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/videos`),
  mediaRecommend: ({ mediaType, mediaId }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/recomendations`),
  mediaImages: ({ mediaType, mediaId }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/images`),
  mediaSearch: ({ mediaType, query, page }) =>
    tmdbConfig.getUrl(`search/${mediaType}`, { query, page }),
  personalDetail: ({ personId }) => tmdbConfig.getUrl(`person/${personId}`),
  personMedias: ({ personId }) =>
    tmdbConfig.getUrl(`person/${personId}/combined_credits`),
};

export default tmdbEndpoints;
