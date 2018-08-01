import React from 'react'
import {ImageWidget} from "./ImageWidget"
import {ListWidget} from "./ListWidget"
import {LinkWidget} from "./LinkWidget"
import {HeadingWidget} from "./HeadingWidget";
import {ParagraphWidget} from "./ParagraphWidget"
import WidgetService from "../services/WidgetService"

import styles from "../style/style.css"

export const  WidgetListComponent  = ({widgets,updateWidget,deleteWidget,preview,moveUp,moveDown,widgetLength}) =>
{
        let widgetTitle, widgetType, widgetType2;


        return (
            <div>
                <br/>

                {widgets.sort((a,b) => a.lorder > b.lorder).map((widget) =>
                        <li className="list-group-item"
                            key={widget.id}>

                            <div>
                                {widget.widgetType === 'Heading Widget' &&
                                <HeadingWidget widget = {widget} updateWidget = {updateWidget}
                                               deleteWidget = {deleteWidget} preview = {preview}
                                               length = {widgetLength} up ={moveUp} down = {moveDown}/>}

                                {widget.widgetType === 'Link Widget'    &&
                                <LinkWidget widget = {widget} updateWidget = {updateWidget}
                                            deleteWidget = {deleteWidget} preview = {preview}
                                            length = {widgetLength} up ={moveUp} down = {moveDown}/>}

                                {widget.widgetType === 'List Widget'    &&
                                <ListWidget widget = {widget} updateWidget = {updateWidget}
                                            deleteWidget = {deleteWidget} preview = {preview}
                                            length = {widgetLength} up ={moveUp} down = {moveDown}/>}

                                {widget.widgetType === 'Image Widget'   &&
                                <ImageWidget widget = {widget} updateWidget = {updateWidget}
                                             deleteWidget = {deleteWidget} preview = {preview}
                                             length = {widgetLength} up ={moveUp} down = {moveDown}/>}

                                {widget.widgetType === 'Paragraph Widget' &&
                                <ParagraphWidget widget = {widget} updateWidget = {updateWidget}
                                                 deleteWidget = {deleteWidget} preview = {preview}
                                                 length = {widgetLength} up ={moveUp} down = {moveDown}/>}
                            </div>


                        </li>
                    )}
                    </div>
        );
}





