import url from "./Source";

const SOURCE = url;

class LinkWidgetService {
    findLinkWidgetById = courseId =>
        fetch(SOURCE + "/api/link/widget/" + courseId)
            .then(response =>
                response.json());
    findAllLinkWidgets = () =>
        fetch(SOURCE + "/api/link/widget")
            .then(response => {
                return response.json()
            });
    updateLinkWidget = course => {
        return fetch(SOURCE + '/api/link/widget/' + course.id, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(course)
        }).then(response => response.json())
    }

    deleteLinkWidget = deleteCourse =>
        fetch(SOURCE + "/api/link/widget/" + deleteCourse.id, {
            method: 'DELETE'
        }).then(response => {
            return response.json();
        });
}

export default LinkWidgetService