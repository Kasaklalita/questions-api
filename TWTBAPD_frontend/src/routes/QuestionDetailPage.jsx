import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function QuestionDetailPage() {
	const [question, setQuestion] = useState({});
	const { category, question_id } = useParams();
	useEffect(() => {
		axios
			.get("get-question-detail", {
				params: {
					question_id: question_id,
				},
			})
			.then((response) => {
				setQuestion(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div className="box content">
			<h2>
				{question.question_text}
			</h2>
      {question.answer ? <p>{question.answer}</p> : <p>К сожалению, ответ на этот вопрос пока что не добавлен!</p> }
      
		</div>
	);
}
