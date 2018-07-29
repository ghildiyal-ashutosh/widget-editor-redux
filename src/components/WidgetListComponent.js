import React from 'react'

 export const WidgetListComponent = ({widgets,deleteWidget}) =>
    <div>
        <h1> Widget-List : ({widgets.length})</h1>
        <ul className="list-group">
            {widgets.map((widget,index) =>
            <li className="list-group-item"
                key = {index}>
                {widget.title}
                <button className="btn btn-danger float-right"
                        onClick = {deleteWidget}> Delete</button>
            </li>
            )}
        </ul>
    </div>

