import React from 'react'
import Course from './Course'


const Courses = ({ courseData }) => {
    return (
        <div className='flex flex-col sm:flex-row justify-center gap-4'>

            <div className='w-full sm:w-3/4 text-center  grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 min-h-screen'>
                {
                    courseData.map((course) => <Course key={course.id} course={course} />)
                }
            </div>


            <div className='w-full sm:w-1/4  shadow-xl h-fit p-5 rounded-md' >
                <h1 className='text-[#2F80ED] text-lg font-semibold'>Credit Hour Remaining 7 hr</h1>
                <div className='h-[1px] w-full my-4 bg-gray-400'></div>
                <h1 className='text-xl font-semibold'>Course Name</h1>
                <div className='mt-6'>
                    <ol>
                        <li>hello</li>
                        <li>i am clicked</li>
                    </ol>
                </div>
                <div className='h-[1px] w-full my-4 bg-gray-200'></div>
                <h2>Total Credit Hour : 13</h2>

            </div>
        </div>
    )
}

export default Courses