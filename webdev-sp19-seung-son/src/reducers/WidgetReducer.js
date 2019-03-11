import WidgetService from '../services/WidgetService'
import TopicService from '../services/TopicService'
import HeadingWidgetService from "../services/HeadingWidgetService";

const service = new WidgetService();
const hService = new HeadingWidgetService();
const tService = new TopicService();

let topicId = -1;

const widgetReducer = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_WIDGET':
            if (topicId == -1) {
                return;
            }
            const widget = {
                name: 'New Widget',
                text: 'New Widget',
                size: 1
            }
            return hService.createWidget(topicId, widget)
                .then(() =>
                    tService.findAllWidgets(topicId)
                        .then(response => {
                                return {
                                    widgets: response
                                }
                            }
                        )
                )
        case 'DELETE_WIDGET':
            service.deleteWidget(action.widget);
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
            }

        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }
        case 'UPDATE_WIDGETS':
            return {
                widgets: [...action.widgets]
            }
        case 'FIND_WIDGET':
            return state.widgets.find(widget =>
                widget.id === action.widget.id
            )

        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            topicId = action.topic.id;
            return tService.findAllWidgets(action.topic.id)
                .then(response => {
                        return {
                            widgets: response
                        }
                    }
                )
        case 'FIND_ALL_WIDGETS':
            return state.widgets;
        default:
            return state;
    }
}

export default widgetReducer;