import React, { Component } from 'react';

class NVHForm2 extends Component {
    constructor(props){
        super(props);
        this.state ={
            khoahoc:"reactjs"
        }
    }
    handlechange=(ev)=>{
        this.setState({
            khoahoc:ev.target.value
        })
    }
    handlesubmit=(event)=>{
        event.praventdafault();
        alert(this.state.khoahoc)
    }
    render() {
        return (
            <div>
                <form>
                    <label>khoa hoc</label>
                    <select value={this.state.khoahoc} name="khoahoc" onChange={this.handlechange}>
                        <option value='HTML'>HTML</option>
                        <option value='css'>css</option>
                        <option value='js'>js</option>
                        <option value='reactjs'>reactjs</option>
                    </select>
                    <button onClick={this.handlesubmit}>submit</button>
                </form>
            </div>
        );
    }
}

export default NVHForm2;
