import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {id,body,title} = post;
    const handleGoBack = () =>{
        navigate(-1);
    }
    
    return (
        <div>
            <h2>Post Details: {id}</h2>
            <p>title: {title}</p>
            <p>body: {body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;