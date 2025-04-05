import React, { useEffect, useState } from "react";

function TechUpdates() {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        setError(null);

        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        if (!apiKey) {
          throw new Error("API key is missing. Add it to .env file.");
        }

        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=${apiKey}`,
          {
            headers: {
              "User-Agent": "Mozilla/5.0",
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status !== "ok") {
          throw new Error(`API Error: ${data.message}`);
        }

        if (!data.articles || data.articles.length === 0) {
          throw new Error("No news found.");
        }

        setUpdates(data.articles.slice(0, 3)); // Show top 3 news articles
      } catch (err) {
        console.error("Error fetching tech updates:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <section
      id="tech-updates"
      className="py-16 bg-yellow-400"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Latest Tech Updates
        </h2>

        {error ? (
          <div className="text-center text-red-600 text-xl font-semibold">
            ⚠️ {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loading
              ? [1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md animate-pulse"
                  >
                    <div className="w-full h-40 bg-gray-300 rounded mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                  </div>
                ))
              : updates.map((news, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md"
                    data-aos="fade-up"
                  >
                    <img
                      src={
                        news.urlToImage ||
                        "https://source.unsplash.com/400x250/?technology,news"
                      }
                      alt="Tech News"
                      className="w-full h-40 object-cover rounded mb-4"
                      onError={(e) => {
                        e.target.src =
                          "https://source.unsplash.com/400x250/?technology,news";
                      }}
                    />
                    <h3 className="text-xl font-semibold">{news.title}</h3>
                    <p className="text-sm mt-2">
                      {news.description || "No description available."}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      🕒 {new Date(news.publishedAt).toLocaleString()}
                    </p>
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-4 text-blue-600 font-bold"
                    >
                      🔗 Read Full Article
                    </a>
                  </div>
                ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default TechUpdates;
