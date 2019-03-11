import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import CourseService from "../services/CourseService";
import ModuleService from "../services/ModuleService";
import LessonService from "../services/LessonService";
import TopicService from "../services/TopicService";
import WidgetService from "../services/WidgetService";
import {Link} from "react-router-dom";
import WidgetListContainer from "../containers/WidgetListContainer";
import widgetReducer from '../reducers/WidgetReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

class CourseEditor extends React.Component {
    constructor(props) {
        super(props)
        this.courseService = new CourseService();
        this.moduleService = new ModuleService();
        this.lessonService = new LessonService();
        this.topicService = new TopicService();
        this.widgetService = new WidgetService();
        const courseId = parseInt(props.match.params.id);

        this.state = {
            course: '',
            module: '',
            title: '',
            lesson: '',
            topic: '',
            moduleTitle: '',
            lessonTitle: '',
            topicTitle: '',
            widgets: []
        }
        this.courseService.findCourseById(courseId)
            .then(response => this.setState({
                course: response
            }))
        this.moduleService.findAllModules(courseId)
            .then(response => this.setState({
                modules: response
            }))
        this.store = createStore(widgetReducer);
    }

    moduleRefresh = (id) =>
        this.moduleService.findAllModules(id)
            .then(response => this.setState({
                modules: response
            }))
    lessonRefresh = (id) =>
        this.lessonService.findAllLessons(id)
            .then(response => this.setState({
                lessons: response
            }))
    topicRefresh = (id) =>
        this.topicService.findAllTopics(id)
            .then(response => this.setState({
                topics: response
            }))
    widgetRefresh = (id) =>
        this.widgetService.findAllWidgetsForTopic(id)
            .then(response => this.setState({
                topics: response
            }))

    lessonTitleChanged = (event) => {
        const newTitle = event.target.value;
        this.setState(
            {
                lessonTitle: newTitle
            });
    }
    topicTitleChanged = (event) => {
        const newTitle = event.target.value;
        this.setState(
            {
                topicTitle: newTitle
            });
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
        this.lessonRefresh(module.id)
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
        this.topicRefresh(lesson.id)
    }
    createLesson = () => {
        let title = this.state.lessonTitle;

        if (title === '') {
            title = "New Lesson";
        }

        const newLesson = {
            title: title
        }

        if (!this.state.module) {
            alert("You cannot create a lesson without a selected module!");
            return;
        }
        this.lessonService.createLesson(this.state.module.id, newLesson)
            .then(() =>
                this.lessonRefresh(this.state.module.id)
            )
    }
    deleteLesson = (dLesson) => {
        this.lessonService.deleteLesson(dLesson)
            .then(() =>
                this.lessonRefresh(this.state.module.id)
            )
    }
    editLesson = (lesson) => {
        lesson.title = this.state.lessonTitle;
        this.lessonService.updateLesson(lesson)
            .then(() =>
                this.lessonRefresh(this.state.module.id)
            )
    }
    selectTopic = topic => {
        this.setState({
            topic: topic
        })
        this.store.dispatch({
            type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
            topic: topic
        });
        this.topicService.findAllWidgets(topic.id)
            .then(response => this.setState({
                widgets: response
            }))
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

        let title = this.state.topicTitle;

        if (title === '') {
            title = "New Topic";
        }

        const newTopic = {
            title: title
        }

        if (!this.state.lesson) {
            alert("You cannot create a topic without a selected lesson!");
            return;
        }
        this.topicService.createTopic(this.state.lesson.id, newTopic)
            .then(() =>
                this.topicRefresh(this.state.lesson.id)
            )

    }
    deleteTopic = (dTopic) => {
        this.topicService.deleteTopic(dTopic)
            .then(() =>
                this.topicRefresh(this.state.lesson.id)
            )
    }
    editTopic = (topic) => {
        topic.title = this.state.topicTitle;
        this.topicService.updateTopic(topic)
            .then(() =>
                this.topicRefresh(this.state.lesson.id)
            )
    }

    setTitle = (title) => {
        this.setState({
            title: title
        })
    }

    createModule = () => {
        let title = this.state.moduleTitle;

        if (title === '') {
            title = "New Module";
        }

        const newModule = {
            title: title
        }

        this.moduleService.createModule(this.state.course.id, newModule)
            .then(() =>
                this.moduleRefresh(this.state.course.id)
            )
    }
    moduleTitleChanged = (event) => {
        const newTitle = event.target.value;
        this.setState(
            {
                moduleTitle: newTitle
            });
    }
    deleteModule = (dModule) => {
        this.moduleService.deleteModule(dModule)
            .then(() =>
                this.moduleRefresh(this.state.course.id)
            )
    }
    editModule = (module) => {
        module.title = this.state.moduleTitle;
        this.moduleService.updateModule(module)
            .then(() =>
                this.moduleRefresh(this.state.course.id)
            )
    }

    render() {
        return (
            <div>
                <h2>Course Editor: {this.state.course.title}</h2>
                <Link to="/"><h6 style={{marginBottom: "2em"}}>Return home</h6></Link>
                <hr/>
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12" style={{marginBottom: "2em"}}>
                        <ModuleList
                            modules={this.state.modules}
                            createModule={this.createModule}
                            deleteModule={this.deleteModule}
                            editModule={this.editModule}
                            highlightModule={this.highlightModule}
                            selectModule={this.selectModule}
                            setTitle={this.setTitle}
                            moduleTitleChanged={this.moduleTitleChanged}/>
                    </div>
                    <div className="col-8">
                        <LessonTabs
                            lessons={this.state.lessons}
                            createLesson={this.createLesson}
                            deleteLesson={this.deleteLesson}
                            editLesson={this.editLesson}
                            highlightLesson={this.highlightLesson}
                            selectLesson={this.selectLesson}
                            lessonTitleChanged={this.lessonTitleChanged}/>
                        <hr/>
                        <TopicPills
                            topics={this.state.topics}
                            createTopic={this.createTopic}
                            deleteTopic={this.deleteTopic}
                            editTopic={this.editTopic}
                            highlightTopic={this.highlightTopic}
                            selectTopic={this.selectTopic}
                            topicTitleChanged={this.topicTitleChanged}/>
                        <hr/>
                        <Provider store={this.store}>
                            <WidgetListContainer/>
                        </Provider>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseEditor