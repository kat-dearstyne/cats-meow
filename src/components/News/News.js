import React from "react";
import NewsService from "../../services/NewsService.js";
import useService from "../useService.js";
import NewsItem from "./NewsItem.js";

const News = () => {
    // sort the news by data from most recent to least
    const transformData = (response) => {
        return response.sort((a, b) => new Date(b.date) - new Date(a.date));
    };

    // populate news array with data from service
    const news = useService(NewsService, transformData);

    return (
        <div id="news">
            <h2>Latest News</h2>
            <div className="container">
                <div className="news-grid">
                    {news.map((article, index) => (
                        <NewsItem key={index} date={article.date} content={article.content} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;


