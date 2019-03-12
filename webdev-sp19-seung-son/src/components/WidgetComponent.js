import React from 'react'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'
import ParagraphWidget from './ParagraphWidget'
import ListWidget from './ListWidget'
import LinkWidget from './LinkWidget'

const WidgetComponent = ({widget, deleteWidget, updateWidget, updateWidgets, widgets, top, bottom, updateHeadingWidget,
                         updateParagraphWidget, updateListWidget, updateImageWidget, updateLinkWidget}) =>
    <div style = {{marginBottom: "2em"}}>
        {
            widget.type == 'HEADING' &&
            <HeadingWidget
                updateWidget={updateHeadingWidget}
                deleteWidget={deleteWidget}
                updateWidgets={updateWidgets}
                widget={widget}
                widgets={widgets}
                top={top}
                bottom={bottom}/> ||
            widget.type == 'PARAGRAPH' &&
            <ParagraphWidget
                updateWidget={updateParagraphWidget}
                deleteWidget={deleteWidget}
                updateWidgets={updateWidgets}
                widget={widget}
                widgets={widgets}
                top={top}
                bottom={bottom}/> ||
            widget.type == 'LIST' &&
            <ListWidget
                updateWidget={updateListWidget}
                deleteWidget={deleteWidget}
                updateWidgets={updateWidgets}
                widget={widget}
                widgets={widgets}
                top={top}
                bottom={bottom}/> ||
            widget.type == 'IMAGE' &&
            <ImageWidget
                widget={widget}
                deleteWidget={deleteWidget}
                updateWidget={updateImageWidget}
                updateWidgets={updateWidgets}
                widgets={widgets}
                top={top}
                bottom={bottom}/> ||
            widget.type == 'LINK' &&
            <LinkWidget
                updateWidget={updateLinkWidget}
                deleteWidget={deleteWidget}
                updateWidgets={updateWidgets}
                widget={widget}
                widgets={widgets}
                top={top}
                bottom={bottom}/>

        }
        <hr/>
    </div>

export default WidgetComponent