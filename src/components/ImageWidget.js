import React from 'react'

export const ImageWidget = ({widget,updateWidget,deleteWidget,preview,up,down,length}) =>
{
    let widgetText,widgetType,widgetName;
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
            value = {widget.widgetType}
            ref={node => widgetType = node}
            className= "selectWidget"
            onChange={ () => {
                let widget1 = {title:widget.title, id :widget.id,
                    widgetType: widgetType.value, link:widget.link,
                    text: widget.text, size: widget.size,
                    layout:widget.layout,lorder:widget.lorder}
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
            <br/>

            <label hidden={preview}
                className="form-control"
                   htmlFor="inputFld">
                Image-Link
            </label>
            <br/>

            <input hidden={preview}
                   placeholder="Image URL"
                id = "inputFld"
                defaultValue={widget.link}
                ref={node => widgetText = node}
                className="form-control"
                onChange={ () => {
                    widget.link = widgetText.value;
                    updateWidget(widget)
                }}/>
            <br/>
            <label
                hidden={preview}
                className="form-control"
                htmlFor= "widgetName"> Widget-Name</label>

            <input
                id = "widgetName"
                ref = {node => widgetName = node}
                hidden={preview}
                placeholder="Enter Widget Name"
                defaultValue={widget.title}
                className="form-control"
                onChange={ () => {
                    widget.title = widgetName.value;
                    updateWidget(widget)
                }}/>


<br/>
            <h4>Preview-Image</h4>
            <img
                alt= "Image Not Yet Loaded"
                width= "300"
                height="200"
                src={widget.link}/>
        </div>
    )
}

