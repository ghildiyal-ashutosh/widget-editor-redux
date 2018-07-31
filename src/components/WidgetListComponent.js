import React from 'react'
import {ImageWidget} from "./ImageWidget"
import {ListWidget} from "./ListWidget"
import {LinkWidget} from "./LinkWidget"
import {HeadingWidget} from "./HeadingWidget";
import {ParagraphWidget} from "./ParagraphWidget"
import ToggleButton from 'react-toggle-button'
import styles from "../style/style.css"

export const WidgetListComponent = ({widgets,deleteWidget,createWidget,updateWidget, saveWidget,previewWidget}) =>
 {
     let widgetTitle,widgetType,widgetType2;
     let value = 0;
     return (
     <div>
         <div
             className= "row float-right">
             <button
                 onClick={saveWidget}
                 className= "btn btn-sm btn-success">
                     Save
                 </button>
                   Preview <ToggleButton
                             value={value}
                             id = "toggle"
                               onClick={() => {
                                   value = 1;
                               }}/>
         </div>
         <br/> <br/> <br/>

         <ul className="list-group">

             <li className="list-group-item">
                 <div className="row">
                     <input placeholder="Add New Widget"
                            ref = {node => widgetTitle = node}
                            className="form-control col-6"/>

                     <select ref = {node => widgetType = node}
                         className="col-3  selectWidget">
                         <option value = "List Widget"> List</option>
                         <option value = "Paragraph Widget"> Paragraph</option>
                         <option value = "Heading Widget"> Heading</option>
                         <option value = "Link Widget"> Link</option>
                         <option value = "Image Widget"> Image</option>
                     </select>

                     <button className="btn btn-success form-control col-2 addWidget"
                             onClick={ () =>{
                                 let widget = {title: widgetTitle.value,
                                               id : (new Date ()).getTime(),
                                                widgetType: widgetType.value}
                                 createWidget(widget)
                                 widgetTitle.value = "";
                             }}>
                         Add
                     </button>

                 </div>
             </li>
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
         </ul>
     </div>
     );
 }

