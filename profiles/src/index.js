import React from 'react';
import ReactDOM from 'react-dom';

// Hello World
function Welcome(props){
  // {} is use to put JS in the HTML
  return <h1>Hello, {props.name}</h1>;
}

// State
class Clock extends React.Component {

  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  // When the element is display attach this.tick()
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // When the component needs to be removed clear interval
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  // Update the date
  tick(){
    this.setState({
      date: new Date()
    })
  }

  render() {
    return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>;  
  }
}

// Events
class DarkMode extends React.Component {
  constructor(props){
    super(props);
    this.state = {darkTheme: false};

    // Requiered if you dont want to use arrow function
    this.changeTheme = this.changeTheme.bind(this);
  }

  // Arrow functions doesn't change 'this' *experimental syntax*
  // changeTheme = () => {this.setSate(state => ({darkTheme: !state.darkTheme}))}
  changeTheme(){
    this.setState(state => ({
      darkTheme: !state.darkTheme
    }));
  }

  render() {
    return (
      <div>

        {/* onClick={() => this.changeTheme()} allow to make the same without binding | Not recommended*/}
        <button onClick={this.changeTheme}>{this.state.darkTheme ? 'Turn light' : 'Turn Dark'}</button>
      </div>
    );
  }
}

// Lists
const todos = [
  { id:1, title: 'Learn React' },
  { id:2, title: 'Make the world shine' }
]

function ToDoList(props){
  return (
    <ul>
      {props.todos.map( task => {
        // Key prop must be in the render item
        return <li key={task.id}>{task.title}</li>
      })}
    </ul>
  )
}

// Forms
class IKnow extends React.Component {
  constructor(props){
    super(props);
    this.state = {tech: 'react'};
  }

  change = (event) => {
    this.setState({tech: event.target.value});
  }

  submit = (event) => {
    console.log(this.state.tech);
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <form onSubmit = { this.submit }>
          <select value = { this.state.tech } onChange = { this.change }>
            <option value ='react'>React</option>
            <option value ='node'>NodeJS</option>
            <option value ='express'>Express</option>
            <option value ='mongodb'>MongoDB</option>
          </select>
          <input type = 'submit' value = 'Submit' />
        </form>
      </div>
    )
  }
}

// Lifting 
function toBits(Bytes){
  return Bytes*8;
}

function toBytes(Bits){
  return Math.floor(Bits/8);
}

function convert(value, convertion){
  const input = parseInt(value);
  if(Number.isNaN(input)){
    return '';
  }
  const output = convertion(input);
  return output.toString();
}

const convertions = {'b':'Bits','B':'Bytes'};

class DataInput extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.handleChange(e.target.value);
  }

  render(){
    const value = this.props.value;
    const type = this.props.type;

    return (
      <fieldset>
        <legend>Enter {convertions[type]}</legend>
        <input value={value} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: 0, type: 'b'};
    this.handleBitChange = this.handleBitChange.bind(this);
    this.handleByteChange = this.handleByteChange.bind(this);
  }

  handleBitChange(value){
    this.setState({value, type: 'b'});
  }

  handleByteChange(value){
    this.setState({value, type: 'B'});
  }

  render(){
    const type = this.state.type;
    const value = this.state.value;
    const bits = type === 'B' ? convert(value,toBits) : value;
    const Bytes = type === 'b' ? convert(value,toBytes) : value;

    return (
      <div>
        <DataInput type='b' value={bits} handleChange={this.handleBitChange}/>
        <DataInput type='B' value={Bytes} handleChange={this.handleByteChange}/>
      </div>
    )

  }
}

// Composition
function Dialog(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {props.children}
    </div>
  )
}

function JustFun(){
  return (
    <Dialog 
    title = "Welcome"
    content = "Hello there">
      <input type="button" value="Just for fun" />
    </Dialog>
  )
}

function App(){
  return (
    <div>
      {/* You can pass custome props */}
      <Welcome name='Web!'/>
      <Welcome name='ReactJS'/>
      <Clock />
      <DarkMode />
      <ToDoList todos={todos} />
      <IKnow />
      <Calculator />
      <JustFun />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

