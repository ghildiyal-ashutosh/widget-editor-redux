import {WidgetListComponent} from '../components/WidgetListComponent'
import {connect} from 'react-redux'



const stateToPropsMapper = state => (
    {
        widgets: state.widgets
    }
)

const dispatchToPropsMapper = dispatch => (
    {
        deleteWidget: (widgetId) => dispatch({
            type: 'DELETE_WIDGET',
            widgetId: widgetId
        }),

        createWidget: (widget) => dispatch({
            type: 'CREATE_WIDGET',
            widget : widget
        })
    }
)

export const WidgetListContainer = connect(stateToPropsMapper,dispatchToPropsMapper)(WidgetListComponent)









