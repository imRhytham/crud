import * as types from './Types';
import axios from 'axios';

const setPostLoading = (payload) => {
	return {
		type: types.POST_LOADING,
		payload: payload,
	};
};

export const getPosts = async (dispatch) => {
	dispatch(setPostLoading(true));
	console.log('getPosts', dispatch);
	try {
		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
		dispatch({
			type: types.GET_POSTS,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	} finally {
		dispatch(setPostLoading(false));
	}
};

export const addPost = async (dispatch, post) => {
	dispatch(setPostLoading(true));
	try {
		const { data } = await axios.post(
			'https://jsonplaceholder.typicode.com/posts',
			post
		);
		dispatch({
			type: types.ADD_POST,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	} finally {
		dispatch(setPostLoading(false));
	}
};

export const deletePost = async (dispatch, id) => {
	dispatch(setPostLoading(true));
	try {
		await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
		dispatch({
			type: types.DELETE_POST,
			payload: id,
		});
	} catch (error) {
		console.log(error);
	} finally {
		dispatch(setPostLoading(false));
	}
};

export const editPost = async (dispatch, post) => {
	dispatch(setPostLoading(true));
	try {
		const { data } = await axios.put(
			`https://jsonplaceholder.typicode.com/posts/${post.id}`,
			post
		);
		dispatch({
			type: types.EDIT_POST,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	} finally {
		dispatch(setPostLoading(false));
	}
};
