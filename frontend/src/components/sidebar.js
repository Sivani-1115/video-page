import React from 'react';
import CourseOutline from './CourseOutline';
import ProgressTracker from './ProgressTracker';

const SideBar = ({ outline, currentSection, onSelectSection, progress }) => {
  return (
    <div style={styles.container}>
      <CourseOutline
        outline={outline}
        currentSection={currentSection}
        onSelectSection={onSelectSection}
      />
      <ProgressTracker progress={progress} />
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
  },
};

export default SideBar;
