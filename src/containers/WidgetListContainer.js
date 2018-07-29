import {WidgetListComponent} from '../components/WidgetListComponent'
import {connect} from 'react-redux'



const stateToPropsMapper = state => (
    {
        widgets: state.widgets
    }
)

export const WidgetListContainer = connect(stateToPropsMapper)(WidgetListComponent)









