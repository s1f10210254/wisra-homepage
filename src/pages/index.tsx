import { useState } from 'react';

import styles from './index.module.css';
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import IndexComponent from "../components/Index/IndexComponent"
import Index from './INDEX';


const Home = () => {

  return (
    <div>
      <Layout
        title='index'
      >

          <div className={styles.main}>
            
            <Index />
          </div>
        
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
