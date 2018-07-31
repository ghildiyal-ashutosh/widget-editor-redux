
let initialState = {
    widgets: [
        {title: 'Widget-1', id:  123, widgetType: 'Heading Widget',text: "Cheebu" },
        {title: 'Widget-2', id : 223, widgetType: 'Image Widget', imgLink:"https://picsum.photos/300/200/?random" },
        {title: 'Widget-3', id : 220, widgetType: 'Link Widget', link: "www.youtube.com"},
        {title: 'Widget-4', id : 226, widgetType: 'List Widget', layout: 'ol', listItems: 'item 1\nitem 2\nitem 3\nitem 4'},
        {title: 'Widget-5', id : 228, widgetType: 'Paragraph Widget', paraText: "Hello World!!! \n Carpe Diem"},
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
                        return action.widget
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



