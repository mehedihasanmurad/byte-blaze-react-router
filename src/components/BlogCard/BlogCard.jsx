import React from 'react';
import { Link } from 'react-router';

const BlogCard = ({ blog }) => {
    const { id, social_image, title, description, published_at } = blog;
    return (
        <Link to={`/blog/${id}`} rel="noopener noreferrer" className="max-w-sm transition delay-150 duration-300 ease-in-out  hover:scale-105 hover:border-secondary border-opacity-30 mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 border-2 border-primary">
            <img role="presentation" className="object-cover w-full rounded-2xl h-52 dark:bg-gray-500 p-3" src={social_image} />
            <div className="p-3 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default BlogCard;