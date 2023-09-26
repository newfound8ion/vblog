import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started With Newcoin
          </Link>
        </div>
                      <img src="/img/welcome.png" alt="Welcome to the cutting-edge, anon!" style={{marginTop: '44px'}} />
                <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started With Newcoin
          </Link>
        </div>

      </div>
    </header>
  );
}


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Welcome to the cutting edge, anon! <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
<img 
  src="/img/hypernetwork.png" 
  alt="Newcoin Hypernetwork" 
  style={{ 
    display: 'block', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    marginTop: '0', 
  }} 
/>

        
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started With Newcoin
          </Link>
        </div>
                          

        
      </main>
    </Layout>
  );
}
