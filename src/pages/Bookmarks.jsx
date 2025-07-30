import React, { useEffect, useState } from 'react';
import { deleteBlogs, getBlogs } from '../utils';
import BlogCard from '../components/BlogCard/BlogCard';
import EmptyBookmark from '../components/EmptyBookmark/EmptyBookmark';

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }, []);
    const handleDelete = id => {
        deleteBlogs(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }
    if (blogs.length < 1) return <EmptyBookmark
        message="No Bookmarks Available!"
        address={"/blogs"}
        label={"Browse Blogs"}
    ></EmptyBookmark>
    return (
        <div className="max-w-7xl mx-auto grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map(blog => <BlogCard handleDelete={handleDelete} deletable = {true} key={blog.id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default Bookmarks;