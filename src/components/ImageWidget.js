import React from 'react'

export const ImageWidget = ({widget,updateWidget,deleteWidget,preview}) =>
{
    let widgetText,widgetType;
    return(
        <div>
        <div hidden={preview}
            className="row">
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

            <label hidden={preview}
                className="form-control"
                   htmlFor="inputFld">
                Image-Link
            </label>
            <br/>

            <input hidden={preview}
                id = "inputFld"
                defaultValue={widget.imgLink}
                ref={node => widgetText = node}
                className="form-control"
                onChange={ () => {
                    let widget1 = {imgLink:widgetText.value, id :widget.id, widgetType: widget.widgetType}
                    updateWidget(widget1)
                }}/>
            <br/>

            <h4>Preview-Image</h4>
            <img
                alt= "Image Not Yet Loaded"
                width= "300"
                height="200"
                src={widget.imgLink}/>
        </div>
    )
}

