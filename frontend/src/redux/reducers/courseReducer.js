// frontend/src/redux/reducers/courseReducers.js

import { GET_COURSE_SUCCESS, GET_COURSE_FAIL, UPDATE_COURSE_SUCCESS, UPDATE_COURSE_FAIL } from '../actions/types';

const initialState = {
  course: null,
  loading: true,
  error: null,
};

export const courseListReducer = (state = initialState, action) => {
  // Reducer logic for course list
};

export const courseDetailsReducer = (state = initialState, action) => {
  // Reducer logic for course details
};

export const courseReviewCreateReducer = (state = initialState, action) => {
  // Reducer logic for creating course reviews
};

// Optionally, you might use combineReducers to combine these reducers
// if they operate on different parts of the state.
