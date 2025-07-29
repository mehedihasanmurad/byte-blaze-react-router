import React from 'react';
import Markdown from 'react-markdown';
import { useLoaderData } from 'react-router';
import rehypeRaw from 'rehype-raw';

const Content = () => {
    const blog = useLoaderData();
    const { social_image, title, tags, body_html } = blog;
    console.log(blog)
    return (
        <div>
            <div rel="noopener noreferrer" className=" mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 border border-slate-200 rounded-lg">
                <img role="presentation" className="object-cover w-full rounded-2xl h-52 dark:bg-gray-500 p-3" src={social_image} />

                <div className="flex flex-wrap py-6 gap-2  dark:border-gray-600 p-2">
                    {
                        tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>)
                    }
                </div>
                <div className="p-3 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <Markdown rehypePlugins={[rehypeRaw]}>
                        {body_html}
                    </Markdown>
                </div>
            </div>
        </div>
    );
};

export default Content;