import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const CoursePage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/courses/${courseId}`);
        if (!response.ok) {
          throw new Error('Course not found');
        }
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        setError(error.message || 'Failed to fetch course');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();

   
    const token = localStorage.getItem('token');
    if (token) {
      setUser(jwtDecode(token));
    }
  }, [courseId]);

  const handleVideoProgress = (e) => {
    const { currentTime, duration } = e.target;
    setProgress((currentTime / duration) * 100);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!course) return <div>Course not found</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>{course.title}</h1>
      <video
        controls
        onTimeUpdate={handleVideoProgress}
        style={{ width: '100%', maxWidth: '800px', marginBottom: '20px' }}
      >
        <source src={course.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <h2>Course Description</h2>
        <p>{course.description}</p>
      </div>
      <div>
        <h2>Instructor</h2>
        <p>{course.instructor.name}</p>
      </div>
      <div>
        <h2>Progress</h2>
        <div style={{ background: '#eee', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ background: '#4caf50', width: `${progress}%`, padding: '10px', color: '#fff' }}>
            {progress.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
