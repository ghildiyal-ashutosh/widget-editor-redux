import React from 'react'
import styles from "../style/style.css"

export const HeadingWidget = ({widget,updateWidget,deleteWidget}) =>
{
    let  widgetType,headingText,headingSize;
    return(
        <div>
    <div className= "row">
        <h3> {widget.widgetType}</h3>
        <hr/>
        <span className="float-right">
        <select
            value={widget.widgetType}
            ref={node => widgetType = node}
            className=" selectWidget"
            onChange={ () => {
                let widget1 = {title:widget.title, id :widget.id, widgetType: widgetType.value}
                updateWidget(widget1)
                widgetType.value = ""
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
            <div>

            <label  htmlFor= "text" > Heading Text</label>
            <input
                id = "text"
                defaultValue={widget.text}
                ref={node => headingText = node}
                className="form-control"
                onChange={ () => {
                    let widget1 = {text:headingText.value, id :widget.id, widgetType: widget.widgetType, size:widget.size}
                    updateWidget(widget1)
                }}/>

                <br/>

            <label htmlFor= "selectFld"> Heading Size</label>

            <select
                ref = {node => headingSize = node}
            id = "selectFld"
            className="form-control"
            onChange={ () => {
                let widget1 = {id:widget.id, size:headingSize.value, widgetType: widget.widgetType, text:widget.text}
                updateWidget(widget1)
            }}>
            <option value = "1"> Heading 1</option>
            <option value = "2"> Heading 2</option>
            <option value = "3"> Heading 3</option>
            <option value = "4"> Heading 4</option>
        </select>
            </div>

            <br/>

            <input
                readOnly = "readonly"
                defaultValue={widget.title}
                className="form-control">
            </input>
            <br/>


            <h4> Preview </h4>
            {widget.size === '1' && <h4> {widget.text}</h4>}
            {widget.size === '2' && <h3> {widget.text}</h3>}
            {widget.size === '3' && <h2> {widget.text}</h2>}
            {widget.size === '4' && <h1> {widget.text}</h1>}

        </div>
    );
}