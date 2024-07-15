// src/components/ReviewList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewList = ({ courseId }) => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchReviews();
  }, [page]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`/api/courses/${courseId}/reviews?page=${page}`);
      setReviews(response.data.reviews);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  return (
    <div style={styles.reviewListContainer}>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review._id} style={styles.reviewCard}>
          <p><strong>{review.user}</strong></p>
          <p>{review.comment}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
      <div style={styles.pagination}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

const styles = {
  reviewListContainer: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    marginTop: '20px',
  },
  reviewCard: {
    padding: '10px',
    borderBottom: '1px solid #eee',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
  },
};

export default ReviewList;
