
import {useState, useEffect} from 'react';
import axios from 'axios'
import Posts from './component/posts.js'
import Pagination from './component/pagination.js'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(()=>{
    const fetchPost = async()=>{
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPost()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePage = val => setCurrentPage(val)

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">Hi Ukhty</h2>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postPerPage={postsPerPage} totalPosts={posts.length} handlePage={handlePage}/>
    </div>
  );
}

export default App;
