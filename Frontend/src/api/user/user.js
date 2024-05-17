import axios from "axios";
import { baseApiUrl } from "../../config";

export const signUp = async (payload) => {
  try {
    const response = await axios.post(`${baseApiUrl}/api/signup`, payload);
    if (response.status === 200) {
      console.log("Signup successful:", response.data);
    } else {
      console.error("Signup failed:", response.statusText);
    }
  } catch (error) {
    console.error("Signup failed:", error);
  }
};
