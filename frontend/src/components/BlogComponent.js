import formatDistanceNow from 'date-fns/formatDistanceToNow';
import { useBlogContext } from "../hooks/useBlogContext";
import { Link } from "react-router-dom";

export const BlogComponent = ({ blog }) => {
    const { dispatch } = useBlogContext();
    const handleDelete = async () => {
        const response = await fetch("/api/blogs/" + blog._id, { method: 'DELETE' });
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: 'DELETE_BLOG', payload: json });
        }
        return json;
    }

    return (
        <div>
            <div className="blogBlock">
                <Link to={`./blogdetail/${blog._id}`}>
                    <h1 className="title">{blog.title}</h1>
                    <h3 className="description">{blog.description}</h3>
                    <h3 className="timeStamp">{formatDistanceNow(new Date(blog.createdAt), { addSuffix: true })}</h3>
                </Link>
                <button onClick={handleDelete} className="deleteBtn">Delete</button>
            </div>
        </div>
    )
}
