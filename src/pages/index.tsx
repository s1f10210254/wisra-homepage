import { useState } from 'react';

import styles from './index.module.css';
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import IndexComponent from '../components/Index/IndexComponent';


const Home = () => {
  // function HeaderBar() {
  //   return (
  //     <div className={styles.headerBar}>
  //       <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noreferrer">
  //         <img src="path_to_twitter_icon.png" alt="Twitter" className={styles.icon} />
  //         Twitter
  //       </a>
  //       <a href="https://github.com/your_username/your_repository" target="_blank" rel="noreferrer">
  //         <img src="path_to_github_icon.png" alt="GitHub" className={styles.icon} />
  //         GitHub
  //       </a>
  //       <a href="https://www.npmjs.com/package/your_package" target="_blank" rel="noreferrer">
  //         <img src="path_to_npm_icon.png" alt="NPM" className={styles.icon} />
  //         NPM
  //       </a>
  //     </div>
  //   );
  // }
  interface ItemData {
    name: string;

    description: string;
  }

  const itemData: ItemData[] = [
    {
      name: 'INDEX',

      description: 'INDEX',
    },
    {
      name: 'USE WISRA',

      description: 'USE WISRA',
    },
    {
      name: '-LED',

      description: 'LED',
    },
    {
      name: '-SERVO',

      description: 'SERVO',
    },
  ];

  const [selectedItem, setSelectedItem] = useState<ItemData>(itemData[0]);

  // const [showHeader, setShowHeader] = useState(false);

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
              Docusaurus Tutorial - 5min ⏱️
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <div>
      <Layout
        title={`Hello`}
        description='Description'
      >

        {/* <HomepageHeader /> */}
        <main>
          <div style={{ display: 'flex' }}>
          {/* <aside className={styles.sidebar}>
            {itemData.map((item) => (
              <div
                key={item.name}
                className={`${styles.sidebarItem} ${selectedItem.name === item.name ? 'active' : ''}`}
                onClick={() => setSelectedItem(item)}
              >
                {item.name}
              </div>
            ))}
          </aside> */}
          <main className={styles.main}>
            {/* <div>
              <h1>{selectedItem.description}</h1>
              {renderContentBasedOnItemName(selectedItem.name)}
            </div> */}
            <IndexComponent />
          </main>
        </div>
        </main>
      </Layout>
    </div>
      
  );
};

// function renderContentBasedOnItemName(name: string) {
//   switch (name) {
//     case 'INDEX':
//       return <IndexComponent />;
//     case 'USE WISRA':
//       return <UseWisraComponent />;
//     case '-LED':
//       return <LEDComponent />;
//     case '-SERVO':
//       return <SERVOComponent />;
//   }
// }

export default Home;
