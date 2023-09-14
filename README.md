#Discuss how you managed the state in your assignment project.

    App Component : In my main App component, the main states are defined. In this component three states named courseData, isLoading, and error are defined using the useState hook. With these states I can do my data loading and error handling.

    Courses Component: My Courses component has many states defined, which help to select and manage courses. The states selectedCourse, credit, and remaining store information about course selection and credit.

    Course Component: In this component the handelClickEvent function is called with the course selection button. When a new course is selected in this function, it is added to the state and managed with respect to credit limits and remaining credit hours.

    By properly managing these states, data is kept in control towards selection and application, which helps users to select and manage courses.
