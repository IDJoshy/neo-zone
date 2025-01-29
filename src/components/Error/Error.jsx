import { Link } from "react-router-dom";
import "./_error.scss";

const ErrorHandler = ({ error, className = ""}) => 
{
    const errorMessage = error?.toString() || "Something went wrong";

    return (
        <div className={`container error ${className}`}>
            <Link to="/" className="error__button error__button--back">{"< "} Go back</Link>
            <h2 className="error__text error__text--title">{"> "} Ups there was an error 😥</h2>
            <p className="error__text error__text--error">{errorMessage}</p>
        </div>
    )
}

export default ErrorHandler