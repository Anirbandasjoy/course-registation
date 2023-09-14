import React, { useEffect, useState } from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import Courses from './components/Courses';

const App = () => {
  const [courseData, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./data.json");
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setCourseData(data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  return (
    <div className='container mx-auto'>
      {isLoading ? (
        <div className='flex justify-center h-screen items-center'>
          <FadeLoader color="#36d7b7" />
        </div>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          <div className='text-center text-3xl my-10 font-semibold'>Course Registration</div>
          <Courses courseData={courseData} />
        </div>
      )}
    </div>
  );
}

export default App;
