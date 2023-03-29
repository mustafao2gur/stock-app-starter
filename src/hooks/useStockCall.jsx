import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {
  const { axiosWithToken } = useAxios();
//!---------gel DAta--------------------
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
        toastSuccessNotify(`${url} successfuly deleted`);
        getStockData(url);
      } catch (error) {
        console.log(error);
        dispatch(fetchFail());
        toastErrorNotify(`${url} can not be deleted`);
      }
    };
//!--------------post-----------------
        const postStockData = async (url, info) => {
          dispatch(fetchStart());

          try {
            await axiosWithToken.post(`stock/${url}/`, info);
            toastSuccessNotify(`${url} successfuly deleted`);
            getStockData(url);
          } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            toastErrorNotify(`${url} can not be deleted`);
          }
        };

//!-------------put-----------------------  
 const putStockData = async (url, info) => {
   dispatch(fetchStart());

   try {
     await axiosWithToken.put(`stock/${url}/${info.id}`, info);
     toastSuccessNotify(`${url} successfuly deleted`);
     getStockData(url);
   } catch (error) {
     console.log(error);
     dispatch(fetchFail());
     toastErrorNotify(`${url} can not be updated`);
   }
 };     

   return { getStockData, deleteStockData, postStockData, putStockData };
};
