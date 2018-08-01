import {WidgetListComponent} from '../components/WidgetListComponent'
import {connect} from 'react-redux'
import React from 'react'
import WidgetService from "../services/WidgetService";
let arr = {'courseId':1, 'moduleId' :1, 'lessonId':1};
let w = [];

/**
export default class WidgetListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            widgets: [],
            ids: {
                'courseId': this.props.courseId,
                'moduleId': this.props.moduleId,
                'lessonId': this.props.lessonId
            }
        }

        this.setIds = this.setIds.bind(this);
        this.widgetService = WidgetService.instance;
        this.findAllWidgetsForLesson = this.findAllWidgetsForLesson.bind(this);
    }


    componentDidMount() {

     //   console.log(this.props.courseId,this.props.moduleId,this.props.lessonId)

        this.setIds(this.props.courseId, this.props.moduleId, this.props.lessonId);
        this.findAllWidgetsForLesson(this.props.courseId, this.props.moduleId, this.props.lessonId);

    }

    componentWillReceiveProps(newProps) {
      //  console.log(newProps.courseId,newProps.moduleId,newProps.lessonId);

        this.setIds(newProps.courseId, newProps.moduleId, newProps.lessonId);
        this.findAllWidgetsForLesson(newProps.courseId, newProps.moduleId, newProps.lessonId);

    }

    setIds(courseId, moduleId, lessonId) {
        this.setState({ids: {'courseId': courseId, 'moduleId': moduleId, 'lessonId': lessonId}});
        arr = this.state.ids;
    }

    findAllWidgetsForLesson(courseId, moduleId, lessonId) {
        this.widgetService
            .findAllWidgetsForLesson(courseId, moduleId, lessonId)
            .then((widgets) => {
                this.setState({widgets: widgets})
            });

        w = this.state.widgets;
    }


    render() {
        return (
            <h2> Widget- Section </h2>
        )


    }
}
 */

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

        createWidget: (widget,ids) => dispatch({
            type: 'CREATE_WIDGET',
            widget : widget,

        }),

        updateWidget: (widget) => dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),

        saveWidgets: () => dispatch({
            type: 'SAVE_WIDGETS',
            ids: arr
        })
    }
)

export const App = connect(stateToPropsMapper,dispatchToPropsMapper)(WidgetListComponent)









