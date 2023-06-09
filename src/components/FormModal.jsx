import React from 'react';
import TextField from './TextField';

const FormModal = ({ open, setOpen, data, setData, onSave }) => {
	if (!open) return null;

	return (
		<>
			<div
				className='fixed z-10 inset-0 overflow-y-auto'
				aria-labelledby='modal-title'
				role='dialog'
				aria-modal='true'
			>
				<div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
					<div
						className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
						aria-hidden='true'
					></div>
					<span
						className='hidden sm:inline-block sm:align-middle sm:h-screen'
						aria-hidden='true'
					>
						&#8203;
					</span>
					<div
						className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
						role='dialog'
						aria-modal='true'
						aria-labelledby='modal-title'
					>
						<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
							<div className='sm:flex sm:items-start'>
								<div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
									<h3
										className='text-lg leading-6 font-medium text-gray-900'
										id='modal-title'
									>
										{data?.id ? 'Update Post' : 'Add Post'}
									</h3>
									<div className='mt-2'>
										<div className='space-y-8 divide-y divide-gray-200 sm:space-y-5'>
											<div className='pt-8 space-y-6 sm:pt-10 sm:space-y-5'>
												<div className='sm:col-span-3'>
													<TextField
														isRequred={true}
														label='Title'
														value={data.title}
														placeholder='Enter title'
														onChange={(e) =>
															setData({ ...data, title: e.target.value })
														}
													/>
												</div>
												<div className='sm:col-span-3'>
													<TextField
														isRequred={true}
														label='Body'
														value={data.body}
														placeholder='Enter body'
														onChange={(e) =>
															setData({ ...data, body: e.target.value })
														}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
							<button
								type='button'
								className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm'
								onClick={() => onSave()}
							>
								{data?.id ? 'Update' : 'Add'}
							</button>
							<button
								type='button'
								className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
								onClick={() => setOpen(false)}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormModal;
