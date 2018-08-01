import React from 'react'
import {ImageWidget} from "./ImageWidget"
import {ListWidget} from "./ListWidget"
import {LinkWidget} from "./LinkWidget"
import {HeadingWidget} from "./HeadingWidget";
import {ParagraphWidget} from "./ParagraphWidget"
import WidgetService from "../services/WidgetService"

import styles from "../style/style.css"

export const  WidgetListComponent  = ({widgets,updateWidget,deleteWidget}) =>
{
        let widgetTitle, widgetType, widgetType2;


        return (
            <div>
                <br/>
                {widgets.map((widget, index) =>
                        <li className="list-group-item"
                            key={index}>
                            <div>
                                {widget.widgetType === 'Heading Widget' && <HeadingWidget widget = {widget} updateWidget = {updateWidget} deleteWidget = {deleteWidget}/>}
                                {widget.widgetType === 'Link Widget'    &&    <LinkWidget widget = {widget} updateWidget = {updateWidget} deleteWidget = {deleteWidget}/>}
                                {widget.widgetType === 'List Widget'    &&    <ListWidget widget = {widget} updateWidget = {updateWidget} deleteWidget = {deleteWidget}/>}
                                {widget.widgetType === 'Image Widget'   &&   <ImageWidget widget = {widget} updateWidget = {updateWidget} deleteWidget = {deleteWidget}/>}
                                {widget.widgetType === 'Paragraph Widget' && <ParagraphWidget widget = {widget} updateWidget = {updateWidget} deleteWidget = {deleteWidget}/>}
                            </div>


                        </li>
                    )}
                    </div>
        );
}





