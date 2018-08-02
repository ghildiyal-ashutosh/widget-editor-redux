import React from 'react'
import styles from "../style/style.css"

export const HeadingWidget = ({widget,updateWidget,deleteWidget,preview,up,down,length}) =>
{
    let  widgetType,headingText,headingSize;
    return(
        <div>
            <div  hidden={preview}
                  className="row">
                <h3> {widget.widgetType}</h3>
                <hr/>
                <span
                    className= "btn-group"
                    className="float-right">


                    <button
                        className="btn"
                        disabled={widget.lorder === 1}
                        onClick={() => {up(widget.lorder,widget.id)}}>
                    <i className="fa fa-caret-up"/>

                </button>

                     <button
                         className="btn"
                         disabled={widget.lorder === length}
                         onClick={() => {down(widget.lorder,widget.id)}}>
                             <i className="fa fa-caret-down"/>


                </button>


       <button className="btn">
        <select
            defaultValue = {widget.widgetType}
            ref={node => widgetType = node}
            className= "selectWidget"
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
       </button>
                <button className= "btn">
             <i className= "fa fa-times"
                onClick={() => deleteWidget(widget.id)}/>
                </button>
        </span>
            </div>


            <div hidden={preview}>

            <label  htmlFor= "text" > Heading Text</label>
            <input
                placeholder="Add Heading Text"
                id = "text"
                defaultValue={widget.text}
                ref={node => headingText = node}
                className="form-control"
                onChange={ () => {
                    widget.text = headingText.value
                    updateWidget(widget)
                }}/>

                <br/>

            <label htmlFor= "selectFld"> Heading Size</label>

            <select
                defaultValue= {widget.size}
                ref = {node => headingSize = node}
            id = "selectFld"
            className="form-control"
            onChange={ () => {
                widget.size = parseInt(headingSize.value);
                updateWidget(widget)
            }}>
            <option value ="1"> Heading 1</option>
            <option value = "2"> Heading 2</option>
            <option value = "3"> Heading 3</option>
            <option value = "4"> Heading 4</option>
        </select>
            </div>

            <br/>

            <input hidden={preview}
                readOnly = "readonly"
                defaultValue={widget.title}
                className="form-control">
            </input>
            <br/>


            <h4> Preview-Heading </h4>
            {widget.size === 1 && <h4> {widget.text}</h4>}
            {widget.size === 2 && <h3> {widget.text}</h3>}
            {widget.size === 3 && <h2> {widget.text}</h2>}
            {widget.size === 4 && <h1> {widget.text}</h1>}

        </div>
    );
}