import React from 'react';

const CourseDescriptor = ({ description }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Course Description</h2>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '16px',
  },
};

export default CourseDescriptor;
