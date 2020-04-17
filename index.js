import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      physics:'',
      chemistry:'',
      biology:'',
      maths:''
    };
  }
  handleChange=(event)=>{
    const name=event.target.name
    const value=event.target.value
    this.setState({
        [name]:value
      }
    )
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    const {physics, chemistry, biology, maths}=this.state;
    const average=(physics+chemistry+biology+maths)/400;
    console.log(physics +chemistry+biology+ maths)
    alert("Average of marks: "+average)
  }
  render() {
    return (
      <div>
        <h2>Marks Average</h2>
        <p>Enter your marks and click on Find Average</p> 
        <form onSubmit={this.handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td style={{padding:"15px"}}>Physics:</td>
              <td><input type="number" min="0" max="100" id="physics" name="physics" value={this.state.physics} onChange={(event)=>{this.handleChange(event)}} required/></td>
              </tr>
              <tr>
                <td style={{padding:"15px"}}>Chemistry:</td>
                <td><input type="number" min="0" max="100" id="chemistry" name="chemistry" value={this.state.chemistry} onChange={(event)=>{this.handleChange(event)}} required/>
                </td>
              </tr>
              <tr>
                <td style={{padding:"15px"}}>Biology:</td>
                <td><input type="number" min="0" max="100" id="biology" name="biology" value={this.state.biology} onChange={(event)=>{this.handleChange(event)}} required/></td>
              </tr>
              <tr>
                <td style={{padding:"15px"}}>Mathematics</td>
                <td><input type="number" min="0" max="100" id="maths" name="maths" value={this.state.maths} onChange={(event)=>{this.handleChange(event)}} required/></td>
              </tr>
          </tbody>
        </table>
        <button >
          Find Average
        </button>
        </form>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
