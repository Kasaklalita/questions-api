import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function QuestionDetailPage() {
	const [question, setQuestion] = useState({});
	const { category, question_id } = useParams();
	useEffect(() => {
		axios
			.get("questions/" + question_id)
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
			{question.answer ? <div className="content">
				<p>{question.answer}</p>
				{question.link ? <a href={question.link} target="blank">Дополнительная информация</a> : <></>}

			</div> : <p>К сожалению, ответ на этот вопрос пока что не добавлен!</p>}
			{/* <div className="is-flex is-justify-content-space-between">
				<Link className="button" to={"/questions/" + (question.id + 1).toString()}>Предыдущий ворпрос</Link>
				<Link className="button" to={"/questions/" + (question.id + 1).toString()}>Следующий ворпрос</Link>
			</div> */}
		</div>

	);
}
