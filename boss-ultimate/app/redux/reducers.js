/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { reducer as form } from 'redux-form/immutable';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import languageProviderReducer from 'containers/LanguageProvider/reducer';
import login from './modules/login';
import uiReducer from './modules/ui';
import treeTable from './modules/treeTable';
import crudTable from './modules/crudTable';
import crudTableForm from './modules/crudTableForm';
import socmed from './modules/socialMedia';
import ecommerce from './modules/ecommerce';
import contact from './modules/contact';
import chat from './modules/chat';
import email from './modules/email';
import calendar from './modules/calendar';
import initval from './modules/initForm';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

/**
 * Merge route into the global application state
 */
export function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Branching reducers to use one reducer for many components
 */

function branchReducer(reducerFunction, reducerName) {
  return (state, action) => {
    const { branch } = action;
    const isInitializationCall = state === undefined;
    if (branch !== reducerName && !isInitializationCall) {
      return state;
    }
    return reducerFunction(state, action);
  };
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    form,
    ui: uiReducer,
    initval,
    login,
    socmed,
    calendar,
    ecommerce,
    contact,
    chat,
    email,
    treeTableArrow: branchReducer(treeTable, 'treeTableArrow'),
    treeTablePM: branchReducer(treeTable, 'treeTablePM'),
    crudTableDemo: branchReducer(crudTable, 'crudTableDemo'),
    crudTableForm,
    crudTbFrmDemo: branchReducer(crudTableForm, 'crudTbFrmDemo'),
    route: routeReducer,
    language: languageProviderReducer,
    ...injectedReducers,
  });
}
