import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'
import TopicService from '../services/TopicService'

const service = new TopicService();

const stateToPropertyMapper = state => {
    return {
        widgets: state.widgets
    }
}
const dispatchToPropertyMapper = (dispatch, widgets) => ({
    createWidget: () => {
        const widget = {
            name: 'New Widget',
            text: 'New Widget',
            size: 1
        }
        dispatch({
            type: 'CREATE_WIDGET'
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
        })
})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer