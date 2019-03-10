import url from "./Source";

const SOURCE = url;
let cid;

class ModuleService {
    constructor(cid) {
        this.cid = cid;
    }

    findModuleById = courseId =>
        fetch(SOURCE + "/api/modules/" + courseId)
            .then(response =>
                response.json());
    findAllModules = () =>
        fetch(SOURCE + "/api/courses/" + this.cid + "/modules")
            .then(response => {
                return response.json()
            });
    updateModule = course => {
        return fetch(SOURCE + '/api/modules/' + course.id, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(course)
        }).then(response => response.json())
    }

    deleteModule = deleteCourse =>
        fetch(SOURCE + "/api/modules/" + deleteCourse.id, {
            method: 'DELETE'
        }).then(response => {
            return response.json();
        });
}

export default ModuleService