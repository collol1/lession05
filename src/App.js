import React, { Component } from 'react';
import NVHForm1 from './NVH_form1';
import NVHForm2 from './NVH_form2';
import NVHForm3 from './NVH_form3';

class App extends Component {
  handlesubmit =(param)=>{
    console.log(param);
  }
  render() {
    return (
      <div>
        <h1>event-form-controlled Component</h1>
        <div>
          <NVHForm1/>
          <NVHForm2/>
          <NVHForm3 onsubmit={this.handlesubmit} />
        </div>
      </div>
    );
  }
}

export default App;
