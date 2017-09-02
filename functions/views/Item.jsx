var React = require('react');

class ToDoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {EditText : false}
        this.Edit = this.Edit.bind(this);
        this.Remove = this.Remove.bind(this);
        this.Update = this.Update.bind(this);
        this.Cancel = this.Cancel.bind(this);
    }
    Remove(){
        this.props.RemoveItem(this.props.Index);
    }
    Edit(){
        this.setState({
            EditText:true
        })
    }
    Update(e){
        e.preventDefault();
        var value = this.refs.Text.value;
        if(value.length!=0){
            this.props.UpdateItem(value,this.props.Index);
            this.setState({
                EditText:false
            })
        }
    }
    Cancel(){
        this.setState({
            EditText:false
        });
    }
    renderEditing(){
        return (<tr>
                <td className="col-lg-3">
                <form onSubmit={this.Update} className="input-group">
                    <input type="text" ref="Text" className = "col-lg-4 form-control input-lg" placeholder={this.props.children}/>
                    <span className="input-group-btn">
                        <input type="submit" value="Save" className="btn btn-success"/>
                        <button className = "btn btn-default" onClick = {this.Cancel}>Cancel</button>
                    </span>
                </form>
                </td>
                
            
        </tr>);
    }
    renderDisplay(){
        return(<tr>
            <td className=" input-group">
                <h4 className="input-group-addon col-lg-3 text-left">{this.props.children}</h4>
               <span className="input-group-btn " >
                    <button className = "btn btn-primary" onClick = {this.Edit}>Edit</button>
                    <button className = "btn btn-Danger" onClick = {this.Remove}>Remove</button>
                </span>
                </td>
            </tr>);
    }
    render(){
        if(this.state.EditText){
            return (this.renderEditing());
        }
        else{
            return this.renderDisplay();
        }
    }
}
module.exports = ToDoItem;