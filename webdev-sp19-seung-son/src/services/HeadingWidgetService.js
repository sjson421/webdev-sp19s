import url from "./Source";

const SOURCE = url;

class HeadingWidgetService {
    createWidget = (tid, widget) =>
        fetch(SOURCE + "/api/topic/" + tid + "/heading/widget", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(widget)
        }).then(response => {
            return response.json()
        });
    findHeadingWidgetById = courseId =>
        fetch(SOURCE + "/api/heading/widget/" + courseId)
            .then(response =>
                response.json());
    findAllHeadingWidgets = () =>
        fetch(SOURCE + "/api/heading/widget")
            .then(response => {
                return response.json()
            });
    updateHeadingWidget = course => {
        return fetch(SOURCE + '/api/heading/widget/' + course.id, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(course)
        }).then(response => response.json())
    }
    deleteHeadingWidget = deleteCourse =>
        fetch(SOURCE + "/api/heading/widget/" + deleteCourse.id, {
            method: 'DELETE'
        }).then(response => {
            return response.json();
        });
}

export default HeadingWidgetService