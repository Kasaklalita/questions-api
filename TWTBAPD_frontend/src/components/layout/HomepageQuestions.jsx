import React, { useEffect, useState } from "react";
import axios from "axios";
import QuestionsCategory from "../UI/QuestionsCategory";

const HomepageQuestions = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAllCategories = async () => {
      await axios
        .get("categories/")
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchAllCategories();
  }, []);

  return (
    <div className="content">
      {categories.map((category) => {
        return (
          <QuestionsCategory
            title={category.name}
            subtitle={category.description}
            slug={category.slug}
            key={category.id}
          />
        );
      })}
    </div>
  );
};

export default HomepageQuestions;
