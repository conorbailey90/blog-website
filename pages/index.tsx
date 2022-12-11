import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Blog from '../components/Blog'

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}: any) {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <div className={styles.logo}>
            <h2>Conor Bailey</h2>
          </div>
          <div className={styles.about}>
            <h2 className={styles.title}>About</h2>
            <br/>
              <p>Hi! My name is Conor Bailey and i&apos;m a web developer / programmer from London, UK. Thank you for visiting my website.</p>

          </div>
          <div className={styles.links}>
            <h2 className={styles.title}>Links</h2>
            <br />
            <ul>
              <li>
                <a target='__blank' href="https://www.linkedin.com/in/conor-bailey/">LinkedIn</a>
              </li>
              <li>
                <a target='__blank' href="https://www.youtube.com/channel/UCcNEvbajb34cXufYddZ57og">YouTube</a>
              </li>
              <li>
                <Link legacyBehavior href={'/blogarchive'}>
                  <a>Blog Archive</a>
                </Link>
              </li>
              <br />
              <h2 className={styles.title}>Contact</h2>
              <br />
              <li>
                <a target='__blank' href="mailto:conbailey90@gmail.com">conbailey90@gmail.com</a>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
      <Blog posts={allPostsData} />
    </main>
  )
}
