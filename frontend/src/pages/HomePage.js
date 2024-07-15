import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const goToCourse = () => {
    navigate('/course/1');
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Course Platform</h1>
      <button onClick={goToCourse}>Go to Course</button>
    </div>
  );
};

export default HomePage;

