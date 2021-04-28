 
 const Pagination = ({postPerPage, totalPosts, handlePage})=>{
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    	pageNumbers.push(i)
    }


    return (
		<nav aria-label="Page navigation example">
		  <ul className="pagination">
		   {
		   	pageNumbers.map(link => (
				<li key={link} className="page-item"><a onClick={() => handlePage(link)} className="page-link" href="#">{link}</a></li>
		   	  ))
		   }
		    
		  </ul>
		</nav>
     )
 }

 export default Pagination