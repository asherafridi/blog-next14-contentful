import React from 'react';
import Link from 'next/link';
import Bg from '/public/images/shapes/bg_pattern_1.svg';
import icon1 from '@/public/images/icons/icon_calendar.svg';
import Image from 'next/image';
import client from '@/lib/contentfulClient';

export default async function BlogSection() {
    // Fetching Contentful data directly in the component
    let blogPosts:any[] = [];

    try {const res = await client.getEntries({
        content_type: 'blog', // Replace with the actual field to sort by
        limit: 3,
    });
        blogPosts = res.items;
        console.log('Contentful Data:', blogPosts); // Log to validate data fetching
    } catch (error) {
        console.error('Error fetching Contentful data:', error);
    }

    return (
        <section className="blog_section section_space" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">


                <div className="heading_block text-center">
                    <div className="heading_focus_text">
                        <span className="badge bg-secondary text-white">Blog</span>
                        Updates
                    </div>
                    <h2 className="heading_text mb-0">
                        Latest Articles Posts
                    </h2>
                </div>

                <div className="row">
                    {blogPosts.slice(0, 3).map((post, index) => (
                        <div className="col-lg-4" key={index}>
                            <div className="blog_post_block">
                                <div className="blog_post_image">
                                    <Link href={`/blogs/${post.fields.slug}`} className="image_wrap">
                                        <Image
                                            src={`https:${post.fields.featuredImage.fields.file.url}`} // Adjust image URL from Contentful
                                            alt={post.fields.title}
                                            width={400}
                                            height={250}
                                        />
                                    </Link>
                                </div>
                                <div className="blog_post_content">
                                    <div className="post_meta_wrap">
                                        <ul className="category_btns_group unordered_list">
                                            <li style={{textTransform: "capitalize"}}><Link href={`/blog-single/${post.fields.slug}`}>{post.fields.tags.tags[0]}</Link></li>
                                        </ul>
                                        <ul className="post_meta unordered_list">
                                            <li>
                                                <Link href={`/blogs/${post.fields.slug}`}>
                                                    <Image src={icon1} alt="Icon Calendar" /> {new Date(post.fields.publishDate).toLocaleDateString()}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="blog_post_title">
                                        <Link href={`/blogs/${post.fields.slug}`}>
                                            {post.fields.title}
                                        </Link>
                                    </h3>
                                    <Link href={`/blogs/${post.fields.slug}`} className="btn_unfill">
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                        <span className="btn_label">Read More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div >
        </section >
    );
}
