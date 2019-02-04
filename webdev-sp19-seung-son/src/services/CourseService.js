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
                                    //REMOVE IF NOT NEEDED
                                    this.courses[i].modules[j].lessons[k].topics[l].widgets = widgets;
                                }
                        }
                }
        }
    }


    findWidgets = topicId => {
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
                                            //REMOVE IF NOT NEEDED
                                            this.courses[i].modules[j].lessons[k].topics[l].widgets[m] = curWidget;
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
                                        //REMOVE IF NOT NEEDED
                                        this.courses[i].modules[j].lessons[k].topics[l].widgets = widgets;
                                    }
                                }
                        }
                }
        }
    }

}

export default CourseService