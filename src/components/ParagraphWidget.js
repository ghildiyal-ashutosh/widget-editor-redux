import React from 'react'

export const ParagraphWidget = ({widget,updateWidget,deleteWidget,preview,up,down,length}) =>
{
    let widgetText,widgetType;
    return(
        <div>
             <div  hidden={preview}
                           className="row">
                <h3> Paragraph</h3>
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
            <br/>

            <label
                hidden={preview}
                className="form-control"
                htmlFor="inputFld1">
                Text
            </label>


            <textarea
                hidden={preview}
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
                hidden={preview}
                readOnly = "readonly"
                defaultValue={widget.title}
                className="form-control">
            </input>

            <br/>
            <h4> Preview-Paragraph</h4>
            <div>
            <p>{widget.paraText} </p>
            </div>
        </div>

    )
}

