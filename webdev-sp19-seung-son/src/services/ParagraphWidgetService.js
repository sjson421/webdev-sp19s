import url from "./Source";

const SOURCE = url;

class ParagraphWidgetService {
    findParagraphWidgetById = courseId =>
        fetch(SOURCE + "/api/paragraph/widget/" + courseId)
            .then(response =>
                response.json());
    findAllParagraphWidgets = () =>
        fetch(SOURCE + "/api/paragraph/widget")
            .then(response => {
                return response.json()
            });
    updateParagraphWidget = course => {
        return fetch(SOURCE + '/api/paragraph/widget/' + course.id, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(course)
        }).then(response => response.json())
    }

    deleteParagraphWidget = deleteCourse =>
        fetch(SOURCE + "/api/paragraph/widget/" + deleteCourse.id, {
            method: 'DELETE'
        }).then(response => {
            return response.json();
        });
}

export default ParagraphWidgetService