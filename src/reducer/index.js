import WidgetService from "../services/WidgetService"
import LessonService from "../services/LessonService";


export const WidgetReducer = (state = {widgets:[],preview: false} ,action) =>
{
    let fromIndex,toIndex,state2;
    this.widgetService = WidgetService.instance;
    switch(action.type)
    {
        case 'LOAD_MODULES' :
            return{
                widgets:action.widgets
            }
            break;
        case 'DELETE_WIDGET':

            return {
                widgets:state.widgets.filter(
                    widget => widget.id !== action.widgetId
                )
            }
            break;

        case 'MOVE_UP':

            fromIndex = state.widgets.findIndex(widget => widget.id === action.widgetId);
            toIndex = fromIndex--;
            state2 = JSON.parse(JSON.stringify(state));           // state2 = Object.assign(state);
            state2.widgets.splice(toIndex, 0, state2.widgets.splice(fromIndex, 1)[0]);
            return {widgets:
                    (state2.widgets.map((widget) => {
                        if(widget.id === action.widgetId)
                        {

                            widget.lorder = widget.lorder - 1;

                            return widget
                        }
                            else if ( widget.lorder === action.lorder-1)
                        {
                            widget.lorder = widget.lorder+1;
                            console.log(widget);
                            return widget;

                        }

                        else
                        {
                            return widget;
                        }
                    }))}
             break;

            case 'MOVE_DOWN':

                fromIndex = state.widgets.findIndex(widget => widget.id === action.widgetId);
            toIndex = fromIndex++;
            state2 = JSON.parse(JSON.stringify(state));
            // state2 = Object.assign(state);
            state2.widgets.splice(toIndex, 0, state2.widgets.splice(fromIndex, 1)[0]);
            return {widgets:
                    (state2.widgets.map((widget) => {
                if(widget.id === action.widgetId)
                {
                    console.log(widget.lorder)
                    widget.lorder =  widget.lorder+1;
                    console.log(widget)
                    return widget;
                }
                else if (widget.lorder === action.lorder+1)
                {
                    widget.lorder = widget.lorder-1;
                    console.log(widget.lorder)
                    return widget;
                }
                else
                {
                    return widget;
                }
            }))}
            break;

        case 'CREATE_WIDGET':
         //   console.log(action.widget);
            return {
                widgets: [
                    ...state.widgets,
                    action.widget

                ]
            }
            break;

        case 'UPDATE_PREVIEW':
            return{
                widgets:state.widgets,
                preview: !(state.preview)
            }

        case 'SAVE_WIDGETS':
          console.log(state.widgets);
            this.widgetService
                .saveWidgets(action.courseId,action.moduleId,action.lessonId, state.widgets);
            return state;

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



