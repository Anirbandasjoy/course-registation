import React, { useEffect, useState } from 'react'
import Courses from './components/Courses';

const App = () => {

  return (
    <div className='container mx-auto'>
      <div className='text-center text-3xl my-10 font-semibold'>Course Registration</div>
      <Courses />
    </div>

  )
}

export default App