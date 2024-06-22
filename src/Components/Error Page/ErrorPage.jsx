import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    
    const error = useRouteError();
    return (
        <div>
            <h1>404 Not Found</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>go back</p>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;