import React from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

const Card = ({ title, body, onEdit, onDelete }) => {
	return (
		<div className='max-w-md bg-white rounded-md shadow-md'>
			<div className='p-4'>
				<div className='flex items-center justify-between'>
					<h2 className='text-xl font-bold'>{title}</h2>
					<div className='flex items-center space-x-4 text-sm'>
						<PencilSquareIcon
							className='h-6 w-6 text-blue-400 hover:text-blue-500 cursor-pointer'
							onClick={onEdit}
						/>
						<TrashIcon
							className='h-6 w-6 text-red-400 hover:text-red-500 cursor-pointer'
							onClick={onDelete}
						/>
					</div>
				</div>
				<p className='text-gray-600'>{body}</p>
			</div>
		</div>
	);
};

export default Card;
