"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import client from '@/lib/contentfulClient';
import BreadCrumb from '@/components/Breadcrumb';

const BlogList = () => {

  const [blogs, setBlogs] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await client.getEntries({
          content_type: 'platforms',
          limit: 10, // Fetch a larger number for pagination
        });
        setBlogs(res.items);
        console.log(res.items);
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

      <BreadCrumb pageTitle="Our Platforms" pagesub={'Platforms 😍'} pageTop={'Our'} />
      <section className="portfolio_section section_space bg-light">
        
        <div className="container">

          <div className="filter_elements_wrapper row">


            {currentBlogs.map((blog, Bitem) => (


              <div className="col-lg-6" key={Bitem}>
                <div className="portfolio_block portfolio_layout_2">
                  <div className="portfolio_image">
                    <Link  className="portfolio_image_wrap bg-light" href={`/portfolio/${blog.fields.slug}`} as={`/portfolio/${blog.fields.slug}`}>
                      <Image src={`https:${blog.fields.featuredImage.fields?.file.url}`} alt="Mobile App Design" width={1000} height={1000}/>
                    </Link>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                      <Link  href={`${blog.fields.link}`} as={`${blog.fields.link}`} target='_blank'>
                      {blog.fields.title}
                      </Link>
                    </h3>
                    <ul className="category_list unordered_list">
                      <li><Link href={`/portfolio/${blog.fields.slug}`} as={`/portfolio/${blog.fields.slug}`}> {blog.fields.tags.tags[0]}</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}

          </div>


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
      </section>
    </>
  );
};

export default BlogList;
