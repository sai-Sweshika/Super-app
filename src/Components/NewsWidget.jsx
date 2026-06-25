import { useEffect, useState } from "react";
import axios from "axios";

function NewsWidget() {
  const [articles, setArticles] = useState([]);
  const [index, setIndex] = useState(0);

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${API_KEY}`
        );

        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (articles.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % articles.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [articles]);

  if (articles.length === 0) {
    return (
      <div className="bg-[#111827] rounded-2xl p-6 h-full">
        <h2 className="text-2xl font-bold text-red-400 mb-4">
          Latest News
        </h2>

        <p>Loading latest news...</p>
      </div>
    );
  }

  const news = articles[index];

  return (
    <div className="bg-[#111827] rounded-2xl overflow-hidden shadow-lg">

      <img
        src={
          news.urlToImage ||
          "https://via.placeholder.com/600x300?text=News"
        }
        alt="news"
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold mb-3">
          {news.title}
        </h2>

        <p className="text-gray-300 text-sm mb-3 line-clamp-3">
          {news.description}
        </p>

        <div className="flex justify-between text-gray-400 text-sm">

          <span>{news.source.name}</span>

          <span>
            {new Date(news.publishedAt).toLocaleDateString()}
          </span>

        </div>

      </div>

    </div>
  );
}

export default NewsWidget;