import React from "react";
class ReactLifecycleMethods extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }
  updateNum = () => {
    this.setState({ number: this.state.number + 1 })
  }
  componentDidMount(){
    console.log("Comp Mounted");
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.number !== this.state.number){
        console.log("Update Comp",prevState.number, this.state.number);
    }
  }
  componentWillUnmount(){
    console.log("Comp Unmounted");
    this.setState({number:10000})
  }
  render() {
    return (
      <div>
        <h1>This is React Lifecycle Methods</h1>
        <h2>The state value is {this.state.number}</h2>
        <button
          onClick={this.updateNum}
        >
          +
        </button>
      </div>
    );
  }
}
export default ReactLifecycleMethods;