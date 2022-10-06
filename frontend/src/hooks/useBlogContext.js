import { useContext } from "react";
import { BlogContext } from "../context/blogContext";

export const useBlogContext = () => {
    const context = useContext(BlogContext);
    if(!context){
        throw Error("useContext must be used inside the provider");
    }
    return context;
}