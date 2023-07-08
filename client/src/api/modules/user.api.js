import privateClient from "../client/private.client.js";
import publicClient from "../client/public.client.js";

const userEndpoints = {
  signin: "user/signin",
  signup: "user/sign",
  getinInfo: "user/info",
  passwordUpdate: "user/update-password",
};

const userApi = {
  signin: async ({ username, password }) => {
    try {
      const response = await publicClient.post(userEndpoints.signin, {
        username,
        password,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },

  signup: async ({ username, password, confirmPassword, displayName }) => {
    try {
      const response = await publicClient.post(userEndpoints.signup, {
        username,
        password,
        confirmPassword,
        displayName,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },

  getinInfo: async () => {
    try {
      const response = await privateClient.get(userEndpoints.getinInfo);

      return { response };
    } catch (err) {
      return { err };
    }
  },

  passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
    try {
      const response = await privateClient.put(userEndpoints.signup, {
        password,
        newPassword,
        confirmNewPassword,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default userApi;
