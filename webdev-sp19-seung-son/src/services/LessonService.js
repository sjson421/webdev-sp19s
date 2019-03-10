import url from "./Source";

const SOURCE = url;
let mid;

class LessonService {
    constructor(mid) {
        this.mid = mid;
    }

    findLessonById = courseId =>
        fetch(SOURCE + "/api/lesson/" + courseId)
            .then(response =>
                response.json());
    findAllLessons = () =>
        fetch(SOURCE + "/api/module/" + this.mid + "/lesson")
            .then(response => {
                return response.json()
            });
    updateLesson = course => {
        return fetch(SOURCE + '/api/lesson/' + course.id, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(course)
        }).then(response => response.json())
    }

    deleteLesson = deleteCourse =>
        fetch(SOURCE + "/api/lesson/" + deleteCourse.id, {
            method: 'DELETE'
        }).then(response => {
            return response.json();
        });
}

export default LessonService