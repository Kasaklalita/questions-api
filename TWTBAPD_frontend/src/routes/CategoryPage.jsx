import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import QuestionItem from "../components/UI/QuestionItem";

export default function CategoryPage() {
	const { category } = useParams();
	const [questions, setQuestions] = useState([]);
	const [title, setTitle] = useState("");

	useEffect(() => {
		const fetchQuestions = async () => {
			await axios
				.get("categories/" + category)
				.then((response) => {
					setQuestions(response.data.questions);
					setTitle(response.data.title);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		fetchQuestions();
	}, []);

	return (
		<div className="p-5">
			<div className="content">
				<h1 className="title">{title}</h1>
				{questions.length ? (
					<div className="content">
						{questions.map((question) => {
							return (
								<div className="box" key={question.id}>
									<h1 className="title">{question.question_text}</h1>
									<p>{question.answer}</p>
									<a href={question.link}>Подробнее</a>
								</div>
							)
						})}
					</div>
					// <ol>
					// 	{questions.map((question) => {
					// 		return (
					// 			<li key={question.id}>
					// 				<QuestionItem question={question} />
					// 			</li>
					// 		);
					// 	})}
					// </ol>
				) : (
					<p className="block">К сожалению, вопросов по этой теме пока нет</p>
				)}
			</div>
		</div>
	);
}
