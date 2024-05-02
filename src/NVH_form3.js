import React, { Component } from 'react';

class NVHForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentname:'nguyen van huynh',
            age:20,
            course:'reactjs'
        }
    }
    handlechange = (ev)=>{
        let name=ev.target.name;
        let val=ev.target.value;
        this.setState({
            [name]:val
        })
    }
    handlesumnit = (ev)=>{
        ev.preventdefault();
        alert(this.state.studentname +"\n" +this.state.age +"\n" +this.state.course)
        let obj = {
            studentname:'nguyen van huynh',
        age:20,
        course:'reactjs'
    }
        this.props.onsumbit()
    }
    render() {
        return (
            <div>
                <form name="NVHform">
                    <div>
                    <label>ho va ten</label>
                <input name='studentname' value={this.state.studenname}/>
                </div>
                <div>
                    <label>tuoi</label>
                <input name='age' value={this.state.age} onChange={this.handlechange}/>
                </div>
                <div>
                    <label>khoahoc</label>
                    <select value={this.state.course} name="course" onChange={this.handlechange}>
                        <option value='HTML'>HTML</option>
                        <option value='css'>css</option>
                        <option value='js'>js</option>
                        <option value='reactjs'>reactjs</option>
                    </select>
                </div>
                <button onClick={this.handlesumnit}>submit</button>
                </form>
            </div>
        );
    }
}

export default NVHForm3;
