import React, { useContext } from 'react'   
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext)

  return (
  <div id='alltask' className='bg-[#1c1c1c] p-5 rounded mt-5'>
    <div className='bg-emerald-400 mb-2 py-2 px-4 flex justify-between rounded'>
      <h2 className='w-1/5 font-medium text-lg'>Employee Name</h2>
      <h2 className='w-1/5 font-medium text-lg'>New Task</h2>
      <h2 className='w-1/5 font-medium text-lg'>Active Task</h2>
      <h2 className='w-1/5 font-medium text-lg'>Completed Task</h2>
      <h2 className='w-1/5 font-medium text-lg'>Failed Task</h2>
    </div>

    <div>
      {userData.map(function(elem,idx){

      return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between items-center rounded'>
      <h2 className='w-1/5 font-medium text-lg'>{elem.firstname}</h2>
      <h3 className='w-1/5 font-medium text-lg'>{elem.taskNumbers.newTask}</h3>
      <h3 className='w-1/5 font-medium text-lg'>{elem.taskNumbers.active}</h3>
      <h3 className='w-1/5 font-medium text-lg'>{elem.taskNumbers.completed}</h3>
      <h3 className='w-1/5 font-medium text-lg'>{elem.taskNumbers.failed}</h3>
      </div>
      })}
    </div>
  </div>

  )
}

export default AllTask