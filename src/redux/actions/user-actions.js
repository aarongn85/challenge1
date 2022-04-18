import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SELECT_USERS_PAGE,
  SET_USER_FILTERS
} from './actions-types'

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get('https://randomuser.me/api?results=100')
      .then(response => {
        const users = response.data.results;
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export const selectUsersPage = (id) => {
  return {
    type: SELECT_USERS_PAGE,
    payload: id
  }
}

export const setUserFilters = (filters) => {
  return {
    type: SET_USER_FILTERS,
    payload: filters
  }
}
