import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";

const Categories = () => {
  const categoriesNews = useLoaderData();
  return (
    <div>
      <h3>This is Categories {categoriesNews.length}</h3>
      {categoriesNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Categories;
