import url from "./Source";

const SOURCE = url;
let lid;

class TopicService {
    createTopic = (lid, topic) =>
        fetch(SOURCE + "/api/lesson/" + lid + "/topic", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(topic)
        }).then(response => {
            return response.json()
        });
    findTopicById = courseId =>
        fetch(SOURCE + "/api/topic/" + courseId)
            .then(response =>
                response.json());
    findAllTopics = lid =>
        fetch(SOURCE + "/api/lesson/" + lid + "/topic")
            .then(response => {
                return response.json()
            });
    updateTopic = course => {
        return fetch(SOURCE + '/api/topic/' + course.id, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(course)
        }).then(response => response.json())
    }

    deleteTopic = deleteCourse =>
        fetch(SOURCE + "/api/topic/" + deleteCourse.id, {
            method: 'DELETE'
        }).then(response => {
            return response.json();
        });

    createWidget = (tid, widget) =>
        fetch(SOURCE + '/api/topic/' + tid + "widget", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(widget)
        }).then(response => response.json())
    findAllWidgets = tid =>
        fetch(SOURCE + "/api/topic/" + tid + "/widget")
            .then(response => {
                return response.json()
            });
}

export default TopicService