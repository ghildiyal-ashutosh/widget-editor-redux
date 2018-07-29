
let initialState = {
    widgets: [
        {title: 'Widget-1', id:  123, widgetType: 'WT1'},
        {title: 'Widget-2', id : 223, widgetType: 'WT2'},
        {title: 'Widget-3', id : 220, widgetType: 'WT3'},
        {title: 'Widget-4', id : 226, widgetType: 'WT1'},
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
        default:
            return state
    }
}



