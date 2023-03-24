import React, { useEffect, useReducer, useState } from 'react';
import Card from './components/Card';
import ConfirmationDialog from './components/ConfirmationDialog';
import FormModal from './components/FormModal';
import Loader from './components/Loader';
import { addPost, deletePost, editPost, getPosts } from './redux/actions';
import { reducer } from './redux/reducer';

function App() {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState({
		title: '',
		body: '',
	});
	const initialState = {
		posts: [],
		post: {
			title: '',
			body: '',
			userId: 1,
		},
		loading: false,
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	const [openDialog, setOpenDialog] = useState(false);
	const [id, setId] = useState(null);
	// const { posts, loading } = state;s
	useEffect(() => {
		getPosts(dispatch);
	}, []);

	return (
		<>
			<Loader open={state.loading} />
			<div className='p-4 h-screen bg-slate-100'>
				<div className='flex justify-between items-center mb-4 '>
					<h1 className='text-2xl font-bold'>Posts</h1>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
						onClick={() => {
							setOpen(true);
							setData(state.post);
						}}
					>
						Add Post
					</button>
				</div>
				<div className='grid md:grid-cols-4 md:gap-5 h-auto overflow-auto grid-cols-1 gap-3 '>
					{state.posts.map((p) => (
						<Card
							key={p.id}
							body={p.body}
							title={p.title}
							onEdit={() => {
								setOpen(true);
								setData(p);
							}}
							onDelete={() => {
								setOpenDialog(true);
								setId(p.id);
							}}
						/>
					))}
				</div>
			</div>
			{open && (
				<FormModal
					open={open}
					setOpen={setOpen}
					data={data}
					setData={setData}
					onSave={() => {
						data?.id ? editPost(dispatch, data) : addPost(dispatch, data);
						setOpen(false);
					}}
				/>
			)}
			{id && (
				<ConfirmationDialog
					open={openDialog}
					setOpen={setOpenDialog}
					onDelete={() => {
						setOpenDialog(false);
						deletePost(dispatch, id);
					}}
				/>
			)}
		</>
	);
}

export default App;
