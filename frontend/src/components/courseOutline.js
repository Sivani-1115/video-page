import React from 'react';

const CourseOutline = ({ outline, currentSection, onSelectSection }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Course Outline</h2>
      <ul style={styles.list}>
        {outline.map((section, index) => (
          <li
            key={index}
            style={{
              ...styles.listItem,
              backgroundColor: currentSection === index ? '#e0f7fa' : '#fff',
            }}
            onClick={() => onSelectSection(index)}
          >
            {section}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f1f1f1',
    borderRadius: '5px',
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
    cursor: 'pointer',
    borderRadius: '3px',
    marginBottom: '5px',
  },
};

export default CourseOutline;
