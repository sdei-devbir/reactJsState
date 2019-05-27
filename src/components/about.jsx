import React, { Component } from "react";
import { connect } from "react-redux";

export class About extends Component {
  render() {
    return (
      
     <div> This is the About Component </div> 
    );
  }
}

function mapStateToProps(state) {

  console.log('checking state in about')
  console.log(state)
  return {
    todos: state.todos
  };
}

export default connect(
  mapStateToProps
)(About);

// export default About;
