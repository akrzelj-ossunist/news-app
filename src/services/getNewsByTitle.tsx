import axios from "axios";
import { useQuery } from "react-query";

const getNewsByTitle = async (search: string | null) => {
  const link = `https://newsapi.org/v2/everything`;
  try {
    const resp = await axios.get(link, {
      params: {
        // apiKey: "314765f8b0484b149fe5db37c9bbe427",
        // apiKey: "8f1ce794e3d54f89a15d31141272d77d",
        apiKey: "22a65062de4c4bc88f35c9571d398138",
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
