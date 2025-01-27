import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
        <div className='flex justify-between'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-black'>{data.category}</h3>
            <h4 className='text-sm text-black'>{data.taskDate}</h4>
        </div>

        <h2 className='mt-5 text-2xl font-semibold text-black'>{data.taskTitle}</h2>
        <p className='text-sm mt-2 text-black'>
          {data.taskDescription}
        </p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm text-black'>Mark as completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm text-black'>Mark as failed</button>
        </div>
    </div>
  )
}

export default AcceptTask