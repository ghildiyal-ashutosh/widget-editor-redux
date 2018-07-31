import React from 'react'

export const LinkWidget = ({widget,updateWidget,deleteWidget}) =>
{
    let widgetText,widgetType;
    return(
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

       <br/>


            <input
                readOnly = "readonly"
               defaultValue={widget.link}
                className="form-control">
            </input>

           <br/>
            <label
                htmlFor="inputFld"
                   className="form-control">
                Link Text
            </label>


            <input
                id = "inputFld"
                placeholder= "update Link"
                ref={node => widgetText = node}
                className="form-control"
                onChange={ () => {
                    let widget1 = {link:widgetText.value, id :widget.id, widgetType: widget.widgetType}
                    updateWidget(widget1)
                }}/>
            <br/>

            <input
                readOnly = "readonly"
                defaultValue={widget.title}
                className="form-control">
            </input>
            <br/>

            <h4> Preview</h4>
            {widget.link}


        </div>

    )}