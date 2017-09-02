const React = require('react');
const Template = require('./html.jsx');
const ToDoItem = require('./Item.jsx');
const firebase = require('firebase');
var config = {
    apiKey: "AIzaSyA1-thkOzrtaPplVdOlenOMdVEhd-Dg8rA",
    authDomain: "to-do-list-e3a05.firebaseapp.com",
    databaseURL: "https://to-do-list-e3a05.firebaseio.com",
    projectId: "to-do-list-e3a05",
    storageBucket: "to-do-list-e3a05.appspot.com",
    messagingSenderId: "415083564185"
};
firebase.initializeApp(config);


class First_Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {ItemText:[]}
        this.RemoveItem = this.RemoveItem.bind(this);
        this.AddItem = this.AddItem.bind(this);
        this.UpdateItem = this.UpdateItem.bind(this);
        this.PopulateItem = this.PopulateItem.bind(this);
        this.dataSnapshot = this.dataSnapshot.bind(this);
        this.updateDB = this.updateDB.bind(this);
    }
    RemoveItem(index){
        var arr = this.state.ItemText;
        arr.splice(index,1);
        this.setState({ItemText:arr});
        this.updateDB();
    }
    UpdateItem(value,index){
        var arr = this.state.ItemText;
        arr[index]=value;
        this.setState({ItemText:arr});
        this.updateDB();
    }
    AddItem(e){
        e.preventDefault();
        var arr = this.state.ItemText;
        var value =this.refs.addText.value; 
        arr.push(value);
        this.setState({ItemText:arr});
        this.updateDB();
    }
    PopulateItem(item,i){
        return (<ToDoItem key={i} Index={i} RemoveItem={this.RemoveItem} UpdateItem = {this.UpdateItem} >{item}</ToDoItem>);
    }
    dataSnapshot(snap){
        this.setState({ItemText:Object.values(snap.val())});
        console.log(Object.keys(snap.val()))
    }
    componentDidMount(){
        firebase.database().ref("To do List").on("value",this.dataSnapshot);
    }
    updateDB(){
        firebase.database().ref("To do List").set(this.state.ItemText);
    }
    render(){
        return(<Template title={this.props.title} >
            <div className="container">
            <h1>To Do Application</h1>
            <table className ="table table-striped table-hover ">
                <thead>
                    <tr>
                        <th className="col-lg-3" >
                            <form onSubmit={this.AddItem} className="input-group" >
                                <input ref="addText" type="text" className = "col-lg-4 form-control input-lg"/>
                                <span className="input-group-btn"><input type="submit" value={`Add Value Item # ${this.state.ItemText.length+1}`}   className="btn btn-default"/></span>
                            </form>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.ItemText.map(this.PopulateItem)}
                </tbody>
            </table> 
            <script dangerouslySetInnerHTML={{
                __html : 'window.PROPS=' + JSON.stringify(this.props)
            }}/>
            </div>
        </Template>);
    }
}

module.exports = First_Page;