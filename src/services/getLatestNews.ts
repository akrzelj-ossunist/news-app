import axios from "axios"
import { useInfiniteQuery } from "react-query"

const getLatestNews = async (pageParam: number) => {
    const link = "https://newsapi.org/v2/everything"
    try {
        const resp = await axios.get(link,{
            params: {
                apiKey: "314765f8b0484b149fe5db37c9bbe427",
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