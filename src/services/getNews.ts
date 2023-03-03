import axios from "axios"
import { useQuery } from "react-query"

const pickApiLink = (search: string, category: string): string => {
    const key = "5oNggdxy4zGmd10FYPsGfEAl59uWAWpD"
    if(search === "" || search === undefined){
        if(category === "/")
            return `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`
        return `https://api.nytimes.com/svc/topstories/v2${category}.json?api-key=${key}`
    }
    if(category === "/")
        return `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&fq=home&api-key=${key}`
    return `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search.substring(1)}&fq=home&api-key=${key}`
}

const getNews = async (search: string, category: string) => {
    const link = pickApiLink(search, category)
    try {
        const resp = await axios.get(link)
        return resp.data
    } catch (error) {
        console.error(error)
    }
}

const useGetNewsQuery = (search: string, category: string) => {
    return useQuery(["news", search, category], () => getNews(search, category))
}

export default useGetNewsQuery