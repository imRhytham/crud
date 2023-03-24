import * as types from './Types';

const initialState = {
	posts: [],
	post: {
		title: '',
		body: '',
		userId: 1,
	},
	loading: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false,
			};
		case types.ADD_POST:
			return {
				...state,
				posts: [action.payload, ...state.posts],
			};
		case types.DELETE_POST:
			return {
				...state,
				posts: state.posts.filter((post) => post.id !== action.payload),
			};
		case types.EDIT_POST:
			return {
				...state,
				posts: state.posts.map((post) =>
					post.id === action.payload.id ? action.payload : post
				),
			};
		case types.POST_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
};
