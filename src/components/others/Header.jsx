import React, { useState, useEffect } from 'react'

const Header = (props) => {

  const [username, setUsername] = useState('')

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser); // Parse the JSON string
        setUsername(userData.data.firstname); // Set the firstname or default to 'Admin'
      } catch (error) {
        console.error('Error parsing loggedInUser:', error);
        setUsername('Admin');
      }
    } else {
      setUsername('Admin');
    }
  }, []); // Runs only once when the component mounts

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{username} 👋🏼</span></h1>
        <button onClick={logOutUser} className='bg-red-600 font-medium text-lg text-white rounded-lg px-5 py-2'>Log Out</button>
    </div>
  )
}

export default Header