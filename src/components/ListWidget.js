import React from 'react'

export const ListWidget = ({widget,updateWidget,deleteWidget}) =>
{
    let widgetText,widgetType,layout;
    return (
    <div>
        <div className="row">
            <h3> {widget.widgetType}</h3>
            <hr/>
            <span className="float-right">
        <select value = {widget.widgetType}

            ref={node => widgetType = node}
            className=" selectWidget"
            onChange={ () => {
                let widget1 = {title:widget.title, id :widget.id, widgetType: widgetType.value}
                updateWidget(widget1)

            }}>
            <option value="List Widget"> List</option>
            <option value="Paragraph Widget"> Paragraph</option>
            <option value="Heading Widget"> Heading</option>
            <option value="Link Widget"> Link</option>
            <option value="Image Widget"> Image</option>
        </select>
             <i className= "fa fa-times"
                onClick={() => deleteWidget(widget.id)}/>
        </span>
        </div>

            <textarea
                ref = {node=>widgetText = node}
                className="form-control"
                value = {widget.listItems}
            onChange={ () => {
            widget.listItems = widgetText.value
            updateWidget(widget)}}>
            </textarea>
            <br/>

        <select
            ref={node => layout = node}
             className="form-control"
        onChange={() => {
            widget.layout = layout.value
            updateWidget(widget)
        }}>
            <option value ="ol"> Ordered List</option>
            <option value = "ul"> Unordered List</option>
        </select>
        <br/>

                <h4> Preview</h4>
        {widget.layout === "ul" &&
                <ul>
                {widget.listItems.split('\n').map((item,index) => (
                    <li key = {index}>{item}</li>
                ))}
                </ul>}

        {widget.layout === "ol" &&
        <ol>
            {widget.listItems.split('\n').map((item,index) => (
                <li key = {index}>{item}</li>
            ))}
        </ol>}
        </div>


    );
}