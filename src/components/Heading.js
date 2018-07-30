import React from 'react'

export const Heading = ({widget,updateWidget}) =>
{
    let widgetTitle,widgetType;
    return(
    <div>
        <h3> Heading-Widget</h3>
        <div className="row">
            <input
                placeholder="Update Widget"
                ref={node => widgetTitle = node}
                className="form-control col-6"
                onChange={ () => {
                    let widget1 = {title:widgetTitle.value, id :widget.id, widgetType: widget.widgetType}
                    updateWidget(widget1)
                }}/>

            <select ref={node => widgetType = node}
                    className="col-3  selectWidget"
                    onChange={ () => {
                        let widget1 = {title:widget.title, id :widget.id, widgetType: widgetType.value}
                        updateWidget(widget1)
                    }}>
                <option value="List"> List</option>
                <option value="Paragraph"> Paragraph</option>
                <option value="Heading"> Heading</option>
                <option value="Link"> Link</option>
                <option value="Image"> Image</option>
            </select>

        </div>
    </div>
    );
}