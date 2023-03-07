export interface INews<T>{
    status: string
    totalResults: number
    articles: Array<T>
}

export interface IArticle{
    source: { id: string | null, name: string}
    author: string | null,
    title: string,
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}