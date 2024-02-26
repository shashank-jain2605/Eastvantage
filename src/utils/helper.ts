// fetch user

import axios from "axios";

export const fetchUser = async () => {
  const response = await axios.get("https://randomuser.me/api");
  return response.data;
};
