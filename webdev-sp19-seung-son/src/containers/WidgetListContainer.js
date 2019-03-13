import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'
import TopicService from '../services/TopicService'
import HeadingWidgetService from '../services/HeadingWidgetService'
import CourseEditor from '../components/CourseEditor'
import ImageWidgetService from "../services/ImageWidgetService";
import LinkWidgetService from "../services/LinkWidgetService";
import ListWidgetService from "../services/ListWidgetService";
import ParagraphWidgetService from "../services/ParagraphWidgetService";

const topicService = new TopicService();
const headingService = new HeadingWidgetService();
const imageService = new ImageWidgetService();
const linkService = new LinkWidgetService();
const listService = new ListWidgetService();
const paragraphService = new ParagraphWidgetService();

const stateToPropertyMapper = state => {
    return {
        widgets: state.widgets
    }
}
const dispatchToPropertyMapper = (dispatch, widgets) => ({
    createWidget: () => {
        const widget = {
            name: 'New Widget',
            type: 'HEADING',
            text: 'New Widget',
            size: 1
        }
        headingService.createWidget(1, widget)
            .then(tid => {
                topicService.findAllWidgets(tid)
                    .then((response) => {
                        dispatch({
                            type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
                            response: response
                        })
                    })
            })
    },
    deleteWidget: widget =>
        dispatch({
            type: 'DELETE_WIDGET',
            widget: widget
        }),

    updateWidget: widget =>
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),
    findWidget: widget =>
        dispatch({
            type: 'FIND_WIDGET',
            widget: widget
        }),
    findAllWidgetsForTopic: topic => {
        dispatch({
            type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
            topic: topic
        });
    },
    findAllWidgets: () =>
        dispatch({
            type: 'FIND_ALL_WIDGETS'
        }),
    changeWidgetType: widget =>
        dispatch({
            type: 'CHANGE_WIDGET_TYPE',
            widget:widget
        }),
    updateWidgets: widgets =>
        dispatch({
            type: 'UPDATE_WIDGETS',
            widgets: widgets
        }),
    updateHeadingWidget: widget =>
        headingService.updateHeadingWidget(widget)
            .then(tid => {
                topicService.findAllWidgets(tid)
                    .then((response) => {
                        dispatch({
                            type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
                            response: response
                        })
                    })
            }),
    updateParagraphWidget: widget =>
        paragraphService.updateParagraphWidget(widget)
            .then(tid => {
                topicService.findAllWidgets(tid)
                    .then((response) => {
                        dispatch({
                            type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
                            response: response
                        })
                    })
            }),
    updateListWidget: widget =>
        listService.updateListWidget(widget)
            .then(tid => {
                topicService.findAllWidgets(tid)
                    .then((response) => {
                        dispatch({
                            type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
                            response: response
                        })
                    })
            }),
    updateImageWidget: widget =>
        imageService.updateImageWidget(widget)
            .then(tid => {
                topicService.findAllWidgets(tid)
                    .then((response) => {
                        dispatch({
                            type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
                            response: response
                        })
                    })
            }),
    updateLinkWidget: widget =>
        linkService.updateLinkWidget(widget)
            .then(tid => {
                topicService.findAllWidgets(tid)
                    .then((response) => {
                        dispatch({
                            type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
                            response: response
                        })
                    })
            })
})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer