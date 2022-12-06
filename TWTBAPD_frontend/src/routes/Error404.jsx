import { useRouteError } from "react-router-dom";

export default function Error404() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page">
			<h1 className="title">Oops!</h1>
			<p className="subtitle">Sorry, an unexpected error has occurred.</p>
			<p className="block">
				The type of the error: <i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
