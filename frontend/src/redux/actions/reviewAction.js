// frontend/src/redux/actions/reviewActions.js
import axios from 'axios';
import { GET_REVIEWS_SUCCESS, GET_REVIEWS_FAIL, ADD_REVIEW_SUCCESS, ADD_REVIEW_FAIL } from '../constants/reviewConstants'; // Adjust path as needed

// Get Reviews
export const getReviews = () => async dispatch => {
  try {
    const res = await axios.get('/api/reviews'); // Adjust endpoint as per your API

    dispatch({
      type: GET_REVIEWS_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_REVIEWS_FAIL
    });
  }
};

// Add Review
export const addReview = (courseId, reviewData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(`/api/courses/${courseId}/reviews`, reviewData, config);

    dispatch({
      type: ADD_REVIEW_SUCCESS,
      payload: res.data
    });

    // Optionally, you may want to dispatch `getReviews()` here to update the list after adding a review
    // dispatch(getReviews());
  } catch (err) {
    dispatch({
      type: ADD_REVIEW_FAIL
    });
  }
};
