
const Posts = ({posts, loading})=>{
	if (loading) {
		return <p>Loading...</p>
	}

	return <ul className="mb-5 list-group">
		{posts.map(post => (
			<li key={post.id} className="list-group-item">
               {post.title}
			</li>
		))}
	</ul>
}

export default Posts