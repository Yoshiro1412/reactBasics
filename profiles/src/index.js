import React from 'react';
import ReactDOM from 'react-dom';


function Welcome(props){
  // {} is use to put JS in the HTML
  return <h1>Hello, {props.name}</h1>;
}

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
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

