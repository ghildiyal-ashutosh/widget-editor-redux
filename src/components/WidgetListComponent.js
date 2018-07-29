import React from 'react'

 export const WidgetListComponent = ({widgets,deleteWidget,createWidget}) =>
 {
     let widgetTitle;
     return (
     <div>
         <h1> Widget-List : ({widgets.length})</h1>
         <ul className="list-group">

             <li className="list-group-item">
                 <div className="row">
                     <input placeholder="Add New Widget"
                            ref = {node => widgetTitle = node}
                            className="form-control col-9"/>
                     <button className="btn btn-success col-2"
                             onClick={ () =>{
                                 let widget = {title: widgetTitle.value, id : (new Date ()).getTime()}
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
                     {widget.title} {widget.id} {widget.widgetType}
                     <button className="btn btn-danger float-right"
                             onClick={() => deleteWidget(widget.id)}> Delete
                     </button>
                 </li>
             )}
         </ul>
     </div>
     );
 }

