import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();
  //!---------getStockData--------------------
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  //!---------------delete---------
  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);

      getStockData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  //!--------------post-----------------
  const postStockData = async (url, info) => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.post(`stock/${url}/`, info);

      getStockData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  //!-------------put-----------------------
  const putStockData = async (url, info) => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.put(`stock/${url}/${info.id}`, info);

      getStockData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return { getStockData, deleteStockData, postStockData, putStockData };
};
export default useStockCall;