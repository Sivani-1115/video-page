import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursePage from './pages/Coursepage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import PrivateRoute from './components/privateRoute';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/course/:id" element={
            <PrivateRoute>
              <CoursePage />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
