
let initialState = {
    widgets: [
        {title: 'Widget-1', id:  123, widgetType: 'Heading'},
        {title: 'Widget-2', id : 223, widgetType: 'Image'},
        {title: 'Widget-3', id : 220, widgetType: 'Link'},
        {title: 'Widget-4', id : 226, widgetType: 'List'},
        {title: 'Widget-5', id : 228, widgetType: 'Paragraph'},
    ]
};

export const WidgetReducer = (state = initialState,action) =>
{
    switch(action.type)
    {
        case 'DELETE_WIDGET':
            return {
                widgets:state.widgets.filter(
                    widget => widget.id !== action.widgetId
                )
            }
            break;

        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
            break;

        case 'UPDATE_WIDGET':
            return{
                widgets:state.widgets.map(widget => {
                    if (widget.id === action.widget.id)
                    {
                        widget.widgetType = action.widget.widgetType
                        widget.title = action.widget.title
                        console.log(widget)
                        return widget
                    }
                    else
                    {
                        return widget
                    }



                })

            }
            break;
        default:
            return state
    }
}



