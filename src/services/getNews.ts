import axios from "axios"
import { useQuery } from "react-query"
import { IArticle, INews } from "../utils/interface"

const getNews = async (category: string, perPage?: number) => {
    const link = `https://newsapi.org/v2/top-headlines`
    try {
        const resp = await axios.get<INews<IArticle>>(link,{
            params: {
                category: category,
                country: "us",
                pageSize: perPage || 35,
                apiKey: import.meta.env.VITE_APP_MY_API_KEY,
            }
        })
        return resp.data
    } catch (error) {
        console.error(error)
    }
}

const useGetNewsQuery = (category: string, perPage?: number) => {
    return useQuery(["news", category], () => getNews(category, perPage))
}

export default useGetNewsQuery