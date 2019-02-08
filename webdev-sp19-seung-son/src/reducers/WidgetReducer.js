import CourseService from '../services/CourseService'

const service = new CourseService();
const widgets = {
    widgets: service.findAllWidgets()
};

let preview = {
    display: "none"
}

//GET ACTION TO GET TOPIC FROM COURSE EDITOR ON CLICK
const widgetReducer = (state = widgets, action) => {
    switch (action.type) {
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    {
                        type: 'HEADING',
                        text: 'New Widget',
                        size: 1
                    }
                ]
            }
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
            }

        case 'UPDATE_WIDGET':
            // replace the old widget with the new widget
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }
        case 'FIND_WIDGET':
            return widgets.find(widget =>
                widget.id === action.widget.id
            )

        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            return {
                widgets: service.findWidgets(action.topic.id)
            };
        case 'FIND_ALL_WIDGETS':
            return state.widgets;
        default:
            return state;
    }
}

export default widgetReducer;