// frontend/src/redux/actions/courseActions.js
import axios from 'axios';
import { 
  GET_COURSE, 
  GET_COURSES, 
  COURSE_ERROR, 
  UPDATE_COURSE, 
  DELETE_COURSE 
} from '../constants/courseConstants';

// Get all courses
export const getCourses = () => async dispatch => {
  try {
    const res = await axios.get('/api/courses');

    dispatch({
      type: GET_COURSES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get course by ID
export const getCourse = id => async dispatch => {
  try {
    const res = await axios.get(`/api/courses/${id}`);

    dispatch({
      type: GET_COURSE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Update course
export const updateCourse = (id, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(`/api/courses/${id}`, formData, config);

    dispatch({
      type: UPDATE_COURSE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete course
export const deleteCourse = id => async dispatch => {
  try {
    await axios.delete(`/api/courses/${id}`);

    dispatch({
      type: DELETE_COURSE,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
