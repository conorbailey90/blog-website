import Header from "../../components/Header";
import ScrollProgress from "../../components/ScrollProgress";
import Link from "next/link";
import { getAllPostIds, getPostData } from '../../lib/posts';
import styles from '../../styles/Post.module.css'

interface PostData {
  title: string;
  id: string;
  image: string;
  content: string
  contentHtml: string
}

export async function getStaticProps({ params }: {params: PostData}) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}


export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }

const BlogPost = ({postData}: {postData: PostData}) => {
    // console.log(postData)
    return (
        <div>
          <ScrollProgress />
            <Header/>
            <div className={styles.container}>
              <h1 className={styles.title}>{postData.title}</h1>
              <br />
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              <Link href={'/'}>
                <div>
                 <h2 className={styles.back}>Back</h2> 
                </div>
              </Link>
            </div>
        </div>
    )
}

export default BlogPost;