import { Link } from "react-router-dom";
import "./_error.scss";

const ErrorHandler = ({ error }) => 
{
    return (
        <div className="error">
            <Link to="/" className="error__button error__button--back">{"< "} Go back</Link>
            <h2 className="error__text error__text--title">{"> "} Ups there was an error 😥</h2>
            <p className="error__text error__text--error">{error}</p>
        </div>
    )
}

export default ErrorHandler