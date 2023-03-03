import LatestNews from "./LatestNews";
import { useLocation } from "react-router-dom";
import "../styles/news.scss";
import useGetNewsQuery from "../services/getNews";
import PrintNews from "./PrintNews";

const News: React.FC<{ searchValue: string }> = ({ searchValue: search }) => {
  const location = useLocation();
  const category = location.pathname;
  const { data: newsData, isLoading } = useGetNewsQuery(search, category);
  console.log(newsData);
  return (
    <>
      <h3>News</h3>
      <LatestNews />
      {isLoading ? <p>Loading...</p> : <PrintNews />}
    </>
  );
};

export default News;
