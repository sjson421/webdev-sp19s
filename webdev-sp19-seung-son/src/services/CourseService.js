import url from "./Source";

const SOURCE = url + "/api/courses";

class CourseService {
    createCourse = course =>
        fetch(SOURCE, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(course)
        }).then(response => {
            return response.json()
        });
    findCourseById = courseId =>
        fetch(SOURCE + "/" + courseId)
            .then(response =>
                response.json());
    findAllCourses = () =>
        fetch(SOURCE)
            .then(response => {
                return response.json()
            });
    deleteCourse = deleteCourse =>
        fetch(SOURCE + "/" + deleteCourse.id, {
            method: 'DELETE'
        }).then(response => {
            return response.json();
        });
    updateCourse = course => {
        return fetch(SOURCE + '/' + course.id, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(course)
        }).then(response => response)
    }
}

export default CourseService