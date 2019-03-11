import url from "./Source";

const SOURCE = url;
let mid;

class LessonService {
    createLesson = (mid, lesson) =>
        fetch(SOURCE + "/api/module/" + mid + "/lesson", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(lesson)
        }).then(response => {
            return response.json()
        });
    findLessonById = courseId =>
        fetch(SOURCE + "/api/lesson/" + courseId)
            .then(response =>
                response.json());
    findAllLessons = mid =>
        fetch(SOURCE + "/api/module/" + mid + "/lesson")
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