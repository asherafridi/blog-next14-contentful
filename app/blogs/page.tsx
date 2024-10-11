"use client"
import React, {  useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import client from '@/lib/contentfulClient';
import icon1 from '@/public/images/icons/icon_calendar.svg';
import BreadCrumb from '@/components/Breadcrumb';

const BlogList = () => {

  const [blogs, setBlogs] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await client.getEntries({
          content_type: 'blog',
          limit: 10, // Fetch a larger number for pagination
        });
        setBlogs(res.items);
      } catch (error) {
        console.error('Error fetching Contentful data:', error);
      }
    };
    fetchBlogs();
  }, []);


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <>
    
    <BreadCrumb pageTitle="Latest Blogs" pagesub={'Blogs 😍'} pageTop={'Our'} />
    <section className="blog_section section_space bg-light">
      <div className="container">

        {/* BlogSection for Latest Posts */}
        <div className="section_space pb-0">
          <div className="row">
            <div className="col-lg-12">
              

              {currentBlogs.map((blog, Bitem) => (
                <div className="blog_post_block image_left_layout" key={Bitem}>
                  <div className="blog_post_image">
                    <Link  href={`/blogs/${blog.fields.slug}`} className="image_wrap">
                      <Image
                        src={`https:${blog.fields.featuredImage.fields.file.url}`}
                        alt="Blog Post"
                        width={400}
                        height={250}
                      />
                    </Link>
                  </div>
                  <div className="blog_post_content">
                    <div className="post_meta_wrap">
                      <ul className="category_btns_group unordered_list">
                        <li style={{ textTransform: 'capitalize' }}>
                          <Link  href={`/blogs/${blog.fields.slug}`}>
                            {blog.fields.tags.tags[0]}
                          </Link>
                        </li>
                      </ul>
                      <ul className="post_meta unordered_list">
                        <li>
                          <Link  href={`/blogs/${blog.fields.slug}`}>
                            <Image src={icon1} alt="Icon Calendar" />{' '}
                            {new Date(blog.fields.publishDate).toLocaleDateString()}
                          </Link>
                        </li>
                        <li>
                          <Link  href={`/blogs/${blog.fields.slug}`}>
                            <i className="fa-regular fa-comment-lines"></i> 24
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog_post_title">
                      <Link  href={`/blogs/${blog.fields.slug}`}>
                        {blog.fields.title}
                      </Link>
                    </h3>
                    <p>{blog.fields.description}</p>
                    <Link  href={`/blogs/${blog.fields.slug}`} className="btn btn-dark">
                      <span className="btn_label" data-text="Read More">Read More</span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="pagination_wrap pb-0">
                <ul className="pagination_nav unordered_list justify-content-center">
                  <li>
                    <button
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                      className="pagination_button"
                    >
                      <i className="fa-solid fa-angles-left"></i>
                    </button>
                  </li>
                  {/* Example for page numbers 1 to 3 */}
                  {[...Array(Math.ceil(blogs.length / blogsPerPage))].map((_, index) => (
                    <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                      <button onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                    </li>
                  ))}
                  <li>
                    <button
                      disabled={currentPage === Math.ceil(blogs.length / blogsPerPage)}
                      onClick={() => handlePageChange(currentPage + 1)}
                      className="pagination_button"
                    >
                      <i className="fa-solid fa-angles-right"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Blog Sidebar */}
            <div className="col-lg-4">
              {/* <BlogSidebar /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default BlogList;
