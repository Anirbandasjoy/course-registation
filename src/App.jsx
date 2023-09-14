import React, { useEffect, useState } from 'react'
import Courses from './components/Courses';

const App = () => {
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./data.json");
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setCourseData(data);

      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='container mx-auto'>
      <div className='text-center text-3xl my-10 font-semibold'>Course Registration</div>
      <Courses courseData={courseData} />

    </div>

  )
}

export default App