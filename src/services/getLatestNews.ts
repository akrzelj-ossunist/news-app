import axios from "axios"
import { useInfiniteQuery } from "react-query"
import { IArticle, INews } from "../utils/interface"

const getLatestNews = async (pageParam: number) => {
    const link = "https://newsapi.org/v2/everything"
    try {
        const resp = await axios.get<INews<IArticle>>(link,{
            params: {
                apiKey: import.meta.env.VITE_APP_MY_API_KEY,
                q: "a",
                page: pageParam,
                pageSize: 25,
                language: "en",
                sortBy: "publishedAt",
            }
        })
        return resp.data
    } catch (error) {
        console.error(error)
    }
}

const useGetLatestNewsQuery = () => {
    return useInfiniteQuery(["news"], ({ pageParam = 1 }) => getLatestNews(pageParam), {getNextPageParam: (lastPage, pages) => {
        const endPage = 4
        const nextPage = pages?.length + 1
        return nextPage <= endPage! ? nextPage : undefined
    }})
}

export default useGetLatestNewsQuery