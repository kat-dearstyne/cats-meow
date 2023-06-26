import React from "react";

const NewsItem = ({ date, content, link }) => {
  return (
      <div className="news-item">
        <h2>{date}</h2>
        <p>
          {content} <a href={link}>Read more here.</a>
        </p>
      </div>
  );
};

export default NewsItem;
