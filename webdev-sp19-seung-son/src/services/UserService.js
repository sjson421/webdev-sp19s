class UserService {
    //register, profile, login, logout, findAllUsers, findUserById
    createCourse = course => {
        if (course === null) {
            course = {
                id: (new Date()).getTime(),
                title: 'New Course'
            }
        }
        course.modules = [];

        fetch(COURSES_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(course)
        }).then(response =>
            response.json());
    }
    findCourseById = courseId =>
        fetch("api/users/" + courseId)
            .then(response =>
                response.json());
    findAllUsers = () =>
        fetch("/api/users")
            .then(response =>
                response.json());
}
export default UserService;