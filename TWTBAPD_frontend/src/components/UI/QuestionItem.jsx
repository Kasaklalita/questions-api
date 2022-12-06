import { Link } from "react-router-dom";

export default function QuestionItem({question}) {
	return <Link to={`/questions/${question.id}`}>{question.question_text}</Link>;
}
