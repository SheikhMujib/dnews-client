import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dnews-server.vercel.app/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h3>All Categories</h3>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
