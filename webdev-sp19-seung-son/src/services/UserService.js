class UserService {
    register = (user) =>
        fetch("/api/register", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(response =>
            response.json());
    profile = () =>
        fetch("/api/profile")
            .then(response => response.json());
    login = user =>
        fetch('/api/login', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(response => response.json());
    logout = () =>
        fetch('/api/logout', {
            method: "POST"
        });
    findCourseById = courseId =>
        fetch("/api/users/" + courseId)
            .then(response =>
                response.json());
    findAllUsers = () =>
        fetch("/api/users")
            .then(response =>
                response.json());
}

export default UserService;