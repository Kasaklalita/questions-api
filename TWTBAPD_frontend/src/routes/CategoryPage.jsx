import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import QuestionItem from "../components/UI/QuestionItem";

export default function CategoryPage() {
	const { category } = useParams();
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		const fetchQuestions = async () => {
			await axios
				.get("get-questions-by-category/", {
					params: { category_slug: category },
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
		<div className="p-5">
			<div className="content">
				<h1 className="title">{category}</h1>
				{questions.length ? (
					<ol>
						{questions.map((question) => {
							return (
								<li key={question.id}>
									<QuestionItem question={question} />
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
}
