// src/pages/index.tsx

import React from 'react';
import Layout from '@theme/Layout';
import { useRouteData } from '@docusaurus/useRouteData';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  const { items } = useRouteData();
  const blogItems = items || [];

  return (
    <Layout
      title="Blog Home"
      description="List of blog posts and their content">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: '0 0 25%', borderRight: '1px solid #ddd', padding: '20px' }}>
          <ul>
            {blogItems.map((item, index) => (
              <li key={index}>
                <Link to={item.permalink}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: '1', padding: '20px' }}>
          {blogItems.map((item, index) => (
            <div key={index} id={item.permalink}>
              <h2>{item.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
