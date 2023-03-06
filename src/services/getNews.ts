import axios from "axios"
import { useQuery } from "react-query"

const getNews = async (category: string) => {
    const link = `https://newsapi.org/v2/top-headlines`
    try {
        const resp = await axios.get(link,{
            params: {
                category: category.substring(1),
                country: "us",
                // apiKey: "314765f8b0484b149fe5db37c9bbe427",
                // apiKey: "8f1ce794e3d54f89a15d31141272d77d",
                apiKey: "22a65062de4c4bc88f35c9571d398138",
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