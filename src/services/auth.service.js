import axios from "axios";
import hashPassword from "../utils/hashPassword";

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_APP_SERVER_URL || "http://localhost:5005",
    });

    // Automatically set JWT token on the request headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  login = async (userData) => {
    try {
      console.log("trying to login", userData);
      const unhashedPassword = userData.password;
      const { email } = userData;
      console.log(email);
      const additionalInfo = await this.api.post("/auth/login/salt", {
        email,
      });
      console.log(
        "we are in auth services login and asked for salt from server",
        additionalInfo
      );
      const { salt } = additionalInfo.data;
      console.log("we are in auth services login and destructured salt", salt);
      const { password } = await hashPassword(unhashedPassword, salt);
      const requestBody = { ...userData, password };
      console.log("try to login...", requestBody);
      return this.api.post("/auth/login", requestBody);
    } catch (error) {
      console.log("oops.........");
      console.error(error);
    }

    // same as
    // return axios.post("http://localhost:5005/auth/login");
  };

  signup = async (userData) => {
    try {
      const unhashedPassword = userData.password;
      const { password, salt } = await hashPassword(unhashedPassword);
      const requestBody = { ...userData, password, salt };
      console.log("try to signup: ", requestBody);
      return this.api.post("/auth/signup", requestBody);
    } catch (error) {
      console.log("oooops.......");
      console.error(error);
    }
  };

  verify = () => {
    return this.api.get("/auth/verify");
    // same as
    // return axios.post("http://localhost:5005/auth/verify");
  };
}

// Create one instance (object) of the service
const authService = new AuthService();

export default authService;
