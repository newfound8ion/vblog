// src/components/BlogOverview.tsx

import React from 'react';
import { useRouteData } from '@docusaurus/useRouteData';
import Link from '@docusaurus/Link';

const BlogOverview = () => {
  const { items } = useRouteData();
  const blogItems = items || [];

  return (
    <div className="blog-overview-container">
      <div className="blog-list">
        <ul>
          {blogItems.map((item, index) => (
            <li key={index}>
              <Link to={item.permalink}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="blog-posts">
        {blogItems.map((item, index) => (
          <div key={index} id={item.permalink} className="blog-post">
            <h2>{item.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: item.content }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogOverview;
