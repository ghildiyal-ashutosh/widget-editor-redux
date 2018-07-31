import React from 'react'

export const ParagraphWidget = ({widget,updateWidget,deleteWidget}) =>
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

            <label
                className="form-control"
                htmlFor="inputFld1">
                Text
            </label>


            <textarea
                id = "inputFld1"
                defaultValue={widget.paraText}
                ref={node => widgetText = node}
                className="form-control"
                onChange={ () => {
                    let widget1 = {paraText:widgetText.value, id :widget.id, widgetType: widget.widgetType}
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
            <div>
            <p>{widget.paraText} </p>
            </div>
        </div>

    )
}

