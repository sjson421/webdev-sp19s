import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'
import TopicService from '../services/TopicService'
import HeadingWidgetService from '../services/HeadingWidgetService'
import CourseEditor from '../components/CourseEditor'

const topicService = new TopicService();
const headingService = new HeadingWidgetService();

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
    updateWidgets: widgets =>
        dispatch({
            type: 'UPDATE_WIDGETS',
            widgets: widgets
        }),
    updateHeadingWidget: widget =>
        dispatch({
            type: 'UPDATE_HEADING_WIDGET',
            widget: widget
        }),
    updateParagraphWidget: widget =>
        dispatch({
            type: 'UPDATE_PARAGRAPH_WIDGET',
            widget: widget
        }),
    updateListWidget: widget =>
        dispatch({
            type: 'UPDATE_LIST_WIDGET',
            widget: widget
        }),
    updateImageWidget: widget =>
        dispatch({
            type: 'UPDATE_IMAGE_WIDGET',
            widget: widget
        }),
    updateLinkWidget: widget =>
        dispatch({
            type: 'UPDATE_LINK_WIDGET',
            widget: widget
        }),
})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer