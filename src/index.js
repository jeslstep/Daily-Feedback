import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// getFeedbackReducer recives and stores state from app.js from the server
const getFeedbackReducer = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK') {
        console.log(`The currently stored feedback is ${action.payload}`);
        state = action.payload;
    }
    return state;
};

// set initial state (defaultState) 
const defaultState = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
};

// addFeedbackReducer adds and deletes feedback
const addFeedbackReducer = (state = defaultState, action) => {
// recives and stores feeling state from page one via dispatch
    if (action.type === 'ADD_FEELING_FEEDBACK') {
        console.log(`The feedback sumbitted was ${action.payload}`);
        return{...state, 
            feeling: action.payload,
        };
    } 
// recives and stores understanding state from page two via dispatch
    if (action.type === 'ADD_UNDERSTANDING_FEEDBACK') {
        console.log(`The feedback sumbitted was ${action.payload}`);
        return { ...state,
            understanding: action.payload,
        };
    }
// recives and stores support state from page three via dispatch
    if (action.type === 'ADD_SUPPORT_FEEDBACK') {
        console.log(`The feedback sumbitted was ${action.payload}`);
        return { ...state,
            support: action.payload,
        };
    }
// recives and stores comments state from page four via dispatch
    if (action.type === 'ADD_COMMENTS_FEEDBACK') {
        console.log(`The feedback sumbitted was ${action.payload}`);
        return { ...state,
            comments: action.payload,
        };
    }
// recives feedback to delete and removes it via dispatch
    else if ( action.type === 'DELETE_FEEDBACK' ) {
    console.log('The feedback deleted was', state, action.payload);
    const feedbackToDelete = action.payload;
    const matchFeedback = feedback => feedback.idNumber !== feedbackToDelete.idNumber;
    state = state.filter(matchFeedback);
  }
// resets state to defaultState
  if( action.type === 'RESET') {
      return defaultState;
  }
    return state;
};


// creating store
const storeInstance = createStore(
    combineReducers({
        getFeedbackReducer,
        addFeedbackReducer
        
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
