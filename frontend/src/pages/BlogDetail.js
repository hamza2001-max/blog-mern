import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Axios from 'axios';

export const BlogDetail = () => {
  const { id } = useParams();

  const { data } = useQuery(["singleblog"], async () => {
    const res = await Axios.get(`/api/blogs/${id}`);
    return res.data;
  });

  return (
    <div>
      {
        data ? (
          <div>
            <h1>{data?.title}</h1>
            <h3>{data?.description}</h3>
            <h3>{data?.blogBody}</h3>
          </div>
        ) : null
      }
    </div>
  )
}
