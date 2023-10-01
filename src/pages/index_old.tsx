import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogPostItem from '@theme/BlogPostItem';
import BlogListPaginator from '@theme/BlogListPaginator';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  // You might need to adjust the way you query and load blog posts
  // The example below is a placeholder and might not work out of the box
  const blogPosts = []; // Load your blog posts here

  return (
    <div>
      <header>
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
      </header>
      <main>
        {blogPosts.map((post: any) => (
          <BlogPostItem
            key={post.metadata.permalink}
            frontMatter={post.metadata}
            isBlogPostPage={false}
          >
            {post.content}
          </BlogPostItem>
        ))}
        <BlogListPaginator metadata={{}} />
      </main>
    </div>
  );
}

export default Home;
