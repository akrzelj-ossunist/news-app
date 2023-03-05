import axios from "axios"
import { useQuery } from "react-query"

const getNews = async (search: string, category: string) => {
    const link = `https://newsapi.org/v2/top-headlines`
    try {
        const resp = await axios.get(link,{
            params: {
                category: category.substring(1),
                country: "us",
                apiKey: "314765f8b0484b149fe5db37c9bbe427",
            }
        })
        return resp.data
    } catch (error) {
        console.error(error)
    }
}

const useGetNewsQuery = (search: string, category: string) => {
    return useQuery(["news", search, category], () => getNews(search, category))
}

export default useGetNewsQuery