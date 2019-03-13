import WidgetService from '../services/WidgetService'
import TopicService from '../services/TopicService'
import HeadingWidgetService from "../services/HeadingWidgetService";
import ParagraphWidgetService from "../services/ParagraphWidgetService";
import ImageWidgetService from "../services/ImageWidgetService";
import ListWidgetService from "../services/ListWidgetService";
import LinkWidgetService from "../services/LinkWidgetService";

const service = new WidgetService();
const headingService = new HeadingWidgetService();
const paragraphService = new ParagraphWidgetService();
const imageService = new ImageWidgetService();
const listService = new ListWidgetService();
const linkService = new LinkWidgetService();
const tService = new TopicService();

let topicId = -1;

const widgets = {
    widgets: []
};

const widgetReducer = (state = widgets, action) => {
    switch (action.type) {
        case 'CREATE_WIDGET':
            if (topicId == -1) {
                return;
            }
            const widget = {
                name: 'New Widget',
                type: 'HEADING',
                text: 'New Widget',
                size: 1
            }
            headingService.createWidget(topicId, widget);
            return {
                widgets: state.widgets, widget
            }
        case 'DELETE_WIDGET':
            service.deleteWidget(action.widget);
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
            }

        case 'UPDATE_WIDGET':
            service.updateWidget(action.widget);
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
            return {
                widgets: action.response
            }
        case 'FIND_ALL_WIDGETS':
            return state;
        case 'CHANGE_WIDGET_TYPE':
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }
        case 'UPDATE_HEADING_WIDGET':
            headingService.updateHeadingWidget(action.widget);
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }
        case 'UPDATE_PARAGRAPH_WIDGET':
            paragraphService.updateParagraphWidget(action.widget);
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }
        case 'UPDATE_IMAGE_WIDGET':
            imageService.updateImageWidget(action.widget);
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }
        case 'UPDATE_LIST_WIDGET':
            listService.updateListWidget(action.widget);
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }
        case 'UPDATE_LINK_WIDGET':
            linkService.updateLinkWidget(action.widget);
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }
        default:
            return state;
    }
}

export default widgetReducer;