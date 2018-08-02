import React from 'react'

export const LinkWidget = ({widget,updateWidget,deleteWidget,preview,up,down,length}) =>
{
    let widgetText,widgetType,linkText;
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


            <input
                placeholder= "Enter URL"
                ref = {node =>linkText = node}
                hidden={preview}
               defaultValue={widget.link}
                className="form-control"
              onChange={ () => {
                  let widget1 = {link:widgetText.value, id :widget.id, widgetType: widget.widgetType, linkText:linkText.value}
                  updateWidget(widget1)
              }}>
            </input>

           <br/>
            <label
                hidden={preview}
                htmlFor="inputFld"
                   className="form-control">
                Link Text
            </label>


            <input
                hidden={preview}
                id = "inputFld"
                placeholder= "Link-Text"
                ref={node => widgetText = node}
                className="form-control"
                onChange={ () => {
                    let widget1 = {link:widgetText.value, id :widget.id, widgetType: widget.widgetType}
                    updateWidget(widget1)
                }}/>
            <br/>

            <input
                hidden={preview}
                readOnly = "readonly"
                defaultValue={widget.linkText}
                className="form-control">
            </input>

            <br/>

            <input
                hidden={preview}
                readOnly = "readonly"
                defaultValue={widget.title}
                className="form-control">
            </input>
            <br/>

            <h4> Preview-Link</h4>
            {widget.link}


        </div>

    )}