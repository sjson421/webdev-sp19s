import courses from './courses.json'

class CourseService {
    constructor() {
        this.courses = courses;
    }

    addCourse = course => {
        if (course === null) {
            course = {
                id: (new Date()).getTime(),
                title: 'New Course'
            }
        }
        this.courses.push(course)
        return this.courses
    }
    findCourseById = courseId =>
        this.courses = this.courses.find(
            course => course.id === courseId
        )
    findAllCourses = () =>
        this.courses;
    deleteCourse = deleteCourse =>
        this.courses = this.courses.filter(
            course => course.id !== deleteCourse.id
        )

    updateCourse = (id, course) => {
        let courses = this.courses;

        for (let i = 0; i < courses.length; i++) {
            if (id === courses[i].id){
                courses[i] = course;
                break;
            }
        }
        this.courses = courses;
    }
}

export default CourseService