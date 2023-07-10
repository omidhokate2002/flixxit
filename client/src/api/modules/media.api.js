import privateClient from "../client/private.client.js";
import publicClient from "../client/public.client.js";

const mediaEndpoints = {
  list: ({ mediaType, mediaCategory, page }) =>
    `${mediaType}/${mediaCategory}?page=${page}`,
  delete: ({ mediaType, mediaId }) => `${mediaType}/fr${mediaId}`,
  search: ({ mediaType, query, page }) =>
    `${mediaType}/search?query=${query}&page=${page}`,
};

const mediaApi = {
  getList: async ({ mediaType, mediaCategory, page }) => {
    try {
      const response = await publicClient.get(
        mediaEndpoints.list({ mediaType, mediaCategory, page })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
  getdetail: async ({ mediaType, mediaId }) => {
    try {
      const response = await privateClient.get(
        mediaEndpoints.detail({ mediaType, mediaId })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
  search: async ({ mediaType, query, page }) => {
    try {
      const response = await publicClient.get(
        mediaEndpoints.search({ mediaType, query, page })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default mediaApi;
