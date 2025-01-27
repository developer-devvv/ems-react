import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex flex-wrap mt-10 justify-between w-full'>
        <div className='lg:w-[20%] md:w-[45%] md:mb-3 sm:w-[100%] sm:mb-3 w-[100%] mb-3 py-6 px-9 bg-blue-400 rounded-lg'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='lg:w-[20%] md:w-[45%] md:mb-3 sm:w-[100%] sm:mb-3 w-[100%] mb-3 py-6 px-9 bg-green-400 rounded-lg'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>

        <div className='lg:w-[20%] md:w-[45%] md:mb-3 sm:w-[100%] sm:mb-3 w-[100%] mb-3 py-6 px-9 bg-yellow-400 rounded-lg'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>

        <div className='lg:w-[20%] md:w-[45%] md:mb-3 sm:w-[100%] sm:mb-3 w-[100%] mb-3 py-6 px-9 bg-red-400 rounded-lg'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers