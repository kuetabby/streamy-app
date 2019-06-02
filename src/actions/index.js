import {
  SIGN_OUT,
  SIGN_IN,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "../constants";
import stream from "../apis/stream";
import History from "../History";

export const signIn = id => {
  return {
    type: SIGN_IN,
    payload: id
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await stream.post("/streams", { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  History.push("/");
};

export const fetchStreams = () => async dispatch => {
  const response = await stream.get("/streams");
  return dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await stream.get(`/streams/${id}`);
  return dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await stream.put(`/streams/${id}`, formValues);
  return dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = id => async dispatch => {
  await stream.put(`/streams/${id}`);
  return dispatch({ type: DELETE_STREAM, payload: id });
};
