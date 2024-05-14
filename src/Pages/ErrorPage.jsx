import Lottie from "lottie-react";
import error from "../../public/error.json"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="container m-auto w-[40vw] my-20">
             <Lottie animationData={error} />
             <Link to='/'>
                <button className="btn btn-secondary">Back to home</button>
             </Link>
        </div>
    );
};

export default ErrorPage;