import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <Link to={slug}><h1 className="title">{title}</h1></Link>
        <p className="subtitle">{subtitle}</p>
        {questions.length > 0 ? (
          <ol>
            {questions.map((question) => {
              return (
                <li key={question.id}>
                  <Link href={`general-questions/`}>{question["question_text"]}</Link>
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
