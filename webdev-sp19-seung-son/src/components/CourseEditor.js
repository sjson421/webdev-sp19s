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
            module: '',
            title: '',
            lesson: '',
            topic: ''
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
            lesson: ''
        })
    }
    deleteModuleCascade = (deleteModule) => {
        if (this.state.module === deleteModule) {
            this.state.lesson = '';
            this.state.module = ''
        }
        this.setState({
            module: this.state.module,
            lesson: this.state.lesson
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


        if (!this.state.module) {
            alert("You cannot create a lesson without a selected module!");
            return;
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
        const myLessons = this.state.module.lessons;
        let index = 0;

        for (var i = 0; i < myLessons.length; i++) {
            if (myLessons[i].id == dLesson.id) {
                index = i;
                break;
            }
        }
        if (this.state.lesson === myLessons[i]) {
            this.state.lesson = '';
        }
        const newLessons = this.state.module.lessons.filter(
            lesson => lesson.id !== dLesson.id
        )
        this.state.module.lessons = newLessons;
        this.setState({
            lesson: this.state.lesson
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
    selectTopic = topic => {
        this.setState({
            topic: topic
        })
    }
    highlightTopic = (event) => {
        const topicsList = event.target.parentElement.parentElement.getElementsByTagName("li")
        for (let i = 0; i < topicsList.length; i++) {
            if (topicsList[i].className === "nav-group-item bg-warning") {
                topicsList[i].className = "nav-group-item"
            }
        }
        event.target.parentElement.className = "nav-group-item bg-warning";
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

        if (!this.state.lesson) {
            alert("You cannot create a topic without a selected lesson!");
            return;
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
    deleteTopic = (dTopic) => {
        const newTopics = this.state.lesson.topics.filter(
            topic => topic.id !== dTopic.id
        )
        this.state.lesson.topics = newTopics;
        this.setState({
            lesson: this.state.lesson
        })
    }
    editTopic = (topic) => {
        const topics = this.state.lesson.topics;
        let title = this.getTitle();
        if (title === '') {
            title = "No Title"
        }
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === topic.id) {
                topics[i].title = title;
                break;
            }
        }
        console.log(topics)
        this.setState(
            {
                lesson: {
                    topics: [...topics]
                }
            }
        )
    }

    editCourse = () => {
        const title = this.getTitle();
        const id = parseInt(this.props.match.params.id);
        this.courseService.updateCourse(id, )
    }


render() {
    return (
        <div>
            <h2>Course Editor: {this.state.course.title}
                <i className="fa fa-pencil"
                   style={{margin: "0 1%", cursor: "pointer"}}
                   onClick={() => {
                       this.editCourse(module)
                   }}></i></h2>
            <div className="row">
                <div className="col-4">
                    <ModuleList
                        modules={this.state.course.modules}
                        highlightModule={this.highlightModule}
                        selectModule={this.selectModule}
                        setTitle={this.setTitle}
                        deleteModuleCascade={this.deleteModuleCascade}/>
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