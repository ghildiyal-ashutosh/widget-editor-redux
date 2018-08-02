let _singleton = Symbol();
//const WIDGET_API_URL = 'http://localhost:8080/api/course/CID/module/MID/lesson/LID/widget'
const WIDGET_API_URL = 'https://webdev-2.herokuapp.com/api/course/CID/module/MID/lesson/LID/widget'
export default class WidgetService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken) {
            throw new Error('Singleton !!!');
        }
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new WidgetService(_singleton)
        return (this[_singleton]);
    }

    findWidgetById(widgetId)
    {
       // var url = "http://localhost:8080/api/widget" + '/'+ widgetId
       var url =  "https://webdev-2.herokuapp.com/api/widget" + '/'+ widgetId
        return fetch(url)
            .then(function (response) {
                return response.json();
            });
    }



    findAllWidgets()
    {
       // var url = "http://localhost:8080/api/widget"
        var url =  "https://webdev-2.herokuapp.com/api/widget"
        return fetch(url)
            .then(function (response) {
                return response.json();
            });
    }


    saveWidgets(courseId, moduleId, lessonId,widgetList)
    {
        var url = WIDGET_API_URL.replace('CID', courseId).replace('MID', moduleId).replace('LID',lessonId);
        return fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(widgetList),
                headers:
                    {'Content-Type': 'application/json'}
            }).then(function (response) {

            return response.json();
        });
    }

    findAllWidgetsForLesson(courseId,moduleId,lessonId)
    {
        var url = WIDGET_API_URL.replace('CID',courseId).replace('MID',moduleId).replace('LID',lessonId)

        return fetch(url)
            .then(function(response){
                return response.json();
            });
    }


    updateWidget(widgetId,newWidget)
    {
      //  var url = "api/widget/" + widgetId;
        var url =  "https://webdev-2.herokuapp.com/api/widget" + '/'+ widgetId
        return fetch(url,
            {
                method : 'PUT',
                body :JSON.stringify(newWidget),
                headers:
                    {'Content-Type' : 'application/json'}

            }).then (function (response) {
                return response.json();

            });
    }

    deleteWidget(widgetId)
    {
       // var url = "api/widget/" + widgetId;
        var url =  "https://webdev-2.herokuapp.com/api/widget" + '/'+ widgetId
        return fetch(url,
            {
                method:'DELETE'
            });

    }


}
