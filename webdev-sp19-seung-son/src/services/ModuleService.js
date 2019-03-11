import url from "./Source";

const SOURCE = url;
let cid;

class ModuleService {
    createModule = (cid, module) =>
        fetch(SOURCE + "/api/courses/" + cid + "/modules", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(module)
        }).then(response => {
            return response.json()
        });
    findModuleById = courseId =>
        fetch(SOURCE + "/api/modules/" + courseId)
            .then(response =>
                response.json());
    findAllModules = cid =>
        fetch(SOURCE + "/api/courses/" + cid + "/modules")
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