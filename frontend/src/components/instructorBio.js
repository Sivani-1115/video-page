import React from 'react';

const InstructorBio = ({ instructor }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Instructor</h2>
      <div style={styles.bioContainer}>
        <img src={instructor.photo} alt={instructor.name} style={styles.photo} />
        <div>
          <h3 style={styles.name}>{instructor.name}</h3>
          <p style={styles.qualifications}>{instructor.qualifications}</p>
        </div>
      </div>
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
  bioContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  photo: {
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    marginRight: '20px',
  },
  name: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  qualifications: {
    fontSize: '16px',
  },
};

export default InstructorBio;
