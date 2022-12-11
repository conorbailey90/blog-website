import Header from "../components/Header"
import { getSortedPostsData } from '../lib/posts';
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const BlogArchive = ({allPostsData}: any) => {
    console.log(allPostsData)
    return (
        <section>
            <Header />
            <ul style={{position: 'relative', width: '95%', left: '50%', transform: 'translateX(-50%)', maxWidth: 'var(--max-width)'}}>
            {allPostsData.map((post: any, idx: number) => (
                <Link key={idx} href={`/blog/${post.id}`}>
                    <li style={{marginBottom: '1rem'}} >[ {post.date} ] - [ {post.title} ]</li>
                </Link>
            ))
            }
            </ul>
        </section>
    )
}

export default BlogArchive;