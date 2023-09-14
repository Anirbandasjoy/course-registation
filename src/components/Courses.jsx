import React, { useState } from 'react'
import toast from "react-hot-toast"
import Course from './Course'

const Courses = ({ courseData }) => {

    const [selectedCourse, setSelectedCourse] = useState([]);
    const [credit, setCredit] = useState(0);
    const [remaining, setRemaining] = useState(20);

    const handelClickEvent = (course) => {
        const isCourseAlreadyExist = selectedCourse.find((c) => c.id === course.id);

        if (isCourseAlreadyExist) {
            toast.error("course already added");
        } else {
            const newCredit = credit + course.Credit;

            if (newCredit > 20) {
                toast.error("credit limit exceeded");
            } else {
                const newRemaining = 20 - newCredit;
                setCredit(newCredit);
                setRemaining(newRemaining);
                toast.success("course added");
                setSelectedCourse([...selectedCourse, course]);
            }
        }
    }

    return (
        <div className='flex flex-col sm:flex-row justify-center gap-4'>

            <div className='w-full sm:w-3/4 text-center  grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 min-h-screen'>
                {
                    courseData.map((course) => <Course key={course.id} course={course} handelClickEvent={handelClickEvent} />)
                }
            </div>

            <div className='w-full sm:w-1/4  shadow-xl h-fit p-5 rounded-md' >
                <h1 className='text-[#2F80ED] text-lg font-semibold'>Credit Hour Remaining {remaining} hr</h1>
                <div className='h-[1px] w-full my-4 bg-gray-400'></div>
                <h1 className='text-xl font-semibold'>Course Name</h1>
                <div className='mt-6 ml-4 list-decimal space-y-3'>
                    {
                        selectedCourse.map((course) => {
                            return <li key={course.id}>{course.title}</li>
                        })
                    }
                </div>
                <div className='h-[1px] w-full my-4 bg-gray-200'></div>
                <h2 className='font-semibold'>Total Credit Hour : {credit}</h2>

            </div>
        </div>
    )
}

export default Courses