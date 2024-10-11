import React from 'react';
import icon1 from '/public/images/icons/icon_calendar.svg'


import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; // Import the renderer

import Link from 'next/link'
import Image from 'next/image';

const BlogSingle = (props:any) => {

    const BlogDetails = props.blog;

    return (
        <section className="blog_details_section section_space bg-light">
            <div className="container">
                <div className="details_item_image">
                    <Image src={"http://" + BlogDetails.fields.featuredImage.fields.file.url} alt="Techco - Blog" width={2580} height={1190} />
                </div>
                <div className="post_meta_wrap mb-4">
                    <ul className="category_btns_group unordered_list">
                        {BlogDetails?.fields.tags.tags.map((tag:any, index:any) => (
                            <li key={index}><Link href="">{tag}</Link></li>
                        ))}
                    </ul>
                    <ul className="post_meta unordered_list">
                        <li>
                            <Link href={'/blog'}>
                                <Image src={icon1} alt="Icon Calendar" /> {new Date(BlogDetails.fields.publishDate).toLocaleDateString()}
                            </Link>
                        </li>
                    </ul>
                </div>
                <h2 className="details_item_title">
                    {BlogDetails?.fields.title}
                </h2>
                <p>
                    {BlogDetails?.fields.shortDescription}
                </p>
                <hr className="mb-0" />
                <div className="section_space pb-0">
                    <div className="row">
                        <div className='col-md-12'>
                        {BlogDetails?.fields.content && documentToReactComponents(BlogDetails.fields.content)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
