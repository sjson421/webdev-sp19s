import url from "./Source";

const SOURCE = url;

class ImageWidgetService {
    findImageWidgetById = courseId =>
        fetch(SOURCE + "/api/image/widget/" + courseId)
            .then(response =>
                response.json());
    findAllImageWidgets = () =>
        fetch(SOURCE + "/api/image/widget")
            .then(response => {
                return response.json()
            });
    updateImageWidget = course => {
        return fetch(SOURCE + '/api/image/widget/' + course.id, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(course)
        }).then(response => response.json())
    }

    deleteImageWidget = deleteCourse =>
        fetch(SOURCE + "/api/image/widget/" + deleteCourse.id, {
            method: 'DELETE'
        }).then(response => {
            return response.json();
        });
}

export default ImageWidgetService