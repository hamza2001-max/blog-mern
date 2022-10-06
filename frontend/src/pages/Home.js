import { useQuery } from "@tanstack/react-query";
import Axios from 'axios';
import { BlogComponent } from "../components/BlogComponent";
import { useBlogContext } from "../hooks/useBlogContext";
// import {  useEffect } from "react";
// const { state, dispatch } = useBlogContext();
export const Home = () => {
  const {blog, dispatch} = useBlogContext();
  const {data} = useQuery(["blog"], async () => {
    const response = await Axios.get("/api/blogs");
    dispatch({type:'GET_ALL_BLOGS', payload: response.data})
    return response.data;
  });

  
  // dispatch({ type: 'GET_ALL_BLOGS', payload: response });
  // const id = data?._id;
  // console.log(id);
  return (
    <div className="blogBlock-container">
      {data ? (
        blog.map((blo) => (
          <BlogComponent key={blo._id} blog={blo}/>
        ))
      ) : null}
    </div>
  )
}

