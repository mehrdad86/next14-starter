import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non reiciendis quae beatae voluptatibus sed corrupti maxime laboriosam temporibus! Similique unde debitis laborum sapiente dicta, voluptates blanditiis asperiores! Quasi, ipsum!</p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>
            </div>
        </div>
    );
}

export default PostCard;