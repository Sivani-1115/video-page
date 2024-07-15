// src/reducers/videoReducers.js

import { VIDEO_PROGRESS_REQUEST, VIDEO_PROGRESS_SUCCESS, VIDEO_PROGRESS_FAIL } from '../constants/videoConstants.js';

const initialState = {
  progress: {},
  loading: false,
  error: null,
};

export const videoProgressReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIDEO_PROGRESS_REQUEST:
      return { ...state, loading: true };
    case VIDEO_PROGRESS_SUCCESS:
      return { ...state, loading: false, progress: action.payload };
    case VIDEO_PROGRESS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
