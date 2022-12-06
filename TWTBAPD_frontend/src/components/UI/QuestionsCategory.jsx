import React, { useEffect, useState } from "react";
import axios from "axios";

const QuestionsCategory = ({ title, subtitle, slug }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      await axios
        .get("get-questions-by-category/", {
          params: { category_slug: slug },
        })
        .then((response) => {
          setQuestions(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchQuestions();
  }, []);

  return (
    <div className="content">
      <div className="box content">
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
        {questions.length > 0 ? (
          <ol>
            {questions.map((question) => {
              return (
                <li key={question.id}>
                  <a href={question.link}>{question["question_text"]}</a>
                </li>
              );
            })}
          </ol>
        ) : (
          <p className="block">К сожалению, вопросов по этой теме пока нет</p>
        )}
      </div>
    </div>
  );
};

export default QuestionsCategory;
