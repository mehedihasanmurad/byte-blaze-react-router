import { createBrowserRouter } from "react-router"
import MainLayout from "../Layout/MainLayout"
import Home from "../pages/Home"
import Blogs from "../pages/Blogs"
import BlogDetails from "../pages/BlogDetails"
import Bookmarks from "../pages/Bookmarks"
import Content from "../components/Content/Content"
import Author from "../components/Author/Author"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
                loader: () => fetch("https://dev.to/api/articles/?per_page=20&top=7"),
            },
            {
                path: "/blog/:id",
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                children: [
                    {
                        index: true,
                        element: <Content></Content>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    },
                    {
                        path: "author",
                        element: <Author></Author>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    },
                ],
            },
            {
                path: "/bookmarks",
                element: <Bookmarks></Bookmarks>
            }
        ]
    },

])