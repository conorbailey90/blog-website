import { InferGetStaticPropsType } from 'next';
import { useRef, useState , useEffect, MouseEvent, KeyboardEvent} from 'react';
import styles from './Blog.module.css';
import Tile from './Tile';

interface Post {
    title: string
    id: string
    image: string
    content: string
}

const Blog = ({posts}: {posts: Post[]}) => {

    const [searchResults, setSearchResults] = useState(posts);
    const [iteration, setIteration] = useState(0);

    const searchRef =  useRef<HTMLInputElement>(null)
    const searchIconRef =  useRef<SVGSVGElement>(null)

    function handlePagination(e: any){
        if(e.target.textContent === 'Previous' && iteration !== 0){
            setIteration(i => i - 1)
        }else if(e.target.textContent === 'Next' && iteration + 6 < searchResults.length){
            setIteration(i => i + 1)
        }
       
    }

    const handleSearch = (e: any) => {
       
    
        let filterArray: Post[] = [];
       
        function setFilterArray(){
            const { value } = searchRef.current!;
            for(let i = 0; i < posts.length; i++){
                if(posts[i].title.toUpperCase().indexOf(value.toUpperCase()) !== -1){
                    filterArray.push(posts[i])
                }
            }
            setSearchResults(filterArray)
        }
      
        if(e.type == 'keydown' && e.key == 'Enter'){
            console.log(e)
            setFilterArray();
        }
        if(e.type === 'click'){
            console.log(e)
            setFilterArray();
        }
        if(e == 'pagination'){
            console.log(e)
            setFilterArray();
        }
    
        
    }
   
   
    return(
        <section className={styles.blog}>
            <div className={styles.paddingContainer}>
            <div className={styles.blogHeader}>
                <div className={styles.sectionTitle}>
                    <h2 className={styles.sectionTitle}>Blog</h2>
                </div>
                <div className={styles.blogSearch}>
                    <input onKeyDown={(e) => handleSearch(e)} ref={searchRef} className={styles.blogSearchInput} placeholder='Search Blog Posts' type="text" />
                    <svg onClick={(e) => handleSearch(e)} ref={searchIconRef} className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
                </div>
            </div>
            {searchResults.length > 6 ?
            <div className={styles.pagination}>
                <div style={{userSelect: 'none', cursor: 'pointer', fontFamily: 'Druk', textTransform: 'uppercase'}} onClick={(e) => handlePagination(e)} className={styles.previous}>
                   <h4>Previous</h4> 
                </div>
                <div style={{userSelect: 'none', cursor: 'pointer', fontFamily: 'Druk', textTransform: 'uppercase'}}  onClick={(e) => handlePagination(e)}  className={styles.next}>
                   <h4>Next</h4> 
                </div>
            </div>
            :
            null
            }
            <div className={styles.container}>
                {searchResults.length > 0 ?
                searchResults.map((post, idx) => {
                    if (idx >= iteration && idx < iteration + 6) {
                        return (
                            <Tile key={post.id} image={post.image} title={post.title} slug={post.id} />
                        )
                    }
                }
                )
                :
                <h4 style={{gridArea: '1 / 1 / 2 / 13'}}>No Results Found...</h4>}
            </div>
           
            </div>
        </section>
    )
}

export default Blog;