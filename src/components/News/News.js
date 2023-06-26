import React from "react";
import NewsService from "../../services/NewsService.js";
import useService from "../useService.js";
import NewsItem from "./NewsItem.js";

const News = () => {
    // populate news array with data from service
    const news = useService(NewsService.getData);

    return (
        <div id="news">
            <h2>Latest News</h2>
            <div className="container">
                <div className="news-grid">
                    {news.map((article) => (
                        <NewsItem date={article.date} content={article.content} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
