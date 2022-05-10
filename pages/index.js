import Posts from '../components/Posts';
import styles from '../styles/Home.module.css';
import axios from 'axios';

export default function Home({ data }) {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>Blog Page</h1>
				<Posts posts={data} />
			</main>
		</div>
	);
}

export const getStaticProps = async () => {
	const posts = await axios
		.get(`https://jsonplaceholder.typicode.com/posts`)
		.then((r) => r.data);
	console.log(posts.slice(0, 10));

	return {
		props: { data: posts.slice(0, 10) }
	};
};
