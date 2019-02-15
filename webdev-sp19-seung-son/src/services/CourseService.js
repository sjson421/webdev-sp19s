import courses from './courses.json'

const COURSES_URL = "http://localhost:8080/api/courses";

class CourseService {
    constructor() {
        this.courses = courses;
    }

    createCourse = course =>
        fetch(COURSES_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(course)
        }).then(response => {
            return response.json()
        });
    findCourseById = courseId =>
        fetch(COURSES_URL + "/" + courseId)
            .then(response =>
                response.json());
    findAllCourses = () =>
        fetch(COURSES_URL)
            .then(response => {
                return response.json()
            });


    deleteCourse = deleteCourse =>
        fetch(COURSES_URL + "/" + deleteCourse.id, {
            method: 'DELETE'
        }).then(response => {
            return response.json();
        });

    createWidget = (topicId, widget) => {
        for (let i = 0; i < this.courses.length; i++) {
            const modules = this.courses[i].modules;
            if (modules != null)
                for (let j = 0; j < modules.length; j++) {
                    const lessons = modules[j].lessons;
                    if (lessons != null)
                        for (let k = 0; k < lessons.length; k++) {
                            const topics = lessons[k].topics;
                            if (topics != null)
                                for (let l = 0; l < topics.length; l++) {
                                    let widgets = topics[l].widgets;
                                    if (widgets != null) {
                                        widgets.push(widget);
                                    } else {
                                        widgets = [widget];
                                    }
                                }
                        }
                }
        }
    }


    findWidgets = topicId => {
        for (let i = 0; i < courses.length; i++) {
            const modules = this.courses[i].modules;
            if (modules != null)
                for (let j = 0; j < modules.length; j++) {
                    const lessons = modules[j].lessons;
                    if (lessons != null)
                        for (let k = 0; k < lessons.length; k++) {
                            const topics = lessons[k].topics;
                            if (topics != null)
                                for (let l = 0; l < topics.length; l++) {
                                    const curTopic = topics[l];
                                    if (curTopic.id === topicId) {
                                        return curTopic.widgets;
                                    }
                                }
                        }
                }
        }
        return [];
    }
    findWidget = widgetId => {
        for (let i = 0; i < this.courses.length; i++) {
            const modules = this.courses[i].modules;
            if (modules != null)
                for (let j = 0; j < modules.length; j++) {
                    const lessons = modules[j].lessons;
                    if (lessons != null)
                        for (let k = 0; k < lessons.length; k++) {
                            const topics = lessons[k].topics;
                            if (topics != null)
                                for (let l = 0; l < topics.length; l++) {
                                    const widgets = topics[l].widgets;
                                    if (widgets != null)
                                        for (let m = 0; m < widgets.length; m++) {
                                            const curWidget = widgets[m];
                                            if (curWidget.id === widgetId) {
                                                return curWidget;
                                            }
                                        }
                                }
                        }
                }
        }
        return null;
    }

    updateWidget = (widgetId, widget) => {
        for (let i = 0; i < this.courses.length; i++) {
            const modules = this.courses[i].modules;
            if (modules != null)
                for (let j = 0; j < modules.length; j++) {
                    const lessons = modules[j].lessons;
                    if (lessons != null)
                        for (let k = 0; k < lessons.length; k++) {
                            const topics = lessons[k].topics;
                            if (topics != null)
                                for (let l = 0; l < topics.length; l++) {
                                    let widgets = topics[l].widgets;
                                    if (widgets != null) {
                                        for (let m = 0; m < widgets.length; m++) {
                                            let curWidget = widgets[m];
                                            if (curWidget.id === widgetId) {
                                                curWidget = {
                                                    ...widget
                                                }
                                            }
                                        }
                                    }
                                }
                        }
                }
        }
    }
    deleteWidget = (widgetId) => {
        for (let i = 0; i < this.courses.length; i++) {
            const modules = this.courses[i].modules;
            if (modules != null)
                for (let j = 0; j < modules.length; j++) {
                    const lessons = modules[j].lessons;
                    if (lessons != null)
                        for (let k = 0; k < lessons.length; k++) {
                            const topics = lessons[k].topics;
                            if (topics != null)
                                for (let l = 0; l < topics.length; l++) {
                                    let widgets = topics[l].widgets;
                                    if (widgets != null) {
                                        for (let m = 0; m < widgets.length; m++) {
                                            const curWidget = widgets[m];
                                            widgets = widgets.filter(
                                                widget => widget.id !== widgetId
                                            )
                                        }
                                    }
                                }
                        }
                }
        }
    }
    findAllWidgets = () => {
        let widgets = [];
        for (let i = 0; i < courses.length; i++) {
            const modules = this.courses[i].modules;
            if (modules != null)
                for (let j = 0; j < modules.length; j++) {
                    const lessons = modules[j].lessons;
                    if (lessons != null)
                        for (let k = 0; k < lessons.length; k++) {
                            const topics = lessons[k].topics;
                            if (topics != null)
                                for (let l = 0; l < topics.length; l++) {
                                    const curTopic = topics[l];
                                        widgets.push(...curTopic.widgets);
                                }
                        }
                }
        }
        return widgets;
    }
}

export default CourseService