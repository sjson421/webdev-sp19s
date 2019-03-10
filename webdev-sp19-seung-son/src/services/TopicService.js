import url from "./Source";

const SOURCE = url;
let lid;

class TopicService {
    constructor(lid) {
        this.lid = lid;
    }

    findTopicById = courseId =>
        fetch(SOURCE + "/api/topic/" + courseId)
            .then(response =>
                response.json());
    findAllTopics = () =>
        fetch(SOURCE + "/api/lesson/" + this.lid + "/topic")
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
}

export default TopicService