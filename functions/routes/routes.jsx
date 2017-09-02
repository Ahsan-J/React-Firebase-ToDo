var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');

router.get('*',function(request,response){
    var props = {"title":'Ahsan|React To Do'};
    ReactRouter.match({
        routes:(
            <ReactRouter.Router history={ReactRouter.browserHistory}>
                <ReactRouter.Route path='/' component={require('../views/index.jsx')}>
                </ReactRouter.Route>
            </ReactRouter.Router>
        ),
        location:request.url
    },function(error,redirectLocation,renderProps){
        if(renderProps){
            var html = ReactDOMServer.renderToString(
            <ReactRouter.RouterContext {...renderProps}
               createElement={function(component,renderProps){
                   return <component {...renderProps}{...props}/>
               }}
            />
            );
            response.send(html);
        }
        else{
            response.status(404).send('Not Found');
        }
    });
});
module.exports = router;