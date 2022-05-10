import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';

function SinglePost({ post }) {
	const router = useRouter();

	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<h1 className={styles.title}>{post.title}</h1>
				<p>Post slug: {router.query.id}</p>
				<p>{post.body}</p>
			</main>
		</div>
	);
}

export default SinglePost;

export const getStaticProps = async ({ params }) => {
	const post = await axios
		.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
		.then((r) => r.data);
	console.log(params.id);
	console.log(post);
	return {
		props: { post }
	};
};

export const getStaticPaths = async () => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/posts`
	);
	// console.log(data.slice(0, 5));
	const paths = data.map((post) => ({
		params: { id: post.id.toString() }
	}));

	return {
		paths,
		fallback: true
	};
};
