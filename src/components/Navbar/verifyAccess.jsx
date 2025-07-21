// utils/verifyAccess.js
import axios from "axios";

export const verifyAccess = async (module, subModule, permission) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/authenticate`, {
      params: { module, subModule, permission },
      withCredentials: true,
    });

    return res.data.valid === true;
  } catch (err) {
    console.error("verifyAccess error:", err);
    return false;
  }
};
