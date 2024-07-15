import React from 'react';

const RelatedResources = ({ resources }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Related Resources</h2>
      <ul style={styles.list}>
        {resources.map((resource, index) => (
          <li key={index} style={styles.listItem}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
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
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    padding: '10px',
    marginBottom: '5px',
    backgroundColor: '#fff',
    borderRadius: '3px',
  },
};

export default RelatedResources;
