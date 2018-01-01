import axios from "axios";

export const CREATE_IDEA = "create_idea";
export const FETCH_IDEA = "fetch_idea";
export const FETCH_ALL_IDEAS = "fetch_all_ideas";
export const UPDATE_IDEA = "update_idea";
export const DELETE_IDEA = "delete_idea";
export const FETCH_ALL_COMMENTS = "fetch_all_comments";

const ROOT_URL = 'https://idea-management.herokuapp.com/api/ideas';

function receiveData(dataType, json) {
  console.log(`From action creator: ${json}`);
  return {
    type: dataType,
    payload: json
  }
}

export function createIdea(value, callback) {
  const request = axios.post(`${ROOT_URL}`, value).then(() => callback());

  return {
    type: CREATE_IDEA,
    payload: request
  };
}

export function fetchIdea(id, callback) {
  const request = axios.get(`${ROOT_URL}/${id}`).then(() => callback());

  return {
    type: FETCH_IDEA,
    payload: request
  };
}

export function fetchAllIdeas(callback) {
  const request = axios.get(`${ROOT_URL}`).then((response) => receiveData('ALL_IDEAS', response.data));

  return {
    type: FETCH_ALL_IDEAS,
    payload: request
  };
}

export function updateIdea(id, value, callback) {
  const request = axios.put(`${ROOT_URL}/${id}`, value).then(() => callback());

  return {
    type: UPDATE_IDEA,
    payload: request
  };
}

export function deleteIdea(id, callback) {
  const request = axios.delete(`${ROOT_URL}/${id}`).then(() => callback());

  return {
    type: DELETE_IDEA,
    payload: request
  };
}

export function fetchAllComments(id, callback) {
  const request = axios.get(`${ROOT_URL}/${id}/comments`).then(() => callback());

  return {
    type: FETCH_ALL_COMMENTS,
    payload: request
  };
}
