import axios from "axios";

export const CREATE_IDEA = "create_idea";
export const FETCH_IDEA = "fetch_idea";
export const FETCH_ALL_IDEAS = "fetch_all_ideas";
export const UPDATE_IDEA = "update_idea";
export const DELETE_IDEA = "delete_idea";
export const FETCH_ALL_COMMENTS = "fetch_all_comments";

const ROOT_URL = 'https://idea-management.herokuapp.com/api/ideas';

function receiveData(request, json) {
  return {
    type: request,
    payload: json
  }
}

export function createIdea(value, dispatch) {
  return axios.post(`${ROOT_URL}`, value).then((response) => dispatch(receiveData(CREATE_IDEA, response.data)));
}

export function fetchIdea(id, dispatch) {
  return axios.get(`${ROOT_URL}/${id}`).then((response) => dispatch(receiveData(FETCH_IDEA, response.data)));
}

export function fetchAllIdeas(dispatch) {
 return axios.get(`${ROOT_URL}`).then((response) => dispatch(receiveData(FETCH_ALL_IDEAS, response.data)));
}

export function updateIdea(id, value, dispatch) {
  return axios.put(`${ROOT_URL}/${id}`, value).then((response) => dispatch(receiveData(UPDATE_IDEA, response.data)));
}

export function deleteIdea(id, dispatch) {
  return axios.delete(`${ROOT_URL}/${id}`).then((response) => dispatch(receiveData(DELETE_IDEA, response.data)));
}

export function fetchAllComments(id, dispatch) {
  return axios.get(`${ROOT_URL}/${id}/comments`).then((response) => dispatch(receiveData(FETCH_ALL_COMMENTS, response.data)));
}
