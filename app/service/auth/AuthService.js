import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const AuthService = {
  login: async (user) => {
    return await axios.post("/api/auth/common/login", user);
  },
  register: async (user) => {
    return await axios.post("/api/auth/common/register", user);
  },
  logout: async () => {
    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("username");
    await AsyncStorage.removeItem("avatar");
  },
};

export default AuthService;
