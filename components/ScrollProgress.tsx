import styles from './ScrollProgress.module.css'
import { useEffect, useRef } from 'react'
const ScrollProgress = () => {
    const bar = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleResize(){
            if(bar.current){
                let percentage = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100
                bar.current.style.transform = `translateX(${percentage.toFixed(2)}%)`
            }
         
        }
        window.addEventListener('scroll',handleResize)
        return () => window.removeEventListener("scroll", handleResize);
    })

    return (
        <div className={styles.container}>
            <div ref={bar} className={styles.bar}></div>
        </div>
    )
}

export default ScrollProgress