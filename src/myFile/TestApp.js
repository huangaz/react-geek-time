import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.intevalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intevalID);
  }

  render() {
    return (
      <div>
        <h1>当前时间: {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

class Click extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.isToggleOn ? "ON" : "OFF"}</h1>
        <button onClick={this.handleClick}>Switch</button>
      </div>
    );
  }
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function Gretting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcom back!</h1>;
  } else {
    return <h1>Please sign up!</h1>;
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Gretting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

export default class TestApp extends React.Component {
  render() {
    const numbers = [1, 2, 3, 4];

    return (
      <div>
        <Welcome name="World" text="welcom" />
        <br />
        <Clock />
        <br />
        <Click />
        <br />
        <LoginControl />
        <br />
        <NumberList numbers={numbers} />
      </div>
    );
  }
}
