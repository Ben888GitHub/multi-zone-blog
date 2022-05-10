import Link from 'next/link';

function Posts({ posts }) {
	// console.log(posts);
	return (
		<div className="posts">
			{posts?.map((post, idx) => (
				<Link key={idx} href={`/${post.id}`}>
					<a>
						<div className="post">
							<h2>
								{post.id}. {post.title}
							</h2>
							<p>{post.body}</p>
						</div>
					</a>
				</Link>
			))}
		</div>
	);
}

export default Posts;
