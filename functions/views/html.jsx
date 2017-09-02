var React = require('react');

class HyperTextTemplate extends React.Component{
    render(){       
        return (
         <html lang="en">
                <head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                    <title>{this.props.title}</title> 
                    <link rel="stylesheet" href="css/paper_bootstrap.css"/>
                </head>
                <body>
                    <div id="page">
                        {this.props.children}
                    </div>
                    <script src="js/jquery.js"></script>
                    <script src="js/bootstrap.js"></script>
                    <script src="js/bundle.js"></script>
                </body>
             </html>
        );
    }
};

module.exports = HyperTextTemplate;