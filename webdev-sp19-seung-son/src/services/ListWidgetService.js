import url from "./Source";

const SOURCE = url;

class ListWidgetService {
    findListWidgetById = courseId =>
        fetch(SOURCE + "/api/list/widget/" + courseId)
            .then(response =>
                response.json());
    findAllListWidgets = () =>
        fetch(SOURCE + "/api/list/widget")
            .then(response => {
                return response.json()
            });
    updateListWidget = course => {
        return fetch(SOURCE + '/api/list/widget/' + course.id, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(course)
        }).then(response => response.json())
    }

    deleteListWidget = deleteCourse =>
        fetch(SOURCE + "/api/list/widget/" + deleteCourse.id, {
            method: 'DELETE'
        }).then(response => {
            return response.json();
        });
}

export default ListWidgetService