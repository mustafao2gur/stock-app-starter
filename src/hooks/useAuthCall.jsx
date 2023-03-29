import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess, registerSuccess } from "../features/authSlice";

const useAuthCall = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
  const BASE_URL = "https://12151.fullstack.clarusway.com/";



  const login = async (userInfo) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
            navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }





  };
  
  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/register/`,
        userInfo
      );
      dispatch(registerSuccess(data));
            navigate("/stock");
    } catch (err) {
      dispatch(fetchFail());
    }
  };



  return { login, register };
};

export default useAuthCall;
