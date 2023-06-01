import React, {useState} from 'react';
import './Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  const [currentPage, setCurrentPage] = useState(1);


  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
    paginate(currentPage);
  }

  return (
    <div>

      <div className='pagination-root'>
        {pageNumbers.map(number => (
          <div style={{ backgroundColor:(number==currentPage) ? "#c9a0ff" : "#EEEEFF" }} key={number} className='page-item'>
            <a onClick={() => handlePageChange(number)}  className='page-link'>
              {number}
            </a>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Pagination;