import { useState } from "react";
import { useBlogContext } from "../hooks/useBlogContext";

export const BlogForm = () => {
  const {dispatch} = useBlogContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blogBody, setBlogbody] = useState("");
  const [error, setError] = useState(null);
  const [emptyField, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, description, blogBody };
    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
      console.log("error occured", emptyField);
    }

    if (response.ok) {
      setTitle("");
      setDescription("");
      setBlogbody("");
      setEmptyFields([]);
      setError(null);
      console.log('new Workout added', json);
      dispatch({ type: 'CREATE_BLOG', payload: json});
    }
  }

  return (
    <div className="form-container">
      {error ? <div>
        <h1>{error}</h1>
      </div>:null}
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="title"><h2>Title</h2></label>
          <input type="text" id="title"
            onChange={(e) => setTitle(e.target.value)} placeholder="Title..."
            value={title} className={emptyField?.includes('title') ? "empty-field" : ""} />
        </div>
        <div className="input-block">
          <label htmlFor="description"><h2>Description</h2></label>
          <input type="text" id="description"
            onChange={(e) => setDescription(e.target.value)} placeholder="Description..."
            value={description} className={emptyField?.includes('description') ? "empty-field" : ""} />
        </div>
        <div className="input-block">
          <label htmlFor="blog-body"><h2>Blog Body</h2></label>
          <textarea type="text" id="blog-body" rows="8" cols="50" placeholder="Text Area..."
            onChange={(e) => setBlogbody(e.target.value)} value={blogBody}
            className={emptyField?.includes('blogBody') ? "empty-field" : ""} />
        </div>
        {emptyField? <div>
          {emptyField}
        </div>: null}
        <button>Publish</button>
      </form>
    </div>
  )
}
