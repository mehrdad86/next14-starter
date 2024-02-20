import Image from 'next/image';
import styles from './singlePost.module.css';

const getData = async (slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    if (!res.ok) {
        throw new Error("Something went wrong");
    }
    return res.json();
}

const SinglePostPage = async ({ params }) => {

    const post = await getData(params.slug)

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    className={styles.img}
                    src="https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=''
                    fill />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image
                        className={styles.avatar}
                        src="https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=''
                        width={50}
                        height={50} />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.body}
                </div>
            </div>
        </div>
    );
}

export default SinglePostPage;