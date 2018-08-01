import React from 'react'
import LessonService from "../services/LessonService"
import {BrowserRouter as Router} from 'react-router-dom'
import {App} from "./WidgetListContainer"
import {WidgetReducer} from "../reducer/index"
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import styles from "../style/style.css"



let store = createStore(WidgetReducer);


export default class LessonEditor extends React.Component
{
    constructor(props)
    {
        super(props);

        this.setIds = this.setIds.bind(this);
        this.setLessonTitle = this.setLessonTitle.bind(this);
        this.lessonService = LessonService.instance;

        this.state = {
            courseId: '',
            moduleId : '',
            lessonId: '',
            lessonTitle: ''
        }

    }


    setIds(courseId,moduleId,lessonId)
    {

        this.setState({courseId: courseId,
                       moduleId:moduleId,
                       lessonId: lessonId});

    }

    setLessonTitle(courseId,moduleId,lessonId)
    {
        this.lessonService
            .findLessonById(courseId,moduleId,lessonId)
            .then((lesson) => {this.setState({lessonTitle:lesson.title})});
    }


    componentDidMount()
    {
        this.setIds(this.props.match.params.courseId,
            this.props.match.params.moduleId,
            this.props.match.params.lessonId);

        this.setLessonTitle(this.props.match.params.courseId,
            this.props.match.params.moduleId,
            this.props.match.params.lessonId);

    }

    componentWillReceiveProps(newProps)
    {
        this.setIds(newProps.match.params.courseId,
            newProps.match.params.moduleId,
            newProps.match.params.lessonId);

        this.setLessonTitle(newProps.match.params.courseId,
            newProps.match.params.moduleId,
            newProps.match.params.lessonId);


    }



    render()
    {
        return(
            <div className="container-fluid">
                <h1 id ="head"> Editing Lesson: {this.state.lessonTitle} </h1>
                <div>
                    <Provider store={store}>
                        <App lessonId={this.state.lessonId} moduleId={this.state.moduleId}
                             courseId={this.state.courseId}/>
                    </Provider>,
                </div>
            </div>
        );

    }


}




