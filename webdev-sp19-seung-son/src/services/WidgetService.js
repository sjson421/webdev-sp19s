import url from "./Source";

const SOURCE = url;

class WidgetService {
    findWidgetById = courseId =>
        fetch(SOURCE + "/api/widget/" + courseId)
            .then(response =>
                response.json());
    findAllWidgets = () =>
        fetch(SOURCE + "/api/widget")
            .then(response => {
                return response.json()
            });
    updateWidget = course => {
        return fetch(SOURCE + '/api/widget/' + course.id, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(course)
        }).then(response => response.json())
    }

    deleteWidget = deleteCourse =>
        fetch(SOURCE + "/api/widget/" + deleteCourse.id, {
            method: 'DELETE'
        }).then(response => {
            return response.json();
        });
}

export default WidgetService