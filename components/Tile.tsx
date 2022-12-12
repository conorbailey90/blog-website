import Image from "next/image";
import Link from "next/link";
import styles from './Tile.module.css'

interface TileProps {
    title: string;
    image: string;
    slug: string
}

const Tile = ({title, image, slug}: TileProps) => {
    return (
        
        <div className={styles.tile}>
             <Link href={`/blog/${slug}`}>
            <div className={styles.imageWrap}>
                <Image src={image} alt="article image" fill style={{objectFit: 'cover', objectPosition: 'center'}} />
            </div>
                <h5>{title}</h5>
            </Link>
        </div>
    
    )
}

export default Tile;