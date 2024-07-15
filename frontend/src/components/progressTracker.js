import React from 'react';

const ProgressTracker = ({ progress }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Progress Tracker</h2>
      <div style={styles.progressBar}>
        <div style={{ ...styles.progress, width: `${progress}%` }} />
      </div>
      <p style={styles.percentage}>{progress}% Completed</p>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '20px',
    backgroundColor: '#f9f9f9',
    padding: '10px',
    borderRadius: '5px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  progressBar: {
    width: '100%',
    height: '20px',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#76c7c0',
  },
  percentage: {
    marginTop: '10px',
    fontSize: '16px',
    textAlign: 'center',
  },
};

export default ProgressTracker;
