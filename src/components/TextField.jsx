import React from 'react';

const TextField = ({
	label,
	value,
	onChange,
	placeholder,
	type,
	isRequred,
}) => {
	return (
		<>
			<div className='flex items-center'>
				<label className='text-sm font-semibold'>{label}</label>
				{isRequred && <span className='text-red-500'>*</span>}
			</div>
			<div className='flex items-center space-x-2'>
				<input
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className='block mt-2 w-full placeholder-gray-400/70  rounded-lg border border-blue-400 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 '
				/>
			</div>
		</>
	);
};

export default TextField;
