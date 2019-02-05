import CourseService from '../services/CourseService'

const service = new CourseService();
const widgets = {
    widgets: service.findAllWidgets()
};

const widgetReducer = (state = widgets, action) => {
    console.log(widgets)
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

        //TODO
        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            return {
                widgets: state.widgets.filter()
            };
        case 'FIND_ALL_WIDGETS':
            return state.widgets;
        default:
            return state;
    }
}

export default widgetReducer;