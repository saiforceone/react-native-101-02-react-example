import React from 'react';

export default class PersonClassComponent extends React.Component {

  // Optional constructor
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  // If you just wanted to define state only here
  // state = {
  //   count: 0,
  // };

  componentDidMount() {
    console.log('component did mount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('component did update - class');
    console.log(`prevState.count: ${prevState.count}, currentState.count: ${this.state.count}`);
  }

  componentWillUnmount() {
    console.log('do clean up');
  }

  updateCount = () => {
    this.setState(prevState => ({...prevState, count: prevState.count + 1}));
  }

  render() {
    const {heroes} = this.props;
    return (
      <div>
        <h1>Some Person - Class</h1>
        <p>Some occupation</p>
        <p>count: {this.state.count}</p>
        <button onClick={() => this.updateCount()}>Increment</button>
        <hr />
        {heroes.map((hero, index) => (
          <div key={`class-hero-${index}`}>
            <h3>{hero['name']}</h3>
          </div>
        ))}
      </div>
    );
  }
}