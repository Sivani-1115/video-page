import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <form style={styles.container} onSubmit={handleSubmit}>
      <h2 style={styles.title}>Leave a Review</h2>
      <label style={styles.label}>Rating:</label>
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={styles.select}
      >
        <option value="0">Select rating</option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num} Star{num > 1 && 's'}
          </option>
        ))}
      </select>
      <label style={styles.label}>Comment:</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={styles.textarea}
      />
      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
};

const styles = {
  container: {
