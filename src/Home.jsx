import { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "../src/assets/css/home.css";

export default function Home({ q, search, changelanguage }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  const pageSize = 20;

  // Fetch news data
  const fetchData = useCallback(async () => {
    if (!search) return; // Avoid fetching empty search
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(
          search
        )}&sortBy=publishedAt&language=${changelanguage}&page=${page}&pageSize=${pageSize}&apiKey=9b7368df3131427889c3982c7a4a8ec3`
      );
      const result = await response.json();

      if (result.articles && result.articles.length > 0) {
        setData(prev => (page === 1 ? result.articles : [...prev, ...result.articles]));
        setTotalResults(result.totalResults);
      } else {
        setData([]);
        setTotalResults(0);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  }, [search, changelanguage, page]);

  // Reset data when search changes
  useEffect(() => {
    if (search) {
      setData([]);
      setPage(1);
      setTotalResults(0);
    }
  }, [search]);

  // Fetch data when dependencies change
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="w-100 pt-2">
        <h5 className="text-light pt-2 pb-2 text-center" style={{ background: "green" }}>
          {q} News Section
        </h5>
      </div>

      <div className="container-fluid">
        <InfiniteScroll
          dataLength={data.length}
          next={() => setPage(prev => prev + 1)}
          hasMore={data.length < totalResults}
          loader={<h4 className="text-light text-center">Loading...</h4>}
        >
          <div className="row">
            {data.length === 0 && !loading && (
              <p className="text-center text-light mt-3">No news found.</p>
            )}
            {data.map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3" key={index}>
                <div className="card cardh">
                  <img
                    src={item.urlToImage ?? "./assets/images/no-image.png"}
                    className="card-img-top"
                    alt={item.title || "news"}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      {new Date(item.publishedAt).toLocaleString()}
                    </p>
                    <p className="card-text">{item.description}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary w-100 text-light fs-5"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}