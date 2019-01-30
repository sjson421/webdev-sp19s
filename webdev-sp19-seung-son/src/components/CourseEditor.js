import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import CourseService from "../services/CourseService"

class CourseEditor extends React.Component {
    constructor(props) {
        super(props)
        this.courseService = new CourseService()
        const courseId = parseInt(props.match.params.id)
        const course = this.courseService.findCourseById(courseId)
        this.state = {
            course: course,
            module: course.modules[0],
            title: ''
        }
        if (this.state.module.lessons) {
            this.state.lesson = this.state.module.lessons[0];
            if (this.state.module.lessons[0].topics) {
                this.state.topic = this.state.module.lessons[0].topics[0];
            } else {
                this.state.topic = null;
            }
        } else {
            this.state.lesson = null;
            this.state.topic = null;
        }
    }

    setTitle = (title) => {
        this.state.title = title;
    }
    getTitle = () => {
        return this.state.title;
    }
    highlightModule = (event) => {
        const modulesList = event.target.parentElement.parentElement.getElementsByTagName("li")
        for (let i = 0; i < modulesList.length; i++) {
            if (modulesList[i].className === "list-group-item bg-warning") {
                modulesList[i].className = "list-group-item"
            }
        }
        event.target.parentElement.className = "list-group-item bg-warning";
    }
    selectModule = module => {
        this.setState({
            module: module,
            lessons: module.lessons
        })
    }
    highlightLesson = (event) => {
        const lessonsList = event.target.parentElement.parentElement.getElementsByTagName("li")
        for (let i = 0; i < lessonsList.length; i++) {
            if (lessonsList[i].className === "nav-group-item bg-warning") {
                lessonsList[i].className = "nav-group-item"
            }
        }
        event.target.parentElement.className = "nav-group-item bg-warning";
    }
    selectLesson = lesson => {
        this.setState({
            lesson: lesson
        })
    }
    createLesson = () => {
        let title = this.getTitle();

        if (title === '') {
            title = "New Lesson";
        }

        const newLesson = {
            id: (new Date()).getTime(),
            title: title
        }

        if (!this.state.module.lessons) {
            this.state.module.lessons = [newLesson]
        } else {
            this.state.module.lessons.push(newLesson);
        }
        this.setState({
            lessons: {
                ...this.state.module.lessons
            }
        });
    }
    deleteLesson = (dLesson) => {
        const newLessons = this.state.module.lessons.filter(
            lesson => lesson.id !== dLesson.id
        )
        this.state.module.lessons = newLessons;
        this.setState({
            module: this.state.module
        })
    }
    editLesson = (lesson) => {
        const lessons = this.state.module.lessons;
        let title = this.getTitle();
        if (title === '') {
            title = "No Title"
        }
        for (let i = 0; i < lessons.length; i++) {
            if (lessons[i].id === lesson.id) {
                lessons[i].title = title;
                break;
            }
        }
        this.setState(
            {
                module: {
                    lessons: [...lessons]
                }
            }
        )
    }

    createLesson = () => {
        let title = this.getTitle();

        if (title === '') {
            title = "New Lesson";
        }

        const newLesson = {
            id: (new Date()).getTime(),
            title: title
        }

        if (!this.state.module.lessons) {
            this.state.module.lessons = [newLesson]
        } else {
            this.state.module.lessons.push(newLesson);
        }
        this.setState({
            lessons: {
                ...this.state.module.lessons
            }
        });
    }
    createTopic = () => {
        let title = this.getTitle();

        if (title === '') {
            title = "New Topic";
        }

        const newTopic = {
            id: (new Date()).getTime(),
            title: title
        }

        if (!this.state.module.lessons) {
            alert("You cannot create a topic without any lessons!");
        } else {
            if (!this.state.lesson.topics) {
                this.state.lesson.topics = [newTopic]
            } else {
                this.state.lesson.topics.push(newTopic);
            }
        }
        this.setState({
            topics: {
                ...this.state.lesson.topics
            }
        });
    }

    render() {
        return (
            <div>
                <h2>Course Editor: {this.state.course.title}</h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList
                            modules={this.state.course.modules}
                            highlightModule={this.highlightModule}
                            selectModule={this.selectModule}
                            setTitle={this.setTitle}/>
                    </div>
                    <div className="col-8">
                        <LessonTabs
                            lessons={this.state.module.lessons}
                            createLesson={this.createLesson}
                            deleteLesson={this.deleteLesson}
                            editLesson={this.editLesson}
                            highlightLesson={this.highlightLesson}
                            selectLesson={this.selectLesson}/>
                        <hr/>
                        <TopicPills
                            topics={this.state.lesson.topics}
                            createTopic={this.createTopic}
                            deleteTopic={this.deleteTopic}
                            editTopic={this.editTopic}
                            highlightTopic={this.highlightTopic}
                            selectTopic={this.selectTopic}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseEditor