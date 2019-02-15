const SOURCE = "http://localhost:8080";

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

class UserService {

    register = (user) =>
        fetch(SOURCE + "/api/register", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(user)
        }).then(response => {
            return response.text().then(function (text) {
                return isJson(text) ? JSON.parse(text) : null
            })
        });
    profile = () =>
        fetch(SOURCE + "/api/profile", {
            credentials: 'include'
        })
            .then(response => {
                return response.text().then(function (text) {
                    return isJson(text) ? JSON.parse(text) : null
                })
            });
    login = user =>
        fetch(SOURCE + '/api/login', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(user)
        }).then(response => {
            return response.text().then(function (text) {
                return isJson(text) ? JSON.parse(text) : null
            })
        })
    logout = () =>
        fetch(SOURCE + '/api/logout', {
            method: "POST",
            credentials: 'include'
        });
    findCourseById = courseId =>
        fetch(SOURCE + "/api/users/" + courseId)
            .then(response =>
                response.json());
    findAllUsers = () =>
        fetch(SOURCE + "/api/users")
            .then(response =>
                response.json());
    updateUser = user => {
        return fetch(SOURCE + '/api/profile', {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(user)
        }).then(response => response)
    }
}

export default UserService;