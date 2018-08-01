import WidgetService from "../services/WidgetService"
import LessonService from "../services/LessonService";


export const WidgetReducer = (state = {widgets:[]} ,action) =>
{
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

        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
            break;

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



