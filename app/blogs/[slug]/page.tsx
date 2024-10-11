// /pages/blog/[slug].tsx
"use client"; // This indicates that this component is a client component

import React, { useEffect, useState } from 'react';
import client from '@/lib/contentfulClient';
import BreadCrumb from '@/components/Breadcrumb';
import CtaSection from '@/components/CtaSection';
import BlogSingle from '@/components/BlogSingle';

const Page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params; // Get the slug from the URL
  const [blog, setBlog] = useState<any>(null); // State to hold the blog post
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState<string | null>(null); // State for error messages

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const res = await client.getEntries({
          content_type: 'blog',
          'fields.slug': slug,
        });

        if (res.items.length > 0) {
          setBlog(res.items[0]); // Set the fetched blog post
        } else {
          setError('Blog post not found.'); // Set error if no post found
        }
      } catch (error) {
        console.error('Error fetching Contentful data:', error);
        setError('Failed to load blog post.'); // Set error on fetch failure
      } finally {
        setLoading(false); // Set loading to false once fetching is complete
      }
    };

    fetchBlogPost();
  }, [slug]); // Effect runs when slug changes

  if (loading) {
    return <p>Loading...</p>; // Show loading state
  }

  if (error) {
    return <p>{error}</p>; // Show error state
  }

  return (
    <>

      <main className="page_content about-page">
        <BreadCrumb pageTitle={blog?.fields.title} pagesub={'Details 😍'} pageTop={'Blog'} />
        <BlogSingle blog={blog}/>
      </main>
      <CtaSection />
    </>
  );
};

export default Page;
