import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    SELECT_USERS_PAGE,
    SET_USER_FILTERS
  } from '../actions/actions-types'
  
  const initialState = {
    loading: false,
    currentPage:1,
    usersPerPage:10,
    usersAgeFilter:"any age",
    usersGenderFilter: { male:false, female:false, both:true },
    users: [],
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true
        }
      break;
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload,
          error: ''
        }
      break;
      case FETCH_USERS_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload
        }
      break;
      case SELECT_USERS_PAGE:
        return {
          ...state,
          currentPage: action.payload
        }
      break;
      case SET_USER_FILTERS:
        return {
          ...state,
          currentPage: 1,
          usersPerPage: action.payload.usersPerPage,
          usersGenderFilter: action.payload.genders,
          usersAgeFilter: action.payload.ages
        }
      default: 
        return state; 
      break;
    }
  }
  
  export default reducer
  