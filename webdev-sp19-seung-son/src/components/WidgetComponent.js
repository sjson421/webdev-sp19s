import React from 'react'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'
import ParagraphWidget from './ParagraphWidget'
import ListWidget from './ListWidget'
import LinkWidget from './LinkWidget'

const WidgetComponent = ({widget, deleteWidget, updateWidget}) =>
    <div>
        <button onClick={() => deleteWidget(widget)}>Delete</button>
        <select
            onChange={(event) => {
                widget.type = event.target.value
                updateWidget(widget)
            }}
            className="form-control" value={widget.type}>
            <option value="HEADING">Heading</option>
            <option value="PARAGRAPH">Paragraph</option>
            <option value="LIST">List</option>
            <option value="IMAGE">Image</option>
            <option value="LINK">Link</option>
        </select>
        {
            widget.type == 'HEADING' &&
            <HeadingWidget
                updateWidget={updateWidget}
                widget={widget}/> ||
            widget.type == 'PARAGRAPH' &&
            <ParagraphWidget
                updateWidget={updateWidget}
                widget={widget}/> ||
            widget.type == 'LIST' &&
            <ListWidget
                updateWidget={updateWidget}
                widget={widget}/> ||
            widget.type == 'IMAGE' &&
            <ImageWidget widget={widget}/> ||
            widget.type == 'LINK' &&
            <LinkWidget
            updateWidget={updateWidget}
            widget={widget}/>

        }
    </div>

export default WidgetComponent