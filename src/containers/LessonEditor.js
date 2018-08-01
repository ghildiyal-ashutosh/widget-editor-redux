import React from 'react'
import LessonService from "../services/LessonService"
import {App} from "./WidgetListContainer"
import {WidgetReducer} from "../reducer/index"
import {createStore} from 'redux'
import {Provider} from 'react-redux'
//import WidgetListContainer from "./WidgetListContainer"
import styles from "../style/style.css"


let store = createStore(WidgetReducer);


export default class LessonEditor extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            courseId: '',
            moduleId : '',
            lessonId: '',
            lessonTitle: ''
        }

        this.setIds = this.setIds.bind(this);
        this.setLessonTitle = this.setLessonTitle.bind(this);
        this.lessonService = LessonService.instance;

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



    render()
    {
        return(
            <Provider store ={store}>
            <div className="container-fluid">

                <h1 id ="head"> Editing Lesson: {this.state.lessonTitle} </h1>


            <App/>
            </div>
        </Provider>

        );

    }

    /**
      <WidgetListContainer courseId = {this.state.courseId}
     moduleId = {this.state.moduleId}
     lessonId = {this.state.lessonId}/>
     */
}




