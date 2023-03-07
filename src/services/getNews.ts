import axios from "axios"
import { useQuery } from "react-query"
import { IArticle, INews } from "../utils/interface"

const getNews = async (category: string) => {
    const link = `https://newsapi.org/v2/top-headlines`
    try {
        const resp = await axios.get<INews<IArticle>>(link,{
            params: {
                category: category.substring(1),
                country: "us",
                apiKey: import.meta.env.VITE_APP_MY_API_KEY,
            }
        })
        return resp.data
    } catch (error) {
        console.error(error)
    }
}

const useGetNewsQuery = (category: string) => {
    return useQuery(["news", category], () => getNews(category))
}

export default useGetNewsQuery