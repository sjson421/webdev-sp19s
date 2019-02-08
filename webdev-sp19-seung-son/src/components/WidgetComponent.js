import React from 'react'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'
import ParagraphWidget from './ParagraphWidget'
import ListWidget from './ListWidget'
import LinkWidget from './LinkWidget'

const buttonMargin = {
    margin: "0.2em"
}
const WidgetComponent = ({widget, deleteWidget, updateWidget, updateWidgets, widgets}) =>
    <div style = {{marginBottom: "2em"}}>
        {
            widget.type == 'HEADING' &&
            <HeadingWidget
                updateWidget={updateWidget}
                deleteWidget={deleteWidget}
                updateWidgets={updateWidgets}
                widget={widget}
                widgets={widgets}/> ||
            widget.type == 'PARAGRAPH' &&
            <ParagraphWidget
                updateWidget={updateWidget}
                deleteWidget={deleteWidget}
                updateWidgets={updateWidgets}
                widget={widget}
                widgets={widgets}/> ||
            widget.type == 'LIST' &&
            <ListWidget
                updateWidget={updateWidget}
                deleteWidget={deleteWidget}
                updateWidgets={updateWidgets}
                widget={widget}
                widgets={widgets}/> ||
            widget.type == 'IMAGE' &&
            <ImageWidget
                widget={widget}
                deleteWidget={deleteWidget}
                updateWidget={updateWidget}
                updateWidgets={updateWidgets}
                widgets={widgets}/> ||
            widget.type == 'LINK' &&
            <LinkWidget
                updateWidget={updateWidget}
                deleteWidget={deleteWidget}
                updateWidgets={updateWidgets}
                widget={widget}
                widgets={widgets}/>

        }
        <hr/>
    </div>

export default WidgetComponent