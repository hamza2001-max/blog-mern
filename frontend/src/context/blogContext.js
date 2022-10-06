import { createContext, useReducer } from "react";

export const BlogContext = createContext();
export const blogReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_BLOGS':
            return {
                blog: action.payload
            }
        case 'CREATE_BLOG':
            return {
                blog: [action.payload, ...state.blog]
            }
            case 'DELETE_BLOG':
                return{
                    blog: state.blog.filter((b) => 
                        b._id !== action.payload._id
                    )
                }
        default:
            return state;
    }
}

export const BlogContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(blogReducer, { blog: null });
    return (
        <BlogContext.Provider value={{...state, dispatch}}>
            {children}
        </BlogContext.Provider>
    )
}