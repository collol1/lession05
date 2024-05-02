import React, { Component } from 'react';

class NVHForm1 extends Component {
    constructor(props){
        super(props);
        this.state={
            studenname:"nguyen van huynh"
        }
    }
     handleChange = (ev)=>{
        let ten = ev.target.name;
        let gtri = ev.target.value;
        this.setState({
            [ten]:gtri
        })
    }
    handleSubmit=(ev)=>{
        ev.praventDefault();
        alert(this.state.studenname)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label>ho va ten</label>
                <input name='studentname' value={this.state.studenname} 
                
                onChange={this.handleChange} />
                    </div>
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default NVHForm1;
