import React from 'react'
import {Image} from "./Image"
import {List} from "./List"
import {Link} from "./Link"
import {Heading} from "./Heading";
import {Paragraph} from "./Paragraph"
import styles from "../style/style.css"

export const WidgetListComponent = ({widgets,deleteWidget,createWidget,updateWidget}) =>
 {
     let widgetTitle,widgetType;
     return (
     <div>
         <h1> Widget-List : ({widgets.length})</h1>
         <ul className="list-group">

             <li className="list-group-item">
                 <div className="row">
                     <input placeholder="Add New Widget"
                            ref = {node => widgetTitle = node}
                            className="form-control col-6"/>

                     <select ref = {node => widgetType = node}
                         className="col-3  selectWidget">
                         <option value = "List"> List</option>
                         <option value = "Paragraph"> Paragraph</option>
                         <option value = "Heading"> Heading</option>
                         <option value = "Link"> Link</option>
                         <option value = "Image"> Image</option>
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
                     {widget.title} (Id: {widget.id}) (Type:{widget.widgetType})
                     <button className="btn btn-danger float-right"
                             onClick={() => deleteWidget(widget.id)}> Delete
                     </button>
                     <div>
                         {widget.widgetType === 'Heading' && <Heading widget = {widget} updateWidget = {updateWidget}/>}
                         {widget.widgetType === 'Link'    &&    <Link widget = {widget} updateWidget = {updateWidget}/>}
                         {widget.widgetType === 'List'    &&    <List widget = {widget} updateWidget = {updateWidget}/>}
                         {widget.widgetType === 'Image'   &&   <Image widget = {widget} updateWidget = {updateWidget}/>}
                         {widget.widgetType === 'Paragraph' && <Paragraph widget = {widget} updateWidget = {updateWidget}/>}
                     </div>
                 </li>
             )}
         </ul>
     </div>
     );
 }

