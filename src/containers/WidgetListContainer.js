import {WidgetListComponent} from '../components/WidgetListComponent'
import {connect} from 'react-redux'
import React from 'react'
import WidgetService from "../services/WidgetService";

import ToggleButton from 'react-toggle-button'

import styles from "../style/style.css"



//widgets,deleteWidget,createWidget,updateWidget, saveWidgets,previewWidget

 class WidgetListContainer extends React.Component
 {

    constructor(props)
    {
        let widgetTitle,widgetType;

        super(props);



     //   console.log(this.props.courseId,this.props.moduleId,this.props.lessonId)


        this.setWidgets = this.setWidgets.bind(this);



    }

    componentDidMount()

    {

    }

    componentWillReceiveProps(newProps)
    {

        if (newProps.lessonId !== this.props.lessonId)
        {

            this.setWidgets(newProps.courseId, newProps.moduleId, newProps.lessonId);

        }



    }



    setWidgets(courseId,moduleId,lessonId)
    {
        this.props.loadAllWidgets(courseId,moduleId,lessonId)
    }



    render() {
        return (
            <div>

                <div
                    className= "row float-right">
                    <button
                        hidden={this.props.previewState}
                        onClick={() => {this.props.saveWidgets(this.props.courseId,
                                        this.props.moduleId,this.props.lessonId)}}
                        className= "btn btn-sm btn-success">
                        Save
                    </button>
                    Preview &nbsp; <ToggleButton
                                                value={this.props.previewState}
                                                 onToggle = {this.props.updatePreview}
                                                  id ="toggle"/>
                </div>

                <br/><br/><br/>


                <ul className="list-group">

                    <li hidden={this.props.previewState}
                        className="list-group-item">
                        <div className="row">
                            <input placeholder="Add New Widget"
                                   ref = {node => this.widgetTitle= node}
                                   className="form-control col-6"/>

                            <select ref = {node => this.widgetType = node}
                                    className="col-3  selectWidget">
                                <option value = "List Widget"> List</option>
                                <option value = "Paragraph Widget"> Paragraph</option>
                                <option value = "Heading Widget"> Heading</option>
                                <option value = "Link Widget"> Link</option>
                                <option value = "Image Widget"> Image</option>
                            </select>

                            <button
                                className="btn btn-success form-control col-2 addWidget"
                                    onClick={ () =>{
                                        let widget = {
                                            title: this.widgetTitle.value,
                                            widgetType: this.widgetType.value,
                                            id : ((new Date().getTime()/1000)),
                                            size: 1,
                                            layout:'ol' ,
                                            listItems: '',
                                            imgLink:'https://picsum.photos/300/200/?random',
                                            lorder:(this.props.widgets.length + 1)
                                        }
                                           this.props.createWidget(widget)
                                            this.widgetTitle.value = "";
                                    }}>
                                Add
                            </button>

                        </div>
                    </li>


            <WidgetListComponent
                                    moveUp = {this.props.moveUp}
                                    moveDown = {this.props.moveDown}
                                    widgetLength ={this.props.widgets.length}
                                    preview = {this.props.previewState}
                                    updateWidget = {this.props.updateWidget}
                                    deleteWidget = {this.props.deleteWidget}
                                    widgets = {this.props.widgets}/>
                </ul>
            </div>
        )
    }
}


const stateToPropsMapper = state => (
    {
        previewState: state.preview,
        widgets: state.widgets,


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
            widget : widget,

        }),

        updateWidget: (widget) => dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),

        updatePreview: () => dispatch({
            type: 'UPDATE_PREVIEW'
        }),

        moveUp: (lorder,id) => dispatch({
            type: 'MOVE_UP',
            lorder:lorder,
            widgetId:id
        }),

        moveDown: (lorder,widgetId) => dispatch({
            type: 'MOVE_DOWN',
            lorder:lorder,
            widgetId:widgetId
        }),

        saveWidgets: (courseId,moduleId,lessonId) => dispatch({
    type:'SAVE_WIDGETS',
    courseId: courseId,
    moduleId:moduleId,
    lessonId:lessonId
}),


        loadAllWidgets: (courseId,moduleId,lessonId) => {

            this.widgetService = WidgetService.instance;

            this.widgetService
                .findAllWidgetsForLesson(courseId,moduleId,lessonId)
                .then((widgets) => dispatch({

                    type:'LOAD_MODULES',
                    widgets:widgets
                }))


        }
    }
)

export const App = connect(stateToPropsMapper,dispatchToPropsMapper)(WidgetListContainer)









