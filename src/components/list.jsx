import React, { Component } from "react";
import { getData, addCounter, addTodo } from "../js/actions";
import { connect } from "react-redux";


export class List extends Component {
  constructor(props){
    super(props);
    this.addCounter = this.addCounter.bind(this);
    this.addTodo = this.addTodo.bind(this);    
  }
  componentDidMount(){
  
    this.props.getDataa()
  }
  render() {
    return (
      
     <div> 
       <button onClick={this.addCounter}> add counter </button> 
       <button onClick={this.addTodo}> add Todo </button>
       This is the List Component 

       <ul className="list-group list-group-flush">
          {this.props.todos.map(el => (
            <li className="list-group-item" key={Math.random()}>
              {el}
            </li>
          ))}
        </ul>
      </div> 
    );
  }
  addCounter(){
    
    this.props.addCounter()
  }
  addTodo(){
    
    this.props.addTodo()
  }
}

function mapStateToProps(state) {

  console.log('checking state in list')
  console.log(state)
  return {
    todos: state.todos
  };
  // return {
  //   articles: state.remoteArticles.slice(0, 10)
  // };
}

function mapDispatchToProps(dispatch){
  return {
    getDataa: article => dispatch(getData(article)),
    addCounter: () => { dispatch(addCounter()) },
    addTodo : () => { dispatch(addTodo()) },
    // getDataa: { }
  }
}

// export default List;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
