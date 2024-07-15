// src/reducers/reviewReducer.js

import { GET_REVIEWS_SUCCESS, GET_REVIEWS_FAIL, ADD_REVIEW_SUCCESS, ADD_REVIEW_FAIL } from '../actions/types';

const initialState = {
  reviews: [],
  loading: true,
  error: null,
};

const reviewReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: payload,
        loading: false,
        error: null,
      };
    case ADD_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: [payload, ...state.reviews],
        loading: false,
        error: null,
      };
    case GET_REVIEWS_FAIL:
    case ADD_REVIEW_FAIL:
      return {
        ...state,
        reviews: [],
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reviewReducer;
