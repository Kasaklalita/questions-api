import React, { useEffect, useState } from "react";
import axios from "axios";

const HomepageQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchAllQuestions = async () => {
      await axios
        .get("http://127.0.0.1:8000/api/v1/get-all-questions/")
        .then((response) => {
          setQuestions(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchAllQuestions();
  }, []);

  return (
    <div className="content">
      <div className="box content">
        <h1>Общие вопросы по Python</h1>
        <p>В этой секции находятся общие вопросы об основах Python</p>
        <ol>
          {questions.map((question) => {
            return (
              <li key={question.id}>
                <a>{question["question_text"]}</a>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default HomepageQuestions;
