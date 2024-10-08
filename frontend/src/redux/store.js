import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { courseListReducer, courseDetailsReducer, courseReviewCreateReducer } from './reducers/courseReducers';

const reducer = combineReducers({
  courseList: courseListReducer,
  courseDetails: courseDetailsReducer,
  courseReviewCreate: courseReviewCreateReducer,

 
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
