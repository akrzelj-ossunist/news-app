import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";

const PrintLatestArticle: React.FC<{
  latestNewsData: any;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
}> = ({ latestNewsData, hasNextPage, fetchNextPage }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});

  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage) fetchNextPage();
  }, [entry?.isIntersecting]);

  return (
    <>
      {latestNewsData.map((article: any, index: any) => {
        return (
          <div
            key={index}
            className="latest-article"
            style={{ flexDirection: "column" }}
            ref={latestNewsData.length - 1 === index ? ref : null}
          >
            <label>
              {article.publishedAt.substring(
                article.publishedAt.indexOf("T") + 1,
                article.publishedAt.indexOf("T") + 6
              )}
            </label>
            <p>{article.title}</p>
          </div>
        );
      })}
    </>
  );
};

export default PrintLatestArticle;
