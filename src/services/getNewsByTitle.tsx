import axios from "axios";
import { useQuery } from "react-query";
import { IArticle, INews } from "../utils/interface";

const getNewsByTitle = async (search: string | null) => {
  const link = `https://newsapi.org/v2/everything`;
  try {
    const resp = await axios.get<INews<IArticle>>(link, {
      params: {
        apiKey: import.meta.env.VITE_APP_MY_API_KEY,
        qInTitle: search,
      },
    });
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

const useGetNewsByTitleQuery = (search: string | null) => {
  return useQuery(["news", search], () => getNewsByTitle(search));
};

export default useGetNewsByTitleQuery;
